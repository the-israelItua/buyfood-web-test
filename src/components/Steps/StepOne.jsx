import React, { useState } from "react";
import cx from "classname";
import TabButton from "../TabButton";
import Button from "../Button";
import Input from "../Input";
import Select from "../Select";
import Toggle from "../Toggle";
import styles from "./steps.module.scss";

const StepOne = ({ updateStep, current }) => {
  const [active, setActive] = useState("bvn");
  return (
    <div className="fade-in">
      <div className={styles.stepsHeader}>
        <h2>Verify Account</h2>
      </div>
      <div className={styles.stepsBody}>
        <div className={styles.stepsBodyRow}>
          <label>Select a verification method</label>
          <div className={styles.stepsBodyRowBtns}>
            <TabButton
              tabText="BVN"
              onClick={() => setActive("bvn")}
              selected={active === "bvn"}
            />
            <TabButton
              tabText="Personal Account Number"
              onClick={() => setActive("personal")}
              selected={active === "personal"}
            />
          </div>
        </div>
        {active === "bvn" ? (
          <div className="fade-in">
            <Input label="Bank Verification Number (11-digits)" type="number" />
            <Toggle />
          </div>
        ) : (
          <form className={cx(styles.stepsBodyInputs, "fade-in")}>
            <div className={styles.stepsBodyInputsItem}>
              <Input label="Account Number" type="number" />
            </div>
            <div className={styles.stepsBodyInputsItem}>
              <Select label="Select Bank" />
            </div>
          </form>
        )}

        <div className={styles.stepsFooter}>
          <div className={styles.stepsFooterBtn}>
            <Button
              btnText="Continue"
              bgColor="#006AFF"
              onClick={() => updateStep(current + 1)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
