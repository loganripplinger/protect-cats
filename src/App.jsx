import React from "react";
import "./App.css";
import { Header } from "./features/main/Header";
import { Similarity } from "./features/main/Similarity";
import { Form } from "./features/main/Form";
import { Table } from "./features/main/Table";
import { Footer } from "./features/main/Footer";
import { StoreProvider } from "./features/context/Store";

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <Header />
        <Similarity />
        <Form />
        <Table />
        <Footer />
      </div>
    </StoreProvider>
  );
}

export default App;
