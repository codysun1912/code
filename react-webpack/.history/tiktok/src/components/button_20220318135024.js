import Styles from "./Button.module.css"
import clsx from "clsx"
function Button({primary}){
    const classes = clsx
    return(
        <div>
            <button className = {classes}> Click me </button>
        </div>
    )
}
export default Button