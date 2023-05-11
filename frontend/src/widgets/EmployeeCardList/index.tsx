import { FC, useEffect, useState } from "react";
import EmployeeCard, { EmployeeCardProps } from "../../entities/EmployeeCard";
import axios from "axios";
import styles from "./index.module.scss";
import Button from "../../shared/ui/Button";

const EmployeeCardList: FC = () => {
  const [employee, setEmployee] = useState([]);
  const [visibleEmployee, setVisibleEmployee] = useState(8);
   const [errorMessage, setErrorMessage] = useState("");

  const allCardShow = visibleEmployee >= employee.length;

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/vacancies")
      .then((res) => {
        setEmployee(res.data);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  }, []);
  return (
    <div className={styles.wrapper}>
      <h2>Кандидаты для работы</h2>
      {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
      <div className={styles.cardList}>
        {employee.slice(0, visibleEmployee).map((item: EmployeeCardProps) => (
          <EmployeeCard key={item.id} {...item} />
        ))}
      </div>
      <div className={styles.button}>
        {!allCardShow && (
          <Button
            onClick={() => setVisibleEmployee(visibleEmployee + 8)}
            text="Показать еще"
          />
        )}
      </div>
    </div>
  );
};

export default EmployeeCardList;
