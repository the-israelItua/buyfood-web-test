import React from "react";
import styles from "./layout.module.scss";
import BgImage from "../assets/images/bgImage.png";
import Button from "../components/Button";
import Stepper from "../components/Stepper";

const Layout = ({ children, active }) => {
  return (
    <section className={styles.layout}>
      <div className={styles.layoutImage}>
        <img src={BgImage} alt="background" />
      </div>
      <div className={styles.layoutContent}>
        <div className={styles.layoutContentLogout}>
          <Button btnText="Logout" bgColor="#ff6774" />
        </div>
        <Stepper
          items={["Verify Account", "Social Handles", "Business Category"]}
          active={active}
        />

        {children}
      </div>
    </section>
  );
};

export default Layout;
