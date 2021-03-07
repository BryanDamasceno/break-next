import { useState, useEffect, useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengeContext";
import styles from "../styles/Countdown.module.css";

let countTimeout: NodeJS.Timeout;

function Countdown() {
  const { startNewChallenge } = useContext(ChallengeContext);

  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);
  const [hasFinished, SetHasFinished] = useState(false);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  function startCount() {
    setActive(true);
  }

  function resetCount() {
    clearTimeout(countTimeout);
    setActive(false);
    setTime(0.05 * 60);
  }

  useEffect(() => {
    if (active && time > 0) {
      countTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (active && !time) {
      SetHasFinished(true);
      setActive(false);
      startNewChallenge();
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
