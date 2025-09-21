import { CopyButton } from "../copy-button";

import styles from "./styles.module.scss";

export const CodeBlock = ({
  children,
  raw,
}: {
  children: React.ReactNode;
  raw: string;
}) => {
  return (
    <div className={styles.container}>
      {raw && (
        <div className={styles.copyButton}>
          <CopyButton text={raw} />
        </div>
      )}
      <code>
        <pre>{children}</pre>
      </code>
    </div>
  );
};
