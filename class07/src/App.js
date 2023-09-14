import React from "react";
import "./App.css";
import List from "./List";
import Timer from "./timer";
import ShoppingList from "./ShoppingList.js";
import Cart from "./Cart";
import Timer1 from "./timer1";
import Page from "./Page";

function App() {
  const date = [
    { id: 1, Text: "hu" },
    { id: 2, Text: "He" },
    { id: 3, Text: "ho" },
  ];
  const page = 1;

  return (
    <div>
      <h1> 장바구니</h1>
      <List />
      <h1>[SHOPPITNGLIST]</h1>
      <ShoppingList />
      <Cart />

      <h1> 타이머</h1>
      <Timer />

      <h1> 이미지타이머 </h1>
      <Timer1 />

      <Page date={date} itemPerPage={page} />
    </div>
  );
}

export default App;
