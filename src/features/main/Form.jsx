export function Form() {
  return (
    <div className="form-container">
      <form className="guess-wrapper">
        <label>
          <input
            className="input"
            placeholder="Guess"
            type="text"
            name="guess"
          />
        </label>
        <button className="btn">Guess</button>
      </form>
      <button className="give-up-btn">Give Up</button>
    </div>
  );
}
