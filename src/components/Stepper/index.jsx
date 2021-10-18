import React from "react";
import cx from "classname";
import { BlueTick } from "../../assets/svgs";
import styles from "./stepper.module.scss";

const Stepper = ({ items, active }) => {
  return (
    <div className={styles.stepper}>
      <div className={styles.stepperSteps}>
        {items.map((item, index) => (
          <>
            <div className={styles.stepperStepsItem}>
              <div
                className={
                  active === index + 1
                    ? styles.stepperStepsItemBullet
                    : active > index + 1
                    ? styles.stepperStepsItemPassed
                    : styles.stepperStepsItemLock
                }
              >
                {active > index + 1 ? (
                  <BlueTick className="fade-in" />
                ) : (
                  <h5>{index + 1}</h5>
                )}
              </div>
              <h5 className={styles.stepperStepsItemText}>{item}</h5>
            </div>

            {active === index + 1 && (
              <div className={cx(styles.stepperStepsMobile, "fade-in")}>
                <div className={styles.stepperStepsItemBullet}>
                  <h5>{index + 1}</h5>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
      <p className={cx(styles.stepperLabel, "fade-in")}>
        Step {active}/{items.length}
      </p>
    </div>
  );
};

export default Stepper;
