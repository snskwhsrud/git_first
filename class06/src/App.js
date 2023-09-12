import React, { useState } from "react";
import Login from "./Login";
import List from "./List";

function App() {
  return (
    <div>
      <h1> 로그인 관련처리</h1>
      <Login />
      <h1>리스트 여러개 만들기 </h1>
      <List />
    </div>
  );
}

export default App;
