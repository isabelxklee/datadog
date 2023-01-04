import React, { useState } from "react";

const GoodDogs = () => {
  const [goodDogs, setGoodDogs] = useState([]);

  const handleClick = (dog) => {
    return;
  };

  return (
    <>
      <p>Felix</p>
      <button>Add</button>

      <p>Odie</p>
      <button>Add</button>

      <p>Bingo</p>
      <button>Add</button>
    </>
  );
};

export default GoodDogs;
