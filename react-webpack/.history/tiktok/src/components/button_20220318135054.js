import Styles from "./Button.module.css"
import clsx from "clsx"
function Button({primary}){
    const classes = clsx(Styles.btn,{
        [Styles.primary] : primary
    })
    return(
        <div>
            <button className = {classes}> Click me </button>
        </div>
    )
}
export default Button