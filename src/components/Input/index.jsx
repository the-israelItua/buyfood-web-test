import React from "react";
import styles from "./input.module.scss";

const Input = ({ label, type, socials, onChange, autoFocus }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={label}>{label}</label>
      <div className={styles.inputField}>
        <input
          type={type ? type : "text"}
          onChange={(e) => onChange(e.target.value)}
          className={socials && styles.inputSocialInput}
          autoFocus={autoFocus}
        />
        {socials && <span className={styles.inputSocial}>@</span>}
      </div>
    </div>
  );
};

export default Input;
