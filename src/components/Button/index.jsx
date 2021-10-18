import React from "react";
import styles from "./button.module.scss";

const Button = ({ btnText, bgColor, onClick }) => {
  return (
    <button
      className={styles.button}
      style={{ background: bgColor }}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
