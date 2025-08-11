import { useRef, useState } from "react";

function GetInputValue()
{
    let [email,setemail]=useState('-');
    let username=useRef();   
    function getUserValue()
    {
        setemail(username.current.value)
        //username.current.style.backgroundColor='yellow';
        //console.log(value.current.value);
    } 
    return(        
        <>
        <br/>
        {/* <form> */}
            <input type="text" ref={username} placeholder="Enter value" className="form-control"  style={{'width': '50%'}} />
            <br/>
            <button onClick={getUserValue} className="btn btn-danger">Subscribe</button>
        {/* </form> */}

        <h3>Welcome , {email}</h3>
        </>
    )
}

export default GetInputValue;