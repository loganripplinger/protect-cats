import React, { createContext, useState } from "react";

export const StoreContext = React.createContext("");

export function StoreProvider({ children }) {
  const [words, setWords] = useState(["for", "trick", "leather"]);

  function addWord(word) {
    setWords((prevWords) => [...prevWords, word]);
  }

  return (
    <StoreContext.Provider value={{ addWord, words }}>
      {children}
    </StoreContext.Provider>
  );
}
