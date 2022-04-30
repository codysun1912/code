import { useState ,memo } from "react";

function Content({onClickCount}){
  console.log("re-ended")
    
    return(
        <div>
        <h1>Hello </h1>
        <button onClick ={handleClickCount}>Click</button>
        </div>

    )
}        
export default memo(Content);