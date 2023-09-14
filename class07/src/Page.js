import React, { useState, useEffect } from "react";

function Page({ date, itemPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [color, setColor] = useState("");

  useEffect(() => {
    if (date.length > 0) {
      setTotalPage(Math.ceil(date.length / itemPerPage));
    }
  }, [date, itemPerPage]);

  useEffect(() => {
    // Generate a random color when the page changes
    setColor(randomColor());
  }, [currentPage]);

  function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Calculate the start and end index for the current page
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;

  // Extract the items to display on the current page
  const itemsToDisplay = date.slice(startIndex, endIndex);

  return (
    <>
      <div
        style={{
          backgroundColor: color,
          width: "200px",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {itemsToDisplay.map((item, index) => (
          <div key={index}>{item.text}</div>
        ))}
      </div>

      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          이전
        </button>
        <span>{`페이지 : ${currentPage}/${totalPage}`}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPage}>
          다음
        </button>
      </div>
    </>
  );
}

export default Page;
