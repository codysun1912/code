import Styles from "./Button.module.css"
import clsx from "clsx"
function Button({primary}){
    return(
        <div>
            <button className = {Styles.btn}> Click me </button>
        </div>
    )
}
export default Button