import { useEffect ,useState } from "react";

function Content(){
    const [title ,setTitle] =useState("")

    useEffect(() => {
        console.log("Mounted")
    })
    return(
        <div>
        <input/>

 
        </div>
    )
}
export default Content