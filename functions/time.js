const time = (seconds) => {
  const sec = seconds.seconds % 60;
  const min = Math.floor(seconds.seconds / 60);
  return `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
};

export default time;
