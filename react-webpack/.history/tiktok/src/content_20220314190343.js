import { useEffect ,useState } from "react";

function Content(){
    const [title ,setTitle] =useState("")

    useEffect(() => {
        document.title = title
    })
    return(
        <div>
        <input value ={title} onChange={(e) => setTitle(e.target.value)}/>
        {console.log("hello")}

        </div>

    )
}
export default Content;