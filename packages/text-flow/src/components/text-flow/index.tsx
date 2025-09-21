import React from "react";

import { motion, AnimatePresence, Transition } from "motion/react";
import styles from "./styles";

import { TextFlowProps } from "./types";
import defaultConfig from "../../config";
import useDebounce from "../../hooks/useDebounce";
import { findLCS } from "../../utils";

const TextFlow = ({
  debug,
  children,
  duration = defaultConfig.duration,
  ease = defaultConfig.ease,
  // respectMotionPreference = defaultConfig.respectMotionPreference,
  onAnimationComplete,
}: TextFlowProps) => {
  const id = React.useId();
  const previousRef = React.useRef(children);
  const debounceChildren = useDebounce(children, 100);
  const containerRef = React.useRef<HTMLSpanElement>(null);
  const [width, setWidth] = React.useState<number | "auto">("auto");

  const transition: Transition = {
    duration,
    ease,
  };

  const previous = previousRef.current;
  React.useEffect(() => {
    previousRef.current = debounceChildren;
  }, [debounceChildren]);

  React.useEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        const observedWidth = entries[0]?.contentRect.width;
        if (observedWidth) setWidth(observedWidth);
      });

      resizeObserver.observe(containerRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }
    return () => {};
  }, []);

  const lcs = findLCS(previous, children);
  const prefixEnd = lcs ? children.indexOf(lcs) : 0;
  const suffixStart = lcs ? prefixEnd + lcs.length : 0;

  const prefix = children.slice(0, prefixEnd);
  const suffix = children.slice(suffixStart);

  const renderChars = (key: string, text: string) => (
    <motion.span
      style={styles.span}
      key={key}
      layout="position"
      layoutId={key}
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.95,
      }}
      transition={transition}
      onAnimationComplete={onAnimationComplete}
    >
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          style={styles.span}
          key={`${key}-${text}`}
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
            transition: {
              ...transition,
            },
          }}
          transition={{
            ...transition,
            delay: (transition?.duration ?? 0.4) * 0.25,
          }}
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );

  return (
    <motion.span
      style={{ ...styles.container, ...(debug ? styles.debug : {}) }}
      initial={{
        width,
      }}
      animate={{
        width,
      }}
      transition={transition}
    >
      <span ref={containerRef} style={styles.span}>
        <AnimatePresence initial={false} mode="popLayout">
          <motion.span
            key={`${id}-text-flow`}
            layoutId={`${id}-text-flow`}
            layout="position"
            transition={transition}
            style={styles.span}
          >
            <AnimatePresence initial={false} mode="popLayout">
              {prefix && renderChars(`${id}-prefix`, prefix)}
              {lcs && (
                <motion.span
                  layout="position"
                  layoutId={`${id}-lcs`}
                  transition={transition}
                  style={styles.span}
                >
                  {renderChars(`${id}-lcs-chars`, lcs)}
                </motion.span>
              )}
              {suffix && renderChars(`${id}-suffix`, suffix)}
            </AnimatePresence>
          </motion.span>
        </AnimatePresence>
      </span>
    </motion.span>
  );
};

export default TextFlow;
