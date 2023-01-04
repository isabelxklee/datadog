import React, { useState } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  console.log(darkMode);

  return (
    <>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
    </>
  );
};

export default DarkMode;
