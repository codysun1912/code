import {useState} from "react";


const courses = [
  {
    id: 1,
    name:"HTML , CSS"
  },
  {
    id: 2,
    name:"Javascript"
  },
  {
    id: 3,
    name:"ReactJS"
  }
]

function App() {
  const [checked, setChecked] = useState([])
  console.log(checked)
  
  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if(isChecked) {
        return checked.filter(item => item !== id)
      } else {
        return [...prev,id]
      }
    })

  }

  const handleClick = () => {
    console.log({id:checked})
    
    
  }
  return (
    <div className="App">
    
     
    </div>
  );
}

export default App;