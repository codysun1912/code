import Context from "./context"


function Provider({children}){
    <Context.Provider value ={}>
        {children}
    </Context.Provider>
}
export default Provider