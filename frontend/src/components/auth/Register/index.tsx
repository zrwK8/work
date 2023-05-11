import { Input, Form } from "antd";
import axios from "axios";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import ButtonLink from "../../../shared/ui/ButtonLink";
import styles from "./index.module.scss";
import Button from "../../../shared/ui/Button";

const RegisterForm: FC = () => {
  const [body, setBody] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChangeFirstName = (event: any) => {
    const value = event.target.value;
    setBody({ ...body, firstName: value });
  };

  const handleChangeLastName = (event: any) => {
    const value = event.target.value;
    setBody({ ...body, lastName: value });
  };

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
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      password: body.password,
    };

    axios
      .post("http://localhost:3000/api/auth/register", userData)
      .then((response) => {
        response.data.message === "User created";
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
        className={styles.registerForm}
      >
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        <Form.Item
          name="firstName"
          rules={[{ required: true, message: "Пожалуйста, введите имя!" }]}
        >
          <Input
            value={body.firstName}
            placeholder="Имя"
            onChange={handleChangeFirstName}
            className={styles.input}
          />
        </Form.Item>
        <Form.Item
          name="lastName"
          rules={[{ required: true, message: "Пожалуйста, введите фамилию!" }]}
        >
          <Input
            value={body.lastName}
            placeholder="Фамилия"
            onChange={handleChangeLastName}
            className={styles.input}
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Пожалуйста, введите почту!" }]}
        >
          <Input
            value={body.email}
            placeholder="Почта"
            onChange={handleChangeEmail}
            className={styles.input}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Пожалуйста, введите пароль!" }]}
        >
          <Input.Password
            value={body.password}
            placeholder="Пароль"
            onChange={handleChangePassword}
            className={styles.input}
          />
        </Form.Item>
        <div className={styles.buttons}>
          <Link to="/login">
            <ButtonLink text="Войти" />
          </Link>
          <Form.Item>
            <Button onClick={handleSubmit} text="Регистрация" />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default RegisterForm;
