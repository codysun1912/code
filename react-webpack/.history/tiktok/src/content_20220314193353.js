import { useEffect ,useState } from "react";
const tabs = ["posts" ,"comments", "albums"]
function Content(){
    const [posts , setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(posts => {
            setPosts(posts)
        })
    },[])
    return(
        <div>
        {[tabs.map(tab => {
            <button>{tab}</button>
        })}
        
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>

        </div>

    )
}
export default Content;