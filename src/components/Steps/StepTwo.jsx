import React from "react";
import Button from "../Button";
import Input from "../Input";
import styles from "./steps.module.scss";

const StepTwo = ({ updateStep, current }) => {
  return (
    <div className="fade-in">
      <div className={styles.stepsHeader}>
        <h2>Social Handles</h2>
        <p>Enter your business social media handles</p>
      </div>
      <form>
        <div className={styles.stepsBodyInputs}>
          <div className={styles.stepsBodyInputsItem}>
            <Input label="Choose your Abeg Tag (required)" socials />
          </div>
          <div
            className={styles.stepsBodyInputsItem}
            style={{ display: "none" }}
          >
            <Input label="Twitter" socials />
          </div>
        </div>
        <div className={styles.stepsBodyInputs}>
          <div className={styles.stepsBodyInputsItem}>
            <Input label="Instagram" socials />
          </div>
          <div className={styles.stepsBodyInputsItem}>
            <Input label="Twitter" socials />
          </div>
        </div>

        <div className={styles.stepsFooter}>
          <div className={styles.stepsFooterBtn}>
            <Button
              btnText="Confirm Social Handles"
              bgColor="#006AFF"
              onClick={() => updateStep(current + 1)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
