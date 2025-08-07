import React, { useState } from "react";
const StatesDemo=()=>{
    //let age=20;
    //create state
    let [age,updateAge]=useState();

    function ChangeAge()
    {
        updateAge(22);
        // console.log("Previous age", age);
        // age=21;// Value update
        // console.log("Updated age", age);
    }

    return(
        <h4>
            {age}<br/>
            <button onClick={ChangeAge} className="btn btn-warning">Change</button>
        </h4>
    )
}
export default StatesDemo;
