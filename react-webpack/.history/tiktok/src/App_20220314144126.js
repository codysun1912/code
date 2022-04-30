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
  const [check,setCheck] = useState()


  const handleClick = () => {
    
    
    
  }
  return (
    <div className="App">
    {courses.map(course => (
      <div key={course.id}>
      <input type ="radio"
        onChange={() => setCheck(course.id)}
      />
      {course.name}


      </div>
    ))}
    <button onClick={handleClick}> Click</button>
    </div>
  );
}

export default App;
