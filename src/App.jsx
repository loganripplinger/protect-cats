import React from "react";
// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Header } from "./features/main/Header";
import { Similarity } from "./features/main/Similarity";
import { Form } from "./features/main/Form";

function App() {
  return (
    <div className="App">
      <Header />
      <Similarity />
      <Form />
    </div>
  );
}

export default App;
