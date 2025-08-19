import { createContext } from "react";
import UseContext_2 from "./UseContext_2";

export const GlobalInfo=createContext();

function UseContext_1()
{
    return(
        <GlobalInfo.Provider value={{appColor:"red"}}> 
        {/* appColor is accessible throught out child component */}
        <h3>Context-1</h3>
        <UseContext_2/>
        </GlobalInfo.Provider>
    )
}

export default UseContext_1;