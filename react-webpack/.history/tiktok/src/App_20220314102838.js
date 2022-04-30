import {useState} from "react";
const total = [1000,2000,3000];
function App() {
  const [counter , setCounter] = useState(1);
  const handleClick = () => {
    setCounter(prev => prev + 1);
  }
  return (
    <div className="App">
    <h1>{counter}</h1>
    <button className="button" onClick={handleClick}>Count</button>
    </div>
  );
}

export default App;
