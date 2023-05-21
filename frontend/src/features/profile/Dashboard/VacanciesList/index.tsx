import { FC, useEffect, useState } from "react";
import Sidebar from "../../../../widgets/Sidebar";
import styles from "./index.module.scss";
import axios from "axios";
import Button from "../../../../shared/ui/Button";
import ModalWindow from "../../../../widgets/ModalWindow";

interface VacanciesListProps {
  id: string;
  image: string;
  nameSurname: string;
  age: number;
  email: string;
  workType: string[];
  workExperience: number;
  country: string;
  city: string;
  position: string;
  description: string;
  skills: string[];
  salary: number;
}

const VacanciesList: FC = () => {
  const [vacancies, setVacancies] = useState<VacanciesListProps[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/vacancies")
      .then((response) => {
        setVacancies(response.data);
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
              <th>Изображение</th>
              <th>Имя и фамилия</th>
              <th>Возраст</th>
              <th>Почта</th>
              <th>Тип занятости</th>
              <th>Опыт работы</th>
              <th>Страна</th>
              <th>Город</th>
              <th>Должность</th>
              <th>Описание</th>
              <th>Навыки</th>
              <th>Зарплата</th>
            </tr>
          </thead>
          <tbody>
            {vacancies.map((item: VacanciesListProps) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <ModalWindow item={item.image} text={"Изображение"} />
                <td>{item.nameSurname}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>{item.workType.join(", ")}</td>
                <td>{item.workExperience}</td>
                <td>{item.country}</td>
                <td>{item.city}</td>
                <td>{item.position}</td>
                <ModalWindow item={item.description} text={"Опыт работы"} />
                <td>{item.skills.join(", ")}</td>
                <td>{item.salary}</td>
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

export default VacanciesList;
