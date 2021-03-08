import { createContext, useState, ReactNode } from "react";
import challenges from "../../challenges.json";

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengeContextData {
  level: number;
  currentExperience: number;
  challengeCompleted: number;
  experienceToNextLevel: number;
  activeChallenge: Challenge;
  completeChallenge: () => void;
  startNewChallenge: () => void;
  levelUp: () => void;
  resetChallenge: () => void;
}

interface ChallengeProviderProps {
  children: ReactNode;
}

export const ChallengeContext = createContext({} as ChallengeContextData);

export function ChallengeProvider({ children }) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengeCompleted, setChallengeCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const random = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[random];

    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengeCompleted(challengeCompleted + 1);
  }

  return (
    <ChallengeContext.Provider
      value={{
        challengeCompleted,
        startNewChallenge,
        level,
        currentExperience,
        levelUp,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
}
