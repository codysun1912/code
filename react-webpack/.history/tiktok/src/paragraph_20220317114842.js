import {ThemeContext} from "./ThemeContext"
import {useContext} from "react"
 
function Paragraph(){
    const context = useContext(ThemeContext)
 
    return(
        
            <p className={theme}>lorem ipsum dolor sit amet, consectetur adip</p>
    
    )
}
export default Paragraph