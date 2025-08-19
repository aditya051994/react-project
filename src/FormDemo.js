const FormDemo=()=>{

    function showMess(event) {
        event.preventDefault();
        console.log("Form submitted");
    }

    return(
        <>
        <form>
            {/* <label>Test</label>
            <br/>
            <button onClick={showMess} className="btn btn-primary">Submit</button> */}

            <h3 style={{backgroundColor:'red',fontWeight:'bold'}}>This is my react style</h3>

        </form>

        </>
    )
}

export default FormDemo;