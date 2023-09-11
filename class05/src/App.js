import React, { useState } from "react";

const Example = () => {
  const [lottoNumbers, setLottoNumbers] = useState([]);

  const generateLottoNumbers = () => {
    const numbers = [];
    while (numbers.length < 6) {
      const randomNum = Math.floor(Math.random() * 45) + 1;
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }
    setLottoNumbers(numbers);
  };

  return (
    <div>
      <button onClick={generateLottoNumbers}>로또 번호 출력</button>
      <ul>
        {lottoNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default Example;
