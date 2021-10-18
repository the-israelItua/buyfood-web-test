import React from "react";
import styles from "./tabButton.module.scss";

const TabButton = ({ tabText, selected, onClick }) => {
  return (
    <button
      className={!selected ? styles.tabButton : styles.tabSelected}
      onClick={onClick}
    >
      {tabText}
    </button>
  );
};

export default TabButton;
