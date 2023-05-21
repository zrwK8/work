import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const Sidebar: FC = () => {
  return (
    <div className={styles.sidebar}>
      <p>Админ панель</p>
      <Link to="/dashboard">Информация</Link>
      <Link to="/dashboard/users">Пользователи</Link>
      <Link to="/dashboard/vacancies">Вакансии</Link>
    </div>
  );
};

export default Sidebar;
