import {useState} from "react";
const orders = [1000,2000,3000];
function App() {
  const [counter , setCounter] = useState(() => {
    const total = orders.reduce((total , cur) => total + cur)
    return total
  });
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
