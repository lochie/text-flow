import styles from "./styles.module.scss";

export const Button = ({
  children,
  wide,
  ...props
}: {
  children: React.ReactNode;
  wide?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={styles.button}
      {...props}
      style={{ width: wide ? "100%" : "auto", ...props.style }}
    >
      {children}
    </button>
  );
};
