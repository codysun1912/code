import Styles from "./Button.module.css"
import clsx from "clsx"
function Button(){
    return(
        <div>
            <button className = {Styles.btn}> Click me </button>
            <button className = {(Styles.btn,Styles.active)}> Click me </button>
        </div>
    )
}
export default Button