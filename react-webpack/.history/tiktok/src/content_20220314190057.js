import { useEffect ,useState } from "react";

function Content(){
    const [title ,setTitle] =useState("")

    useEffect(() => {
        console.log("Mounted" , title)
    })
    return(
        <div>
        <input value ={title} onChange={(e) => setTitle(e.target.value)}/>
        {console.log("hello")}

        </div>

    )
}
export default Content;