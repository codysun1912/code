import { useEffect ,useState } from "react";

function Content(){
    

    
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