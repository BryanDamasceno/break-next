import { useState, useEffect, useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengeContext";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/Countdown.module.css";

function Countdown() {
  const {
    minutes,
    seconds,
    active,
    hasFinished,
    resetCount,
    startCount,
  } = useContext(CountdownContext);

  const [minuLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

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

      {hasFinished ? (
        <button disabled className={styles.startButton}>
          Ciclo terminado
        </button>
      ) : !active ? (
        <button
          onClick={startCount}
          type="button"
          className={styles.startButton}
        >
          Iniciar
        </button>
      ) : (
        <button
          type="button"
          className={`${styles.startButton} ${styles.endButton}`}
          onClick={resetCount}
        >
          Parar ciclo
        </button>
      )}
    </div>
  );
}

export default Countdown;
