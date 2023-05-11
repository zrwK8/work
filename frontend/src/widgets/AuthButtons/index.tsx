import { FC } from "react";
import ButtonLink from "../../shared/ui/ButtonLink";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const AuthButtons: FC = () => {
  return (
    <div className={styles.buttons}>
      <Link to="/login" className={styles.login}>Авторизация</Link>

      <Link to="/register">
        <ButtonLink text="Регистрация" />
      </Link>
    </div>
  );
};

export default AuthButtons;
