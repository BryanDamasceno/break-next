import React, { useState, useEffect } from "react";
import styles from "../styles/Countdown.module.css";

function Countdown() {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  function startCount() {
    setActive(true);
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

  return (
    <div>
      <div className={styles.containerCount}>
        <div>
          <span>{minuLeft}</span>

          <span>{minuteRight}</span>
        </div>
        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      <button onClick={startCount} type="button" className={styles.startButton}>
        Iniciar um ciclo
      </button>
    </div>
  );
}

export default Countdown;