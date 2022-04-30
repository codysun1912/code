function emitComment(id){
  setInterval(() =>{
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}` , {
        detail:`noi dung comment ${id}`
      })
    )
  },2000)
}
emitComment(1)
emitComment(2)
emitComment(3)


const lessons = [
    {
        id:1,
        name: "ReactJS la gi ? Tai sao nen hoc ReactJS"
    },
    {
        id:2,
        name: "SPA/MPA la gi"
    },
    {
        id:3,
        name: "Arrow function "
    }
]
function Content(){
    const [lessonId , setLessonId] =useState(1)
    const handleComment = ({detail}) =>{
        console.log({detail})
    }
    useEffect(() =>{
        window.addEventListener(`lesson-${lessonId}` , handleComment)

        return () => {
            window.removeEventListener(`lesson-${lessonId}` , handleComment)
        }
    },[lessonId])
    
    return(
        <div>
        <ul>
        {lessons.map((lesson) => (
            <li 
            key={lesson.id}
            style ={{color: lessonId === lesson.id ? "red" : "#333"}}
            
            onClick = {() => setLessonId(lesson.id)} 
            >
            {lesson.name}

            </li>
        ))}

        </ul>
        
        </div>

    )
fake chat app

const [count , setCount] =useState(60)
  let timer = useRef()
  const prevCurrent = useRef()
  const h1Ref = useRef()
  useEffect(() =>{
    prevCurrent.current = count

  },[count])
  useEffect(() =>{
    console.log(h1Ref.current)
  })

  const handleClickStart = () =>{
    timer.current = setInterval(() =>{
      setCount(prev => prev -1)
    } , 1000)

  }
  const handleClickStop = () =>{
    clearInterval(timer.current)
  }
  
  return (
    <div className="App">
    <h1 ref = {h1Ref}>{count}</h1>
    <button onClick ={handleClickStart}>Start</button>
    <button onClick={handleClickStop}>Stop</button>
    </div>
  )
}

tinh tong
function App() {
  const [name, setName] = useState("")
  const [price ,setPrice]=useState("")
  const [products,setProducts] = useState([])
  const nameRef = useRef()

  const handleClick = () =>{
    setProducts([...products , {
      name,
      price: +price
    }])
    setName("")
    setPrice("")
    nameRef.current.focus()
  }

  const total = useMemo(() => {
    const result = products.reduce((result, product) =>{
      return result + product.price
    },0)
    return result
  },[products])
  
  
  return (
    <div className="App">
    <input 
    ref = {nameRef}
    value={name}
    placeholder="Enter your name"
    onChange={(e)=> setName(e.target.value)}
    />
    <br/>
    <input 
    value={price}
    placeholder="Enter your price"
    onChange={(e)=> setPrice(e.target.value)}

    />
    <br/>
    <button onClick={handleClick}>Click</button>
    <br/>
    Total: {total}
    <ul>
      {products.map((product,index) => (
        <li key={index}> {product.name} - {product.price}</li>
      ))}
    </ul>

    
    </div>
  )
}


code reducer
const initState = {
  job:"",
  jobs:[]
}

const SET_JOB = "set_job"
const ADD_JOB = "add_job"
const DELETE_JOB = "delete_job"

const setJob = payload => {
  return{
    type:SET_JOB,
    payload
  }
}
const addJob = payload => {
  return{
    type:ADD_JOB,
    payload
  }
}
const deleteJob = payload => {
  return{
    type:DELETE_JOB,
    payload
  }
}


 const reducer = (state , action) => {  
   let newState
   switch(action.type) {
     case SET_JOB:  
     newState = {
       ...state,
       job:action.payload
     }
     break
     case ADD_JOB: 
     newState ={
       ...state,
       jobs:[...state.jobs , action.payload]
     
     }
     break
     case DELETE_JOB: 
     const newJobs = [...state.jobs]
       newJobs.splice(action.payload ,1)
       
       
       newState = {...state,
        jobs: newJobs
      }
      break

      default:
       throw new Error("Invalid action")
     }
     return newState

   }
   

function App() {
  const [state , dispatch] = useReducer(reducer , initState)
  const {job , jobs} = state
  const inputRef = useRef()
  const handleAddJob = () => {
    dispatch(addJob(job))
    dispatch(setJob(""))  

    inputRef.current.focus()

  }
  return (
    <div className="App">
    <h1>Todo</h1>
    <input
    ref={inputRef} 
    value = {job}
    placeholder="Enter your.."
    onChange = {e =>{dispatch(setJob(e.target.value))}}
    />
    <button onClick ={handleAddJob}>Add</button>
    <ul> 
    {jobs.map((job,index) => (
      <li key ={index}>{job} 
      <span onClick ={() => dispatch(deleteJob(index))}>&times;</span>
      </li>

    ))}
    </ul>

    </div>
  )
}

export default App;
