import { useMemo, useState } from "react";

function UseMemoD()
{
      let [count, setCount] = useState(0);
      let [item, setItem] = useState(1);


   const MultcountMemo=useMemo(()=>{
       console.log("MultCount called");
       return count*10;
   },[count]); // array of dependencies, if count changes then only this function will be called
   
//    function Multcount()
//    {console.log("MultCount called");
//        return count*10;}

      
    return (
        <div>
            <b>Count: {count}</b> <br />
            <b>item: {item}</b> <br />
            <b>Count Mult : {MultcountMemo}</b> <br />

            <button onClick={() => setCount(count + 1)} className="btn btn-primary">Count</button> &nbsp;
            <button onClick={() => setItem(item * 5)} className="btn btn-warning">Item</button> <br />

          
        </div>
    );
}

export default UseMemoD;