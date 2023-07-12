import { useState } from "react";
import ContainerCards from "./components/ContainerCards";
import "./styles/App.css";
import { useContext } from "react";
import { CounterContext } from "./Context";

function App() {
  const example = useContext(CounterContext);

  return (
    <div className="App">
      <h1>Football Memory Game</h1>
      <p>
        Get points by clicking on an image but don't click on any more than
        once!
      </p>
      <div className="counters">{example.counter}</div>
      <ContainerCards />
    </div>
  );
}

export default App;
