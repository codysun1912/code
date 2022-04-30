import {useState} from "react";

function App() {
  const [name , setName] = useState() 

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
