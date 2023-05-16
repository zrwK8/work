import { FC } from "react";
import styles from "./index.module.scss";

export interface EmployeeCardProps {
  id: number;
  image: string;
  nameSurname: string;
  age: number;
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
    position,
    workType,
    workExperience,
    country,
    city,
    description,
    salary,
    skills,
  } = props;

  return (
    <div className={styles.card}>
      <div className={styles.cardInfo}>
        <div className={styles.shortInfo}>
          <img src={image} />
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
          <span>
            {Object.values(workType).splice(1).join(", ").toLowerCase()}
          </span>
        </div>
        <div className={styles.countryCity}>
          <span>{country}, </span>
          <span>{city}</span>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.skills}>
          <span>
            {Object.values(skills).splice(1).join(", ").toLowerCase()}
          </span>
        </div>
        <div className={styles.salary}>
          <p>
            ${salary}
            <span>/month</span>
          </p>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
