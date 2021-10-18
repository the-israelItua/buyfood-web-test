import React, { useState } from "react";
import Layout from "./layout";
import StepOne from "./components/Steps/StepOne";
import StepTwo from "./components/Steps/StepTwo";
import StepThree from "./components/Steps/StepThree";
import "./app.scss";

const App = () => {
  const [current, setCurrent] = useState(0);

  const updateStep = (step) => {
    setCurrent(step);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  let screen = [
    {
      step: 1,
      content: <StepOne updateStep={updateStep} current={current} />,
    },
    {
      step: 2,
      content: <StepTwo updateStep={updateStep} current={current} />,
    },
    {
      step: 3,
      content: <StepThree updateStep={updateStep} current={current} />,
    },
  ];

  return (
    <Layout active={screen[current].step}>{screen[current].content}</Layout>
  );
};

export default App;
