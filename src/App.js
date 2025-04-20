import React, { useState, useEffect } from "react";
import "./styles.css";

const App = () => {
  const colorArr = ["green", "red", "yellow"];
  const timeArr = [8000, 5000, 2000];

  const [count, setCount] = useState(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started || count === null) return;

    const timer = setTimeout(() => {
      setCount((prev) => (prev + 1) % colorArr.length);
    }, timeArr[count]);

    return () => clearTimeout(timer);
  }, [count, started]);

  const handleStart = () => {
    setStarted((prev) => !prev);
    setCount((prev) => (prev === null ? 0 : null));
  };

  return (
    <div className="container">
      <div className="traffic-light">
        <div
          className={`light red ${colorArr[count] === "red" ? "on" : ""}`}
        ></div>
        <div
          className={`light yellow ${colorArr[count] === "yellow" ? "on" : ""}`}
        ></div>
        <div
          className={`light green ${colorArr[count] === "green" ? "on" : ""}`}
        ></div>
      </div>
      <button onClick={handleStart} className="start-btn">
        {`${started ? "Stop" : "Start"}`} Traffic Light
      </button>
    </div>
  );
};

export default App;
