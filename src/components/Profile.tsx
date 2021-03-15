import React, { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengeContext";
import styles from "../styles/Profile.module.css";

function Perfil() {
  const { level } = useContext(ChallengeContext);
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://github.com/BryanDamasceno.png"
        alt="Imagem de Perfil"
      ></img>

      <div>
        <strong>Bryan Damasceno</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}

export default Perfil;
