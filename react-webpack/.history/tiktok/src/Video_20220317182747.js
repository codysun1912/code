import tiktok1 from "./Videos/tiktok1.mp4"
import {forwardRef} from "react"

function Video() {
    return (
        <video src = {tiktok1}
        style ={{width : "400px" , height : "400px"}}></video>
    )
}

export default Video