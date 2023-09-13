import React, { useState, useEffect } from "react";

function Timer() {
  const initialSeconds = 0; // 시작 시간 (초)
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false); // 타이머 동작 여부를 나타내는 상태

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        // 1초마다 시간을 증가
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    // 컴포넌트가 언마운트될 때 타이머를 정리
    return () => clearInterval(timer);
  }, [isRunning]);

  const startStopTimer = () => {
    setIsRunning((prevState) => !prevState); // 타이머 시작/정지를 토글
  };

  const resetTimer = () => {
    setIsRunning(false); // 타이머 정지
    setSeconds(initialSeconds); // 시간을 초기값으로 설정
  };

  return (
    <div>
      <h1>타이머</h1>
      <p>경과 시간: {seconds}초</p>
      <div>
        <button onClick={startStopTimer}>{isRunning ? "정지" : "시작"}</button>
        <button onClick={resetTimer}>리셋</button>
      </div>
    </div>
  );
}

export default Timer;
