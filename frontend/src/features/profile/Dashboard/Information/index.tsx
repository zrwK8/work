import { FC } from "react";
import Sidebar from "../../../../widgets/Sidebar";
import styles from "./index.module.scss";

const Information: FC = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <p>Information</p>
      </div>
    </div>
  );
};

export default Information;
