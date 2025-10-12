"use client";

import React from "react";

import { motion, AnimatePresence, Transition } from "motion/react";
import styles from "./styles";

import { TorphProps } from "./types";
import defaultConfig from "../../config";
import { findLCS } from "../../utils";

import useDebounce from "../../hooks/useDebounce";

const Torph = ({
  debug,
  children,
  //fontSize,
  //fontWeight,
  duration = defaultConfig.duration,
  ease = defaultConfig.ease,
  // respectMotionPreference = defaultConfig.respectMotionPreference,
  onAnimationComplete,
}: TorphProps) => {
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

  const shiftDistance = "0.125em";

  const renderChars = (key: string, text: string, originX: number) => (
    <motion.span
      style={styles.span}
      key={`${id}-${text}`}
      layout="position"
      layoutId={`${id}-${text}`}
      exit={{
        opacity: 0,
        scale: 0.95,
      }}
      transition={transition}
      onAnimationComplete={onAnimationComplete}
    >
      <AnimatePresence initial={originX !== 0.5} mode="popLayout">
        <motion.span
          style={styles.span}
          key={`${id}-${key}-${text}`}
          initial={{
            x:
              originX === 0 ? shiftDistance : originX === 1 ? shiftDistance : 0,
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            ...transition,
            delay: (transition.duration ?? defaultConfig.duration) * 0.2,
          }}
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );

  const animationProps = {
    width,
    //fontSize: fontSize ? `${fontSize}px` : undefined,
    //fontWeight: fontWeight ? fontWeight : undefined,
    //fontVariationSettings: fontWeight ? `"wght" ${fontWeight}` : undefined,
  };

  return (
    <motion.span
      style={{ ...styles.container, ...(debug ? styles.debug : {}) }}
      initial={animationProps}
      animate={animationProps}
      transition={transition}
    >
      <span ref={containerRef} style={styles.span}>
        <AnimatePresence initial={false} mode="popLayout">
          <motion.span
            key={`${id}-torph`}
            layoutId={`${id}-torph`}
            layout="position"
            transition={transition}
            style={styles.span}
          >
            <AnimatePresence initial={false} mode="popLayout">
              {prefix && renderChars(`${id}-prefix`, prefix, 0)}
              {lcs && (
                <motion.span
                  layout="position"
                  layoutId={`${id}-lcs`}
                  transition={transition}
                  style={{ ...styles.span }}
                >
                  {renderChars(`${id}-lcs-chars`, lcs, 0.5)}
                </motion.span>
              )}
              {suffix && renderChars(`${id}-suffix`, suffix, 1)}
            </AnimatePresence>
          </motion.span>
        </AnimatePresence>
      </span>
    </motion.span>
  );
};

export default Torph;
