import { FC } from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import Users from "./components/Users";

const AdminPanel: FC = () => {

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dashboard/users">Users</Link>
        <Link to="/dashboard/vacancies">Vacancies</Link>
      </div>
      <div className={styles.content}>
          <Users />
      </div>
    </div>
  );
};

export default AdminPanel;
