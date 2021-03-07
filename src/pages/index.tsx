import ChallengeBox from "../components/ChallengeBox";
import CompleteChallenge from "../components/CompleteChallenge";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.containerHome}>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompleteChallenge />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  );
}
