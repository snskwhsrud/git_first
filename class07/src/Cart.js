import React, { useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);
  const [input, inputValue] = useState("");

  const addCart = () => {
    setCart([...cart, { text: input, completed: false }]);
    inputValue("");
  };

  const deleteCart = (index) => {
    const updateItem = cart.filter((cart) => !cart.completed);
    setCart(updateItem);
  };

  const checkCart = (index) => {
    const checkList = [...cart];
    checkList[index].completed = !checkList[index].completed;
    setCart(checkList);
  };

  return (
    <>
      <h1>장바구니</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => inputValue(e.target.value)}
      />
      <button onClick={addCart}>추가</button>
      <button onClick={deleteCart}>삭제</button>

      <ul style={{ listStyle: "none" }}>
        {cart.map((item, index) => (
          <li key={index}>
            <label
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => checkCart(index)}
              />
              {item.text}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Cart;
