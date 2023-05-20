import { FC, useState } from "react";
import styles from "./index.module.scss";
import { Modal } from "antd";

export interface EmployeeCardProps {
  id: number;
  image: string;
  nameSurname: string;
  age: number;
  email: string;
  position: string;
  workType: string[];
  workExperience: number;
  country: string;
  city: string;
  salary: number;
  description: string;
  expectations: string;
  skills: string;
}

const EmployeeCard: FC<EmployeeCardProps> = (props) => {
  const {
    image,
    nameSurname,
    age,
    email,
    position,
    workType,
    workExperience,
    country,
    city,
    description,
    salary,
    skills,
  } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.cardInfo}>
        <div className={styles.shortInfo}>
          <img
            src={
              image
                ? image
                : "https://cdn-icons-png.flaticon.com/512/4054/4054617.png"
            }
          />
          <div className={styles.info}>
            <p>{nameSurname}</p>
            <span>Возраст: {age} </span>
            <span>Опыт работы: {workExperience}</span>
          </div>
        </div>
        <div className={styles.positionInfo}>
          <p>{position}</p>
        </div>
        <div className={styles.workType}>
          <span>{Object.values(workType).join(", ").toLowerCase()}</span>
        </div>
        <div className={styles.countryCity}>
          <span>{country}, </span>
          <span>{city}</span>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.skills}>
          <span>{Object.values(skills).join(", ").toLowerCase()}</span>
        </div>
        <div className={styles.salary}>
          <p>
            ${salary}
            <span>/месяц</span>
          </p>
          <button onClick={() => setIsModalOpen(true)}>Email address</button>
          <Modal
            title="Связь с кандидатом"
            open={isModalOpen}
            onOk={() => setIsModalOpen(false)}
            onCancel={() => setIsModalOpen(false)}
          >
            <p>Почта: {email}</p>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;