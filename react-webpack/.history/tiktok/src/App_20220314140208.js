import {useState} from "react";
const gifts = ["CPU I9" , "RAM 35GB RGB" , "RGB KEYBOARD"]
function App() {
  const [random , setRandom] = useState() 

  const handleClick = () => {
    const random = Math.floor(Math.random() * gifts.length)
    
  }
  return (
    <div className="App">
    <h1>{{gifts}||"chua co phan thuong"}</h1>
    <button className="button" onClick={handleClick}>Count</button>
    </div>
  );
}

export default App;
