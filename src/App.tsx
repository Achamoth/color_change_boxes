/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styles from "./App.module.css";
import React, { useState } from "react";

interface BoxProps {
  text: string;
  color: string;
  className: string;
  onClick: () => void;
}

function Box({
  text,
  color,
  className,
  onClick,
}: BoxProps): React.ReactElement {
  return (
    <div
      css={css`
        background-color: ${color};
      `}
      className={className}
      onClick={onClick}
    >
      <div className={styles.box}>{text}</div>
    </div>
  );
}

export default function App() {
  let colorOptions = [
    "blue",
    "black",
    "darkkhaki",
    "green",
    "orange",
    "crimson",
    "purple",
    "red",
    "magenta",
  ];

  const shuffledColors = () => {
    return colorOptions
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  let [colors, setColors] = useState(shuffledColors());

  const shuffleColors = () => {
    setColors(shuffledColors());
  };

  return (
    <div className={styles.page}>
      <div className={styles.boxes1234}>
        <Box
          text="1"
          color={colors[0]}
          className={styles.box1}
          onClick={shuffleColors}
        />
        <div className={styles.boxes234}>
          <Box
            text="2"
            color={colors[1]}
            className={styles.box2}
            onClick={shuffleColors}
          />
          <div className={styles.boxes34}>
            <Box
              text="3"
              color={colors[2]}
              className={styles.box3}
              onClick={shuffleColors}
            />
            <Box
              text="4"
              color={colors[3]}
              className={styles.box4}
              onClick={shuffleColors}
            />
          </div>
        </div>
      </div>
      <div className={styles.boxes56789}>
        <div className={styles.boxes56}>
          <Box
            text="5"
            color={colors[4]}
            className={styles.box5}
            onClick={shuffleColors}
          />
          <Box
            text="6"
            color={colors[5]}
            className={styles.box6}
            onClick={shuffleColors}
          />
        </div>
        <Box
          text="7"
          color={colors[6]}
          className={styles.box7}
          onClick={shuffleColors}
        />
        <div className={styles.boxes89}>
          <Box
            text="8"
            color={colors[7]}
            className={styles.box8}
            onClick={shuffleColors}
          />
          <Box
            text="9"
            color={colors[8]}
            className={styles.box9}
            onClick={shuffleColors}
          />
        </div>
      </div>
    </div>
  );
}
