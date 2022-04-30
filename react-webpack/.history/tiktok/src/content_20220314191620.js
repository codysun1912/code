import { useEffect ,useState } from "react";

function Content(){
    const [title ,setTitle] =useState("")

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(posts => {
            setPosts(posts)
        })
    })
    return(
        <div>
        <input value ={title} onChange={(e) => setTitle(e.target.value)}/>
        {console.log("hello")}

        </div>

    )
}
export default Content;