import { useState } from "react";

function Spread()
{
    let [user,setUser]=useState({name:'Viditya Software',age:25,contact:7464637383})
    function updateAge()
    {
        // setUser({name:'Viditya Software',age:28,contact:7464637383});
        setUser({...user, age:28,contact:9090467388});

    }
    return(
        <>
        {
            <ul>
                <li>{user.name}</li>
                <li>{user.age}</li>
                <li>{user.contact}</li>
            </ul>
        }
        <button className="btn btn-primary" onClick={updateAge}>Update Age</button>

        </>
    )

} 

export default Spread;