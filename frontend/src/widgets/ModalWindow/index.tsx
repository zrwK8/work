import { Modal } from "antd";
import { FC, useState } from "react";
import styles from "./index.module.scss";

interface ModalWindowProps {
  text: string;
  item: any;
}

const ModalWindow: FC<ModalWindowProps> = ({ text, item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button className={styles.button} onClick={() => setIsModalOpen(true)}>
        {text}
      </button>
      <Modal
        title={text}
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <p>{item}</p>
      </Modal>
    </div>
  );
};

export default ModalWindow;
