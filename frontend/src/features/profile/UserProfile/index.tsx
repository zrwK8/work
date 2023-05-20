import { ChangeEvent, FC, useState } from "react";
import styles from "./index.module.scss";
import { Checkbox, Input, Form, Slider, InputNumber } from "antd";
import TextArea from "antd/es/input/TextArea";
import Button from "../../../shared/ui/Button";
import Tags from "../../../shared/ui/Tags/Tags";
import axios from "axios";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { ToastContainer, toast } from "react-toastify";
import CountrySelector from "../../../widgets/CountrySelector";

interface BodyData {
  image: string;
  nameSurname: string;
  position: string;
  age: number | null;
  email: string;
  salary: number | null;
  workExperience: number;
  country: string;
  city: string;
  skills: string[];
  workType: CheckboxValueType[];
  description: string;
}

const UserProfile: FC = () => {
  const [body, setBody] = useState<BodyData>({
    image: "",
    nameSurname: "",
    position: "",
    age: null,
    email: "",
    salary: null,
    workExperience: 0,
    country: "",
    city: "",
    skills: [],
    workType: [],
    description: "",
  });
  const [country, setCountry] = useState<string>("");

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userData: BodyData = {
      image: body.image,
      nameSurname: body.nameSurname,
      position: body.position,
      age: body.age,
      email:  body.email,
      salary: body.salary,
      workExperience: body.workExperience,
      country: body.country,
      city: body.city,
      skills: body.skills,
      workType: body.workType,
      description: body.description,
    };
    axios
      .post("http://localhost:3000/api/vacancies/create-vacancy", userData)
      .then((response) => {
        toast.success(response.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className={styles.userProfile}>
      <Form className={styles.form}>
        <Form.Item label="Изображение" className={styles.image}>
          <Input
            className={styles.input}
            value={body.image}
            onChange={(event) =>
              setBody({ ...body, image: event.target.value })
            }
          />
          <span className={styles.span}>
            Вставьте сюда свою ссылку на изображение. Это поле можно оставить
            пустым.
          </span>
        </Form.Item>
        <Form.Item className={styles.nameSurname} label="Имя и фамилия">
          <Input
            className={styles.input}
            value={body.nameSurname}
            onChange={(event) =>
              setBody({ ...body, nameSurname: event.target.value })
            }
          />
        </Form.Item>
        <Form.Item className={styles.email} label="Почта">
          <Input
            className={styles.input}
            value={body.email}
            onChange={(event) =>
              setBody({ ...body, email: event.target.value })
            }
          />
        </Form.Item>
        <Form.Item label="Должность" className={styles.position}>
          <Input
            className={styles.position}
            value={body.position}
            onChange={(event) =>
              setBody({ ...body, position: event.target.value })
            }
          />
        </Form.Item>
        <Form.Item label="Возраст" className={styles.age}>
          <InputNumber
            min={0}
            max={100}
            value={body.age}
            onChange={(values: any) => setBody({ ...body, age: values })}
          />
        </Form.Item>
        <Form.Item
          label="Зарплатные ожидания"
          className={styles.salaryExpectation}
        >
          <Input
            value={body.salary as number}
            onChange={(event) => {
              const regExp = /^[0-9\b]+$/;

              event.target.value === "" ||
                (regExp.test(event.target.value) &&
                  setBody({ ...body, salary: +event.target.value }));
            }}
          />
          <span className={styles.span}>Сумма в долларах.</span>
        </Form.Item>
        <Form.Item label="Опыт работы" className={styles.workExperienceSlider}>
          <Slider
            step={1}
            min={0}
            max={10}
            className={styles.slider}
            value={body.workExperience}
            onChange={(event) => setBody({ ...body, workExperience: event })}
          />
        </Form.Item>
        <Form.Item label="Страна" className={styles.country}>
          <CountrySelector
            value={country}
            onChange={(event: any) => {
              setCountry(event);
              setBody({ ...body, country: event });
            }}
          />
        </Form.Item>
        <Form.Item label="Город" className={styles.city}>
          <Input
            value={body.city}
            onChange={(event) => setBody({ ...body, city: event.target.value })}
          />
          <span className={styles.span}>
            Укажите город, в котором хотите искать работу.
          </span>
        </Form.Item>
        <Form.Item label="Навыки" className={styles.skills}>
          <Tags onChange={(event) => setBody({ ...body, skills: event })} />
        </Form.Item>
        <Form.Item label="Вид трудоустройства" className={styles.workType}>
          <Checkbox.Group
            onChange={(values) => setBody({ ...body, workType: values })}
          >
            <Checkbox value="Полная занятость">Полная занятость</Checkbox>
            <Checkbox value="Частичная занятость">Частичная занятость</Checkbox>
            <Checkbox value="Удалённо">Удалённо</Checkbox>
            <Checkbox value="Офис">Офис</Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item label="Опыт работы" className={styles.areas}>
          <TextArea
            value={body.description}
            onChange={(event) =>
              setBody({ ...body, description: event.target.value })
            }
            rows={4}
          />
        </Form.Item>
      </Form>
      <div className={styles.button}>
        <Button onClick={handleSubmit} text="Опубликовать" />
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
      </div>
    </div>
  );
};

export default UserProfile;
