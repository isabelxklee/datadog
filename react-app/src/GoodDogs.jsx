import React, { useState } from "react";

const GoodDogs = () => {
  const [goodDogs, setGoodDogs] = useState([]);

  const handleClick = (dog) => {
    if (!goodDogs.includes(dog)) {
      return setGoodDogs(() => [...goodDogs, dog]);
    }
  };

  return (
    <>
      <p>Felix</p>
      <button onClick={() => handleClick("Felix")}>Add</button>

      <p>Odie</p>
      <button onClick={() => handleClick("Odie")}>Add</button>

      <p>Bingo</p>
      <button onClick={() => handleClick("Bingo")}>Add</button>
    </>
  );
};

export default GoodDogs;
