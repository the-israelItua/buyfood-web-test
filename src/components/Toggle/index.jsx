import React, { useState } from "react";
import styles from "./toggle.module.scss";
import { LockIcon, ChevronUp, GreenTick, GoldLock } from "../../assets/svgs";
import Button from "../Button";

const Toggle = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.toggle}>
      <div className={styles.toggleHeader}>
        <div className={styles.toggleHeaderLeft}>
          <LockIcon />
          <p>Why we need your BVN</p>
        </div>
        <div
          className={styles.toggleHeaderRight}
          onClick={() => setShow(!show)}
        >
          <p>{show ? "Hide" : "Show"}</p>
          <ChevronUp />
        </div>
      </div>
      {show && (
        <div className={styles.toggleExpanded}>
          <p className={styles.toggleExpandedHeader}>
            We only need access to your:
          </p>
          <div className={styles.toggleExpandedList}>
            <div className={styles.toggleExpandedListItem}>
              <GreenTick />
              <p>Full Name</p>
            </div>
            <div className={styles.toggleExpandedListItem}>
              <GreenTick />
              <p>Phone Number</p>
            </div>
            <div className={styles.toggleExpandedListItem}>
              <GreenTick />
              <p>Date of Birth</p>
            </div>
          </div>
          <div className={styles.toggleExpandedFooter}>
            <GoldLock />
            <p>
              Your BVN does not give us access to your bank accounts or
              transactions
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Toggle;
