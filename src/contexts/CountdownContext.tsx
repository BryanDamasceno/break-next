import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Countdown from "../components/Countdown";
import { ChallengeContext } from "./ChallengeContext";

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  active: boolean;
  startCount: () => void;
  resetCount: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}
let countTimeout: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengeContext);

  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);
  const [hasFinished, SetHasFinished] = useState(false);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCount() {
    setActive(true);
  }

  function resetCount() {
    clearTimeout(countTimeout);
    setActive(false);
    SetHasFinished(false);
    setTime(25 * 60);
  }

  useEffect(() => {
    if (active && time > 0) {
      countTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (active && time === 0) {
      SetHasFinished(true);
      setActive(false);

      startNewChallenge();
    }
  }, [active, time]);

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        active,
        startCount,
        resetCount,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
