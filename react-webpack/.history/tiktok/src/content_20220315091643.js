import { useEffect ,useState } from "react";

function Content(){
    const [countdown , setCountdown] = useState(180)
    useEffect(() => {

       
    },[])

    return(
        <div>
        <h1>{countdown}</h1>
        </div>

    )
}
export default Content;