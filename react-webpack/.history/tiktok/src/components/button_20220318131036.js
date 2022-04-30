import Styles from "./Button.module.css"
function Button(){
    return(
        <div>
            <button className = {Styles.btn}> Click me </button>
        </div>
    )
}
export default Button