import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const UploadCV: FC = () => {
  return (
    <div className={styles.wrapper}>
      <img height={400} width={600} src="https://i.imgur.com/AJK2xVd.png" />
      <div className={styles.content}>
        <p className={styles.title}>
          Получите подбор самых ценных вакансий, просто отправьте свое резюме
        </p>
        <p className={styles.description}>
          В теме письма напишите свое имя, описание должности, на которую хотите
          подать заявку
        </p>
        <Link to="/cabinet" className={styles.link}>
          Загрузить резюме
        </Link>
      </div>
    </div>
  );
};

export default UploadCV;
