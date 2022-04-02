import React, { useContext } from "react";
import { StoreContext } from "../context/Store";

export function Form() {
  const { addWord } = React.useContext(StoreContext);
  const [guess, setGuess] = React.useState("");

  function handleChange(e) {
    e.preventDefault();
    setGuess(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    addWord(guess);
    setGuess("");
  }

  return (
    <div className="form-container">
      <form className="guess-wrapper">
        <label>
          <input
            type="text"
            placeholder="Guess"
            className="input"
            name="guess"
            value={guess}
            onChange={handleChange}
          />
        </label>
        <button className="btn" onClick={handleClick}>
          Guess
        </button>
      </form>
    </div>
  );
}
