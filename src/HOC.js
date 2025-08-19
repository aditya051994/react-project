import { useState } from "react";

function HOC()
{
    return(
        <>
        <HOCRed cmp={Counter} />
        <HOCBlue cmp={Counter} />
        
        </>
    )
}
function HOCRed(props)
{
    return(
        <h2 style={{backgroundColor:"red",color:"white",padding:"10px"}}>
        <props.cmp/>
        </h2>
    )
}

function HOCBlue(props)
{
    return(
        <h2 style={{backgroundColor:"blue",color:"white",padding:"10px"}}>
        <props.cmp/>
        </h2>
    )
}
function Counter(props)
{
    
    let [count,setcount]=useState(0);
    return(
        <>
        <b>Count: {count}</b> <br/>
        <button className="btn btn-primary" onClick={()=>setcount(count+1)}>+</button>
        </>
    )
}

export default HOC;