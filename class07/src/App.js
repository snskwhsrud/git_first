import React from "react";
import "./App.css";
import List from "./List";
import Timer from "./timer";
import ShoppingList from "./ShoppingList.js";
import Cart from "./Cart";

function App() {
  return (
    <div>
      <h1> 장바구니</h1>
      <List />
      <h1>[SHOPPITNGLIST]</h1>
      <ShoppingList />
      <Cart />

      <h1> 타이머</h1>
      <Timer />
    </div>
  );
}

export default App;
