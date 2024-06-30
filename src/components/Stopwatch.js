import React, { useRef, useState } from "react";

export const Stopwatch = () => {
  const [count, setCount] = useState(0);

  const timer = useRef(null);

  const handleStart = () => {
    if (timer.current == null) {
      timer.current = setInterval(() => {
        setCount((count) => count + 1);
      }, 100);
    }
  };

  const handleStop = () => {
    clearInterval(timer.current);
    timer.current = null;
  };

  const handleReset = () => {
    setCount(0);
    clearInterval(timer.current);
    timer.current = null;
  };

  const formatTime = (time) => {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = Math.floor(time % 60);
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      <h1>{formatTime(count)}</h1>
      <div className="buttons">
        <button className="button" onClick={handleStart}>
          start
        </button>
        <button className="button" onClick={handleStop}>
          stop
        </button>
        <button className="button" onClick={handleReset}>
          reset
        </button>
      </div>
    </div>
  );
};
