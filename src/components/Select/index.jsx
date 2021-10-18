import React from "react";
import { BlockChevronDown } from "../../assets/svgs";
import styles from "./select.module.scss";

const Select = ({ label }) => {
  return (
    <div className={styles.select}>
      <label>{label}</label>
      <div className={styles.selectInput}>
        <BlockChevronDown />
      </div>
    </div>
  );
};

export default Select;
