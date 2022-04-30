import Styles from "./Button.module.css"
import clsx from "clsx"
function Button({primary}){
    const classes = clsx(Styles.btn,{
        [Styles.primary] : primary,
        'd-flex': false

    })
    return(
      
            <button className = {classes}> Click me </button>
        
    )
}
export default Button