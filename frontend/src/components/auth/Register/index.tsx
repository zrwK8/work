import { Input, Form } from "antd";
import axios from "axios";
import { ChangeEvent, FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonLink from "../../../shared/ui/ButtonLink";
import styles from "./index.module.scss";
import Button from "../../../shared/ui/Button";

interface BodyData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const RegisterForm: FC = () => {
  const [body, setBody] = useState<BodyData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const userData: BodyData = {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      password: body.password,
    };
    axios
      .post("http://localhost:3000/api/auth/register", userData)
      .then((response) => {
        response.headers["Authorization"] = response.data.accessToken;
        localStorage.setItem("token", response.data.accessToken);
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  };

  // ! need error message fix
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
        {/* need fix */}
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        <Form.Item
          name="firstName"
          rules={[{ required: true, message: "Пожалуйста, введите имя!" }]}
        >
          <Input
            value={body.firstName}
            placeholder="Имя"
            onChange={(event) =>
              setBody({ ...body, firstName: event.target.value })
            }
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
            onChange={(event) =>
              setBody({ ...body, lastName: event.target.value })
            }
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
            onChange={(event) =>
              setBody({ ...body, email: event.target.value })
            }
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
            onChange={(event) =>
              setBody({ ...body, password: event.target.value })
            }
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
