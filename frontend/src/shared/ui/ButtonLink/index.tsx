import { FC } from "react";
import styles from "./index.module.scss";

interface ButtonLinkProps {
  text: string;
}

const ButtonLink: FC<ButtonLinkProps> = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};

export default ButtonLink;
