import { useState } from "react";

import styles from "./styles.module.scss";
import TextFlow from "text-flow";

export const CodeBlock = ({
  code,
  children,
}: {
  code: string;
  children?: React.ReactNode;
}) => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className={styles.container}>
      <button
        className={styles.copy}
        onClick={() => {
          if (code) {
            setIsCopied(true);
            navigator.clipboard.writeText(code.toString());
            setTimeout(() => {
              setIsCopied(false);
            }, 2000);
          }
        }}
      >
        <TextFlow>{isCopied ? `Copied` : `Copy`}</TextFlow>
      </button>
      <pre>{children ?? code}</pre>
    </div>
  );
};
