import { FC } from "react";
import styles from "./index.module.scss";

interface ButtonProps {
  onClick: (event: any) => void;
  text: string;
}

const Button: FC<ButtonProps> = ({ onClick, text }) => {
  return <button onClick={onClick} className={styles.button}>{text}</button>;
};

export default Button;
