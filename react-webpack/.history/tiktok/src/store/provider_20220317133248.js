import Context from "./context"
import {useReducer} from "react"

function Provider({children}){
    const [state , dispatch] = useReducer()
    <Context.Provider value ={state , dispatch}>
        {children}
    </Context.Provider>
}
export default Provider