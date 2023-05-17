import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const Navbar: FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link onClick={() => window.scrollBy(0, 700)} to="#">
            Найти работу
          </Link>
        </li>
        <li>
          <Link onClick={() => window.scrollBy(0, 1500)} to="#">
            Найти кандидатов
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
