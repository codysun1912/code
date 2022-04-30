import {forwardRef ,useImperativeHandle , useRef} from "react"
import tiktok1 from "./Videos/tiktok1.mp4"

function Video(props,ref) {
    const videoRef = useRef()
    useImperativeHandle(ref , () => ({
         play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))
    return (
        <video src = {tiktok1}
        ref={videoRef}
        style ={{width : "400px" , height : "400px"}}></video>
    )
}

export default forwardRef(Video)