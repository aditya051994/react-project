import Admin from "./Admin";
import StatesDemo from "./StatesDemo";
import Test from "./Test";
import User from "./User";

//How to create component
function App() {
    // var name="Viditya Software";
    // function getShow()
    // {
    //     alert("Hello World");
    // }

    // function getMessage(firstName, lastName)
    // {
    //     console.log(`Hello ${firstName} ${lastName}`);
    // }

    let Role = "User";

    return (
        <div>
            {/* {name}       
            {12+12}
            {getShow()} */}
            {/* <button onClick={()=>getMessage('Viditya','Software')} className="btn btn-primary" >Get Message</button> */}

            {/* {
                1==3?<h3>Equal</h3>:<h3>Not Equal</h3>
            } */}

            {/* {
                 Role=="Admin"?<Admin/>:<User/>
            } */}

            {/* <StatesDemo /> */}
            {/* <Test/> */}



        </div>
    )
}
export default App;
