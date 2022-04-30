import { useState ,useEffect ,useLayoutEffect } from "react";

function Content(){
   const [count,setCount] = useState(0)
   useLayoutEffect(() => {
       if(count > 3){
       return setCount(0)
       }
   },[count])
   const handleRun = () =>{
       setCount(count+1)
   }
    
    return(
        <div>
        <h1 style={{color:"#ff0076"}}>{count}</h1>
        <button onClick={handleRun}>Count</button>
        
        </div>

    )
}        
export default Content;