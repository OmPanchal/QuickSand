import { SEQUENCE } from "../sequence";

export const getSequence = () => {
  const sequence = window.localStorage.getItem("sequence");
  if (sequence === null) window.localStorage.setItem("sequence", SEQUENCE);
  return sequence === null ? "" : sequence.split(",");
};
