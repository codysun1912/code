import { useState ,memo } from "react";

function Content(){
  console.log("re-ended")
    
    return(
        <div>
        <h1>Hello </h1>
        </div>

    )
}        
export default memo(Content);