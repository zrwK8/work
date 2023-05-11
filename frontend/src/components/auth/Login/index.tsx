import { FC, useState } from "react";
import { Form, Input } from "antd";
import styles from "./index.module.scss";
import Button from "../../../shared/ui/Button";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ButtonLink from "../../../shared/ui/ButtonLink";

const LoginForm: FC = () => {
  const [body, setBody] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleChangeEmail = (event: any) => {
    const value = event.target.value;
    setBody({ ...body, email: value });
  };

  const handleChangePassword = (event: any) => {
    const value = event.target.value;
    setBody({ ...body, password: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const userData = {
      email: body.email,
      password: body.password,
    };
    axios
      .post("http://localhost:3000/api/auth/login", userData)
      .then((response) => {
        if (response.data.accessToken) {
          response.headers["Authorization"] = response.data.accessToken;
          localStorage.setItem("token", response.data.accessToken);
          navigate("/profile");
        }
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  };

  return (
    <div className={styles.wrapper}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        className={styles.loginForm}
      >
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Пожалуйста, введите почту!" }]}
        >
          <Input
            value={body.email}
            onChange={handleChangeEmail}
            placeholder="Почта"
            className={styles.input}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Пожалуйста, введите пароль!" }]}
        >
          <Input.Password
            value={body.password}
            onChange={handleChangePassword}
            placeholder="Пароль"
            className={styles.input}
          />
        </Form.Item>
        <div className={styles.buttons}>
          <Form.Item>
            <Button onClick={handleSubmit} text="Войти" />
          </Form.Item>
          <Link to="/register">
            <ButtonLink text="Регистрация" />
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
