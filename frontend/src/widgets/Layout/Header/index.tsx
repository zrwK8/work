import { FC } from "react";
import Logo from "../../Logo";
import Navbar from "../../Navbar";
import AuthButtons from "../../AuthButtons";
import styles from "./index.module.scss";
import LoggedInButtons from "../../LoggedInButtons";

const Header: FC = () => {
  return (
    <div>
      <div className={styles.header}>
        <Logo />
        <Navbar />
        {localStorage.getItem("access_token") ? (
          <LoggedInButtons />
        ) : (
          <AuthButtons />
        )}
      </div>
    </div>
  );
};

export default Header;
