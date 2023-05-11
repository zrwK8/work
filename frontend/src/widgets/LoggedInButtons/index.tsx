import { FC } from "react";
import styles from "./index.module.scss";
import Button from "../../shared/ui/Button";
import ButtonLink from "../../shared/ui/ButtonLink";
import { Link, useNavigate } from "react-router-dom";

const LoggedInButtons: FC = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className={styles.buttons}>
      <Link to="/profile" className={styles.link}>
        <ButtonLink text="Личный кабинет" />
      </Link>
      <Button onClick={handleSubmit} text="Выход" />
    </div>
  );
};

export default LoggedInButtons;
