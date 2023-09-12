import React, { useState } from "react";
import Login from "./Login";
import List from "./List";
import Lotta from "./Lotta";
import Context from "./Context";

function App() {
  return (
    <div>
      <h1> 로그인 관련처리</h1>
      <Login />
      <h1>리스트 여러개 만들기 </h1>
      <List />
      <h1>로또 만들기</h1>
      <Lotta />
      <h1>콘텍스트</h1>
      <Context />
    </div>
  );
}

export default App;
