import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const Logo: FC = () => {
  return (
    <Link to={"/"}>
      <div className={styles.logo}></div>
    </Link>
  );
};

export default Logo;
