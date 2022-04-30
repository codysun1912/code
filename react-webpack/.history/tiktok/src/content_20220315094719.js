import { useEffect ,useState } from "react";

function Content(){
    const [avatar ,setAvatar] = useState()
    useEffect(() => {
        const handleChange = () =>{
            
        }
    },[])

    return(
        <div>
        <input
            type="file"
            onchange={handleChange}
        />
        </div>

    )
}
export default Content;