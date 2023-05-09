import { FC } from "react";

import styles from "./index.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <hr />
      <p>Все права защищены.</p>
    </footer>
  );
};

export default Footer;
