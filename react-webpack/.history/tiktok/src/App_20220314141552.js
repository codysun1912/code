import {useState} from "react";


const gifts = ["CPU I9" , "RAM 35GB RGB" , "RGB KEYBOARD"]
function App() {
  const [gift , setGift] = useState() 

  const handleClick = () => {
    const index = Math.floor(Math.random() * gifts.length)
    setGift(gifts[index])
    
  }
  return (
    <div className="App">
    <input></input>
    </div>
  );
}

export default App;
