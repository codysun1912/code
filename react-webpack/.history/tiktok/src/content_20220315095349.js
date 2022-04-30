import { useEffect ,useState } from "react";

function Content(){
    const [avatar ,setAvatar] = useState()
        const handleChange = (e) =>{
            const file = e.target.files[0]
            file.preview = URL.createObjectURL(file)
            setAvatar(file)

        }
    

    return(
        <div>
        <input
            type="file"
            onchange={handleChange}
        />
        {avatar && (
            <img src={avatar.preview} alt="" width ="80%"/>
        )}
        </div>

    )
}        
export default Content;