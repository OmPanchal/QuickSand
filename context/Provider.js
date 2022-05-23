import { createContext, useContext, useState, useEffect } from "react";
import { COLOURS } from "../colours";
import { getSequence } from "../functions/getSequence";
import getTasks from "../functions/getTasks";
import setTheme from "../functions/setTheme";
import { SEQUENCE } from "../sequence";

const CTXProvider = createContext();

export const useCtx = () => {
  return useContext(CTXProvider);
};

const Provider = ({ children }) => {
  const [isCreatorOpen, setIsCreatorOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [currentTheme, setCurrentTheme] = useState([]);
  const [isColourModalOpen, setIsColourModalOpen] = useState(false);
  const [isSequenceModalOpen, setIsSequenceModalOpen] = useState(false);
  const [sequence, setSequence] = useState(SEQUENCE);
  const [durations, setDurations] = useState({});
  const [count, setCount] = useState(0);
  const [isDurationModalOpen, setIsDurationModalOpen] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log(sequence[1]);
  }, []);

  useEffect(() => {
    const durations = window.localStorage.getItem("durations");
    if (durations === null) {
      window.localStorage.setItem(
        "durations",
        JSON.stringify({
          Pomodoro: 5,
          "Short Break": 3,
          "Long Break": 1,
        })
      );
      setDurations({
        Pomodoro: 5,
        "Short Break": 3,
        "Long Break": 1,
      });
      return;
    }
    setDurations(JSON.parse(durations));
  }, []);

  useEffect(() => {
    setSeconds(durations["Pomodoro"]);
  }, [durations]);

  useEffect(() => {
    const sequence = window.localStorage.getItem("sequence");
    if (sequence === null) {
      window.localStorage.setItem("sequence", SEQUENCE);
      setSequence(SEQUENCE);
    }
    console.log(sequence);
    setSequence([
      "Pomodoro",
      "Short Break",
      "Pomodoro",
      "Short Break",
      "Pomodoro",
      "Long Break",
    ]);
  }, []);

  useEffect(() => {
    const theme = window.localStorage.getItem("theme");
    setCurrentTheme(theme);
    // ~ Ocean Theme
    if (theme === "Ocean") setTheme(COLOURS.Ocean);
    // ~ Strawberry Jam Theme
    else if (theme === "Strawberry Jam") setTheme(COLOURS["Strawberry Jam"]);
    // ~ Dull Honey Theme
    else if (theme === "Dull Honey") setTheme(COLOURS["Dull Honey"]);
    // ~ Green Jelly Theme
    else if (theme === "Green Jelly") setTheme(COLOURS["Green Jelly"]);
    // ~ Account for invalid or null values
    else {
      window.localStorage.setItem("theme", "Ocean");
      setCurrentTheme(theme);
      setTheme(COLOURS.Ocean);
    }
  }, []);

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const value = {
    seconds: { seconds, setSeconds },
    isCreatorOpen: { isCreatorOpen, setIsCreatorOpen },
    tasks: { tasks, setTasks },
    theme: { currentTheme, setCurrentTheme },
    isColourModalOpen: { isColourModalOpen, setIsColourModalOpen },
    sequence: { sequence, setSequence },
    count: { count, setCount },
    isSequenceModalOpen: { isSequenceModalOpen, setIsSequenceModalOpen },
    durations: { durations, setDurations },
    isDurationModalOpen: { isDurationModalOpen, setIsDurationModalOpen },
  };

  return <CTXProvider.Provider value={value}>{children}</CTXProvider.Provider>;
};

export default Provider;
