import React, { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengeContext";
import styles from "../styles/CompleteChallenge.module.css";
function CompleteChallenge() {
  const { challengeCompleted } = useContext(ChallengeContext);

  return (
    <div className={styles.containerChallenge}>
      <span>Desafios Completos</span>
      <span>{challengeCompleted}</span>
    </div>
  );
}

export default CompleteChallenge;
