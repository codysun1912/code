import Styles from "./Button.module.css"
import clsx from "clsx"
function Button({primary}){
    const classes = clsx(Styles.btn,d-flex,{
        [Styles.primary] : primary,

    })
    return(
      
            <button className = {classes}> Click me </button>
        
    )
}
export default Button