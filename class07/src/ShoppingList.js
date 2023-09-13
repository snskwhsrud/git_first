import React, { useState } from "react";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [input, inputValue] = useState("");
  const [mode, setMode] = useState(false);

  const handleChange = (event) => {
    inputValue(event.target.value);
  };

  const handleAdd = () => {
    setItems([...items, input]);
    inputValue("");
  };

  return (
    <>
      <div>
        <label>
          <input type="text" value={input} onChange={handleChange} />
          <button onClick={handleAdd}>추가</button>
          {items.length > 0 &&
            items.map((item) => (
              <ul>
                <input type="checkbox" />
                {item}
              </ul>
            ))}
        </label>
      </div>
    </>
  );
};

export default ShoppingList;
