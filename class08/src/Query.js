import React from "react";
import { useLocation } from "react-router-dom";

function Query() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const name = searchParams.get("name");
  const age = searchParams.get("age");

  return (
    <>
      <h3>이름 : {name}</h3>
      <h3>나이 : {age}</h3>
    </>
  );
}

export default Query;
