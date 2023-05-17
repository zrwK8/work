import { FC, useState } from "react";
import { Space, Input, Button } from "antd";
import styles from "./index.module.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewsSubscribe: FC = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMesage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const userData = {
      email: email,
    };
    axios
      .post("http://localhost:3000/api/vacancies/subscribe", userData)
      .then((response) => {
        setSuccessMessage(response.data.message);
        toast.success(successMessage);
      })
      .catch((error) => {
        setErrorMesage(error.response.data.message);
        toast.error(errorMessage);
      });
  };

  return (
    <div className={styles.newsSubscribe}>
      <div className={styles.title}>
        Никогда не хотите пропустить <span>новости о вакансиях?</span>
      </div>
      <div className={styles.content}>
        <Space.Compact>
          <Input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={styles.input}
            placeholder="Введите вашу почту"
          />
          <Button
            onClick={handleSubmit}
            className={styles.button}
            size="large"
            shape="round"
            html-type="default"
          >
            Подписаться
          </Button>
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </Space.Compact>
      </div>
    </div>
  );
};

export default NewsSubscribe;
