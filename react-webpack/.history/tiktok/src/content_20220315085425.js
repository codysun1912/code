import { useEffect ,useState } from "react";

function Content(){
    const [changeWidth ,setChangeWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => {
            
        }

        window.addEventListener("resize", handleResize)
    })

    return(
        <div>
        <h1>{changeWidth}</h1>
        </div>

    )
}
export default Content;