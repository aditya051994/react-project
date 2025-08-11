import { useState } from "react";

const GetInputValue_State = () => {
    let [email,setEmail]=useState('');
    let [display,setDisplay]=useState('');

    function getValuebyChange(event)
    {
      console.log(event.target.value);
      setEmail(event.target.value)
    }    

    function getUserValue()
    {  
        setDisplay(email);
    }
    return (
        <>
            <input type="text" onChange={getValuebyChange} placeholder="Enter value" className="form-control" style={{ 'width': '50%' }} />
            <br />
            <button onClick={getUserValue} className="btn btn-danger">Subscribe</button>
            <h3>Welcome , {display}</h3>
        </>
    )

}
export default GetInputValue_State;