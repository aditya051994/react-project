function MapDemo(){
    // let city=["Mumbai","Pune","Delhi","Bangalore","Chennai"];

   let patient=[
    {
        id:1,
        Name:'Ramesh',
        Age:23,
        contact:'9876543210'
    },
    {
        id:2,
        Name:'Suresh',
        Age:25,
        contact:'9876543211'    
    },
    {
        id:3,
        Name:'Rajesh',
        Age:45,
        contact:'9876543212'
    },
    {
        id:4,
        Name:'Naresh',
        Age:54,
        contact:'9876543213'
    }
   ]


    return(
        <>
        <h3>Map Demo</h3>
        
            {/* city.map((item)=>(
                <h3>{item}</h3>
            )) */}


            <table className="table table-striped" >
                <thead>
                    <tr>
                        <th scope="col">PAtient Reg.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Contact</th>
                    </tr>
                </thead>
                  <tbody>
                {
                    patient.map((item) => (
                        <tr>
                          
                                <td>{item.id}</td>
                                <td>{item.Name}</td>
                                <td>{item.Age}</td>
                                <td>{item.contact}</td>  
                        </tr>
                    ))                   
                }
                 </tbody>
            </table>
                {/* patient.map((item)=>(
                    <h3>{item.Name}-{item.Age}</h3>
                )) */}
            
        
        </>
    )
}
export default MapDemo