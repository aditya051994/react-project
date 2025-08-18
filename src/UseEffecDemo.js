import { use, useEffect, useState } from "react"

function UseEffecDemo() {
    
    let [count, setCount] = useState(0);
    let [item, setItem] = useState(1);
    
    useEffect(() => {
        console.log("Page load start");
    }, [count]); // array 
    

    return (
        <>
            <b>Count: {count}</b> <br />
            <b>item: {item}</b> <br />
            <button onClick={() => setCount(count + 1)} className="btn btn-primary">Count</button> &nbsp;
            <button onClick={() => setItem(item * 5)} className="btn btn-warning">Item</button> <br />

        </>
    )
}
export default UseEffecDemo;