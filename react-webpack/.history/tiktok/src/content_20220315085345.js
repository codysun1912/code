import { useEffect ,useState } from "react";

function Content(){
    const [changeWidth ,setChangeWidth] = useState(window.innerWidth)
    useEffect(() => {

        window.addEventListener("resize", handleResize)
    })

    return(
        <div>
        <h1></h1>
        </div>

    )
}
export default Content;