import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.credits}>
        Crafted for the web by
        <a
          href="https://twitter.com/lochieaxon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://lochie.me/avatar.jpg"
            alt="Avatar of Lochie"
            width={20}
            height={20}
          />
          Lochie
        </a>
      </div>
    </footer>
  );
};
