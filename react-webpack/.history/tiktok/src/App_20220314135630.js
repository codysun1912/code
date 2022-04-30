import {useState} from "react";
const gifts = ["CPU I9" , "RAM 35GB RGB" , "RGB KEYBOARD"]
function App() {
  const [random , setRandom] = useState(() => {
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
