import React, { useState } from "react";
import TabButton from "../TabButton";
import Button from "../Button";
import Select from "../Select";
import styles from "./steps.module.scss";

const StepThree = () => {
  const [active, setActive] = useState("no");
  return (
    <div className="fade-in">
      <div className={styles.stepsHeader}>
        <h2>Business Category</h2>
      </div>
      <div className={styles.stepsBody}>
        <div className={styles.stepsBodyInputs}>
          <div className={styles.stepsBodyInputsItem}>
            <Select label="Type of your business" />
          </div>
          <div className={styles.stepsBodyInputsItem}>
            <Select label="Business Category" />
          </div>
        </div>

        <div className={styles.stepsBodyPos}>
          <label>Do you use POS machines for your business?</label>
          <div className={styles.stepsBodyRowBtns}>
            <TabButton
              tabText="Yes"
              onClick={() => setActive("yes")}
              selected={active === "yes"}
            />
            <TabButton
              tabText="No"
              onClick={() => setActive("no")}
              selected={active === "no"}
            />
          </div>
        </div>
        <div className={styles.stepsFooter}>
          <div className={styles.stepsFooterBtn}>
            <Button btnText="Complete" bgColor="#006AFF" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
