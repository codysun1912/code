import {forwardRef ,useImperativeHandle , useRef} from "react"
import tiktok1 from "./Videos/tiktok1.mp4"

function Video(props,ref) {
    
    return (
        <video src = {tiktok1}
        ref={ref}
        style ={{width : "400px" , height : "400px"}}></video>
    )
}

export default forwardRef(Video)