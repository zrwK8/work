import { FC } from "react";
import { Space, Input, Button } from "antd";
import styles from "./index.module.scss";

const NewsSubscribe: FC = () => {
  return (
    <div className={styles.newsSubscribe}>
      <div className={styles.title}>Никогда не хотите пропустить <span>новости о вакансиях?</span></div>
      <div className={styles.content}>
        <Space.Compact>
          <Input className={styles.input} placeholder="Введите вашу почту" />
          <Button className={styles.button} size="large" shape="round" html-type="default">Подписаться</Button>
        </Space.Compact>
      </div>
    </div>
  );
};

export default NewsSubscribe;
