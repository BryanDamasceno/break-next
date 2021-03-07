import React from "react";
import styles from "../styles/Profile.module.css";

function Perfil() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://github.com/BryanAzevedo.png"
        alt="Imagem de Perfil"
      ></img>

      <div>
        <strong>Bryan Damasceno</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}

export default Perfil;
