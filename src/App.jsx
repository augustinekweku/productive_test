import "./App.css";
import getDimensions from "./hooks/getDimension";

function App() {
  const [dimensions] = getDimensions();

  return (
    <>
      <div className="App">
        <h1>width: {dimensions.width}</h1>
        <h1>height: {dimensions.height}</h1>
      </div>
    </>
  );
}

export default App;
