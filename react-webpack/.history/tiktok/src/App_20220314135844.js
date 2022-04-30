import {useState} from "react";
const gifts = ["CPU I9" , "RAM 35GB RGB" , "RGB KEYBOARD"]
function App() {
  const [random , setRandom] = useState(() => {
    const data = [...gifts](Math.random() * gifts.length)
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
