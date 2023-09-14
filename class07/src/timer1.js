import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalID;

    if (isRunning) {
      setTime(performance.now() - elapsedTime * 1000);

      intervalID = setInterval(() => {
        const currentTime = performance.now();
        setElapsedTime(Math.floor((currentTime - time) / 1000));
      }, 1000);
    }

    return () => {
      clearInterval(intervalID);
    };
  }, [isRunning, time, elapsedTime]);

  const handlePlay = () => {
    if (!isRunning) {
      setIsRunning(true);
      setTime(performance.now() - elapsedTime * 1000);
    }
  };

  const handlePause = () => {
    if (isRunning) {
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setElapsedTime(0);
  };

  return (
    <>
      <h1>타이머</h1>
      <div>시간 : {elapsedTime}초</div>

      <button onClick={handlePlay}>
        <img src={process.env.PUBLIC_URL + "/s.jpg"} alt="Play" />
      </button>
      <button onClick={handlePause}>
        <img src={process.env.PUBLIC_URL + "/e.jpg"} alt="Pause" />
      </button>
      <button onClick={handleReset}>
        <img src={process.env.PUBLIC_URL + "/w.jpg"} alt="Reset" />
      </button>
    </>
  );
}

export default Timer;
