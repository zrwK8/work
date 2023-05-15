import { ChangeEvent, FC, useState } from "react";
import { Form, Input } from "antd";
import styles from "./index.module.scss";
import Button from "../../../shared/ui/Button";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ButtonLink from "../../../shared/ui/ButtonLink";

interface LoginData {
  email: string;
  password: string;
}

const LoginForm: FC = () => {
  const [body, setBody] = useState<LoginData>({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const userData: LoginData = {
      email: body.email,
      password: body.password,
    };
    axios
      .post("http://localhost:3000/api/auth/login", userData)
      .then((response) => {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.accessToken;
        localStorage.setItem("token", response.data.accessToken);
        navigate("/profile");
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
            onChange={(event) =>
              setBody({ ...body, email: event.target.value })
            }
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
            onChange={(event) =>
              setBody({ ...body, password: event.target.value })
            }
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
