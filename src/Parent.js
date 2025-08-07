import Child from "./Child";

let Parent =()=>{
    let name="Viditya Software";
    function getDetails(age)
    {
        console.log(age);
        alert("Recived data from child component"+age);
    }
    return(
        <>
        <h5>Parent Component</h5>
        {/* <Child InstName={name}/> */}
        {/* Child to parent component call */}

        <Child method={getDetails}/>

        </>
    )
}
export default Parent;