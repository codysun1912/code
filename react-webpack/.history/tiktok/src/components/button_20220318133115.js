import Styles from "./Button.module.css"
import clsx from "clsx"
function Button(){
    return(
        <div>
            <button className = {Styles.btn}> Click me </button>
            <button className = {clsx(Styles.btn,
            {[Styles.active ]: false})
            }> 
            Click me 
            </button>
        </div>
    )
}
export default Button