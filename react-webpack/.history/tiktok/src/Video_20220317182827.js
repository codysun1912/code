import tiktok1 from "./Videos/tiktok1.mp4"
import {forwardRef} from "react"

function Video(ref,props) {
    return (
        <video src = {tiktok1}
        style ={{width : "400px" , height : "400px"}}></video>
    )
}

export default forwardRef(Video)