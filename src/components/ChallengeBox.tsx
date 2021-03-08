import { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengeContext";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/ChallengeBox.module.css";

function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengeContext
  );

  const { resetCount } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCount();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCount();
  }

  return (
    <div className={styles.container}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount}xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description} </p>
          </main>
          <footer>
            <button
              onClick={handleChallengeFailed}
              className={styles.failedButton}
            >
              Falhei
            </button>

            <button
              onClick={handleChallengeSucceeded}
              type="button"
              className={styles.sucessButton}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Inicie um ciclo para receber desafios</strong>

          <img src="icons/level-up.svg" alt="Level up" />
          <p> Avance de level completando desafios.</p>
        </div>
      )}
    </div>
  );
}

export default ChallengeBox;
