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
  const [name , setName] = useState("") 
  const [email , setEmail] = useState("") 

  const handleClick = () => {
    console.log({name,email})
    
    
  }
  return (
    <div className="App">
    {courses.map(course => (
      <div key={course.id}>
      <input/>


      </div>
    ))}
    <button onClick={handleClick}> Click</button>
    </div>
  );
}

export default App;
