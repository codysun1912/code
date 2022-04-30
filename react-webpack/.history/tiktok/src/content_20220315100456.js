import { useState ,useEffect } from "react";

function Content(){
    const [avatar ,setAvatar] = useState()
    useEffect(() => {
        URL.revokeObjectURL(avatar.preview)
    } ,[avatar])

        const handleChange = (e) =>{
            const file = e.target.files[0]
            file.preview = URL.createObjectURL(file)
            setAvatar(file)
        }
    
    return(
        <div>
        <input
            type="file"
            onChange={handleChange}
        />
        {avatar && (
            <img src={avatar.preview} alt="" width ="80%"/>
        )}
        </div>

    )
}        
export default Content;