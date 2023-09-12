import React, { useState } from "react";

const ListItem = ({ id, text }) => {
  return <li key={id}>{text}</li>;
};

const ListSet = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <ListItem key={item.id} id={item.id} text={item.text} />
      ))}
    </ul>
  );
};

const List = () => {
  const [items, setItems] = useState([
    { id: 1, text: "hello" },
    { id: 2, text: "byebye" },
  ]);
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleAdd = () => {
    if (input.trim() !== "") {
      const newItem = { id: items.length + 1, text: input };
      setItems([...items, newItem]);
      setInput("");
    }
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleAdd}>추가</button>
      <ListSet data={items} />
    </div>
  );
};

export default List;
