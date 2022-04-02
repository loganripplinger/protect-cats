import React, { useContext } from "react";
import { StoreContext } from "../context/Store";

export function Table() {
  const { words } = useContext(StoreContext);

  const tableBody = words.map((word) => (
    <tr>
      <td>{word}</td>
    </tr>
  ));

  return (
    <div className="guess-table">
      <table>
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>Guess</th>
            {/* <th>Similarity</th> */}
            {/* <th>Getting close?</th> */}
          </tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
      <button className="give-up-btn">Give Up</button>
    </div>
  );
}
