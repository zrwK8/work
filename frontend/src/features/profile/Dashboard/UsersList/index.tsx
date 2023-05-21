import axios from "axios";
import { FC, useEffect, useState } from "react";
import Sidebar from "../../../../widgets/Sidebar";
import styles from "./index.module.scss";
import Button from "../../../../shared/ui/Button";

interface UsersListProps {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

const UsersList: FC = () => {
  const [users, setUsers] = useState<UsersListProps[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  }, []);

  return (
    <div className={styles.container}>
      {errorMessage && <p>{errorMessage}</p>}
      <Sidebar />
      <div className={styles.content}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Имя</th>
              <th>Фамилия</th>
              <th>Почта</th>
              <th>Роль</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item: UsersListProps) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.buttons}>
          <Button onClick={() => console.log("clicked")} text="Обновить" />
          <Button onClick={() => console.log("clicked")} text="Удалить" />
        </div>
      </div>
    </div>
  );
};

export default UsersList;
