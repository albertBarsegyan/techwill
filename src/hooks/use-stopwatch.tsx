import { useEffect } from "react";
import { useLocalStorage } from "./use-local-storage.tsx";

const formatSeconds = (seconds: number) => {
  if (seconds < 10) {
    return `0${seconds}`;
  }

  return String(seconds);
};

export const useStopwatch = (initialValue: number) => {
  const [seconds, setSeconds] = useLocalStorage(
    "stopwatchSeconds",
    initialValue
  );
  const [isActive, setIsActive] = useLocalStorage("secondsActive", false);

  const handleStart = () => setIsActive(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive) {
      interval = setTimeout(() => {
        if (seconds) {
          setSeconds(seconds - 1);
        } else {
          clearInterval(interval);
          setIsActive(false);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds, setIsActive, setSeconds]);

  return { seconds: formatSeconds(seconds), handleStart, isActive };
};
