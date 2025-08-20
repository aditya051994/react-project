import { useEffect, useState } from "react";

const API = () => {
    var url = "https://dummyjson.com/products?limit=10";
    let [product, setProduct] = useState([]);

    // const fetchData=async()=>{
    //     try{
    //         const response=await fetch(url);
    //         const data=response.json(); // convert into JSON
    //         console.log(data);
    //        // setProduct(data);            
    //     }
    //     catch(err){
    //         console.log(err);
    //     }
    // };

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=10") // your API
            .then((res) => res.json())
            .then((data) => {
                console.log("API Response:", data); // log full response
                console.log("Products:", data.products); // log only products
                setProduct(data.products); // save in state
            })
            .catch((err) => console.error("Error fetching products:", err));
    }, []);


    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">availabilityStatus</th>
                        <th scope="col">brand</th>
                        <th scope="col">category</th>
                        <th scope="col">description</th>
                    </tr>
                </thead>
                <tbody>
                     {
                product.map((item) => (
                         <tr>
                        <th scope="row">{item.availabilityStatus}</th>
                        <td>{item.brand}</td>
                        <td>{item.category}</td>
                        <td>{item.description}</td>
                    </tr>

                ))
            }

                                      
                </tbody>
            </table>
           
        </>
    )
}
export default API;