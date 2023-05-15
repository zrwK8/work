import { ChangeEvent, FC, useState } from "react";
import styles from "./index.module.scss";
import {
  Checkbox,
  Radio,
  Input,
  Select,
  Form,
  Slider,
  InputNumber,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import Button from "../../../shared/ui/Button";
import Tags from "../../../shared/ui/Tags/Tags";
import axios from "axios";
import { CheckboxValueType } from "antd/es/checkbox/Group";

interface BodyData {
  nameSurname: string;
  age: number;
  salaryExpectation: number;
  workExperience: number;
  country: string;
  city: string;
  skills: string;
  workType: CheckboxValueType[];
  description: string;
}

const UserProfile: FC = () => {
  const [body, setBody] = useState<BodyData>({
    nameSurname: "",
    age: 0,
    salaryExpectation: 0,
    workExperience: 0,
    country: "",
    city: "",
    skills: "",
    workType: [],
    description: "",
  });

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userData: BodyData = {
      nameSurname: body.nameSurname,
      age: body.age,
      salaryExpectation: body.salaryExpectation,
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
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.userProfile}>
      <div className={styles.searchType}>
        <Radio.Group>
          <Radio value="active">Активный поиск</Radio>
          <Radio value="passive">Пассивный поиск</Radio>
        </Radio.Group>
      </div>
      <Form className={styles.form}>
        <Form.Item label="Имя и фамилия" className={styles.inputs}>
          <Input
            value={body.nameSurname}
            onChange={(event) =>
              setBody({ ...body, nameSurname: event.target.value })
            }
          />
        </Form.Item>
        <Form.Item label="Возраст" className={styles.inputs}>
          <InputNumber
            min={0}
            max={100}
            defaultValue={0}
            value={body.age}
            onChange={(value) => setBody({ ...body, age: value ?? 0 })}
          />
        </Form.Item>
        <Form.Item label="Зарплатные ожидания" className={styles.inputs}>
          <Input
            value={body.salaryExpectation}
            onChange={(event) =>
              setBody({ ...body, salaryExpectation: +event.target.value })
            }
          />
        </Form.Item>
        <Form.Item label="Опыт работы" className={styles.workExperienceSlider}>
          <Slider
            step={1}
            min={0}
            max={10}
            value={body.workExperience}
            onChange={(event) => setBody({ ...body, workExperience: event })}
          />
        </Form.Item>
        <Form.Item label="Страна" className={styles.country}>
          <Select>
            <Select.Option
              value={body.country}
              onChange={(event: any) =>
                setBody({ ...body, country: event.target.select })
              }
            >
              Demo
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Город" className={styles.inputs}>
          <Input
            value={body.city}
            onChange={(event) => setBody({ ...body, city: event.target.value })}
          />
        </Form.Item>
        <Form.Item label="Навыки" className={styles.skills}>
          <Tags />
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
      </div>
    </div>
  );
};

export default UserProfile;
