import styles from "./styles.module.css";

import React from "react";
import TextFlow from "text-flow";

const texts = [
  "Animate Text Smoothly",
  "Animate Text Elegantly",
  "Animate Text Effortlessly",
  "Animate Text Seamlessly",
  "Animate Text Fluidly",
  "Animate Text Continuously",
];

export const ExampleIntro = () => {
  const [textIndex, setTextIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((textIndex) => textIndex + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.intro}>
      <TextFlow duration={1} ease={[0.19, 1, 0.22, 1]}>
        {texts[textIndex % texts.length]}
      </TextFlow>
      <br />
      <TextFlow>{texts[textIndex % texts.length]}</TextFlow>
    </div>
  );
};
