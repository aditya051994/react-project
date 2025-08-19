import { useContext } from "react";
import { GlobalInfo } from "./UseContext_1";

function UseContext_2()
{
    //To access state value from parant
    const {appColor} = useContext(GlobalInfo);
    console.log("Value of color:", appColor);   
    return(
        <>
        <h3 style={{color:appColor}}>Context-2</h3>
        </>
    )
}

export default UseContext_2;
