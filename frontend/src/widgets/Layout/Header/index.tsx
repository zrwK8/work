import { FC } from "react";
import Logo from "../../Logo";
import Navbar from "../../Navbar";
import AuthButtons from "../../AuthButtons";
import styles from "./index.module.scss";

const Header: FC = () => {
  return (
    <div>
      <div className={styles.header}>
        <Logo />
        <Navbar />
        <AuthButtons />
      </div>
    </div>
  );
};

export default Header;
