import { useState ,useEffect ,useLayoutEffect } from "react";

function Content(){
   const [count,setCount] = useState()
   useLayoutEffect(() => {



   },[count])
   const handleRun = () =>{
       setCount(count+1)
   }
    
    return(
        <div>
        <h1>{count}</h1>
        <button onClick={handleRun}></button>
        
        </div>

    )
}        
export default Content;