import {useState} from "react";
const gifts = ["CPU I9" , "RAM 35GB RGB" , "RGB KEYBOARD"]
function App() {
  const [gift , setGift] = useState() 

  const handleClick = () => {
    const index = Math.floor(Math.random() * gifts.length)
    
  }
  return (
    <div className="App">
    <h1>{{gift}||"chua co phan thuong"}</h1>
    <button className="button" onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
