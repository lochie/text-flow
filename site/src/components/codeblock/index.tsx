import { CopyButton } from "../copy-button";

import styles from "./styles.module.scss";

export const CodeBlock = ({ code }: { code: string }) => {
  return (
    <div className={styles.container}>
      <div className={styles.copyButton}>
        <CopyButton text={code} />
      </div>

      <code>
        <pre>{code}</pre>
      </code>
    </div>
  );
};
