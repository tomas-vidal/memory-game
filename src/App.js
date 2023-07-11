import ContainerCards from "./components/ContainerCards";

function App() {
  return (
    <div className="App">
      <h1>Football Memory Game</h1>
      <p>
        Get points by clicking on an image but don't click on any more than
        once!
      </p>
      <ContainerCards />
    </div>
  );
}

export default App;
