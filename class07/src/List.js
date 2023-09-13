import React, { useState } from "react";

const List = () => {
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState("");

  const addItem = () => {
    if (newItemName.trim() === "") return;

    const newItem = {
      id: Math.random(),
      name: newItemName,
      completed: false,
    };

    setItems([...items, newItem]);
    setNewItemName("");
  };

  const toggleItemCompletion = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setItems(updatedItems);
  };

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>장바구니 목록</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {item.name}
            </span>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleItemCompletion(item.id)}
            />
            <button onClick={() => removeItem(item.id)}>삭제</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="새 아이템 입력"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button onClick={addItem}>추가</button>
      </div>
    </div>
  );
};

export default List;
