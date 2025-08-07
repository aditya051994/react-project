let Child =(props)=>{
    let age=30;
    return(
        <>
        <h4>Child Begin</h4>
       {/* <b> {props.InstName}</b><br/>
        <h5>Child Component</h5> */}

        <button onClick={()=>props.method(age)} className="btn btn-warning">send Data</button>
        </>
    )
}
export default Child;