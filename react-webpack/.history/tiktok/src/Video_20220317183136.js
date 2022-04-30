import {forwardRef} from "react"
import tiktok1 from "./Videos/tiktok1.mp4"

function Video(ref,props) {
    console.log(props.ref)
    return (
        <video src = {tiktok1}
        ref={props.ref}
        style ={{width : "400px" , height : "400px"}}></video>
    )
}

export default forwardRef(Video)