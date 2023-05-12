import { FC } from "react";
import styles from "./index.module.scss";
import { Checkbox, Radio, Input, Select, Form, Slider } from "antd";
import TextArea from "antd/es/input/TextArea";
import Button from "../../../shared/ui/Button";
import Tags from "../../../shared/ui/Tags/Tags";

const UserProfile: FC = () => {
  return (
    <div className={styles.userProfile}>
      <div className={styles.searchType}>
        <Radio.Group>
          <Radio value="active">Активный поиск</Radio>
          <Radio value="passive">Пассивный поиск</Radio>
        </Radio.Group>
      </div>
      <Form className={styles.form}>
        <Form.Item label="Имя" className={styles.inputs}>
          <Input />
        </Form.Item>
        <Form.Item label="Фамилия" className={styles.inputs}>
          <Input />
        </Form.Item>
        <Form.Item label="Зарплатные ожидания" className={styles.inputs}>
          <Input />
        </Form.Item>
        <Form.Item label="Опыт работы" className={styles.workExperienceSlider}>
          <Slider step={1} min={0} max={10} />
        </Form.Item>
        <Form.Item label="Страна" className={styles.country}>
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Город" className={styles.city}>
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Навыки" className={styles.skills}>
          <Tags />
        </Form.Item>
        <Form.Item label="Вид трудоустройства" className={styles.workType}>
          <Checkbox.Group>
            <Checkbox value="fulltime"> Полная занятость </Checkbox>
            <Checkbox value="partime"> Частичная занятость </Checkbox>
            <Checkbox value="remote"> Удалённо </Checkbox>
            <Checkbox value="office"> Офис </Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item label="Опыт работы" className={styles.areas}>
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Ожидания от места работы" className={styles.areas}>
          <TextArea rows={4} />
        </Form.Item>
      </Form>
      <div className={styles.button}>
        <Button onClick={() => {}} text="Опубликовать" />
      </div>
    </div>
  );
};

export default UserProfile;
