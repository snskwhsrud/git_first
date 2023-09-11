import React, { useState } from "react";

export function Sycle() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p> {count} 번 클릭했습니다 </p>
      <button onClick={() => setState(count + 1)}>Click!</button>
    </div>
  );
}
