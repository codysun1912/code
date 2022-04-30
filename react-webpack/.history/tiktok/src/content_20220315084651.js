import { useEffect ,useState } from "react";
const tabs = ["posts" ,"comments", "albums","photos","users","todos"]
function Content(){
    const [posts , setPosts] = useState([])
    const [type ,setType] = useState("posts")
    const [showscroll , setShowscroll] = useState(false)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(posts => {
            setPosts(posts)
        })
    },[type])
   

    useEffect(() =>{
        const handleScroll = () => {
            if(window.scrollY >= 200){
                setShowscroll(true)
            } else {
                setShowscroll(false)
            }
    
        }
        window.addEventListener("scroll" , handleScroll)
    },[])
    return () => {
        window.removeEventListener("scroll" , handleScroll)

    }

    
    return(
        <div>
        {tabs.map(tab => (
            <button key={tab} 
            style ={type === tab ? {color:"white",backgroundColor:"black"}:{}}
            onClick={() =>{ setType(tab)
            }}>{tab}</button>
        ))}
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title || post.name}</li>
            ))}
        </ul>

        {showscroll && (
            <button style ={{position: "fixed",right: 20,bottom: 20}}>
                Go to top
            </button>
        )}

        </div>

    )
}
export default Content;