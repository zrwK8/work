import { FC } from "react";
import styles from "./index.module.scss";

export interface EmployeeCardProps {
  id: number;
  image: string;
  nameSurname: string;
  age: number;
  position: string;
  occupying: string;
  description: string;
  salary: number;
}

const EmployeeCard: FC<EmployeeCardProps> = (props) => {
  const { image, nameSurname, age, position, occupying, description, salary } =
    props;

  return (
    <div className={styles.card}>
      <div className={styles.cardInfo}>
        <div className={styles.shortInfo}>
          <img src={image} />
          <div className={styles.info}>
            <p>{nameSurname}</p>
            <span>Возраст: {age}</span>
          </div>
        </div>
        <div className={styles.positionInfo}>
          <p>{position}</p>
          <span>{occupying}</span>
        </div>
        <p className={styles.description}>{description}</p>
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
