import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Product from "../Products/Product";


function Shop() {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[])
   
  return (
    <div className="container grid grid-cols-5">
        {/* product-container */}
        <div className=" col-span-4"> 
       {
        products.map((product)=>(
        <Product key={product.id }product={product}></Product>

        ))
       }
     
        </div>
        {/* cart container */}
        <div className="col-span-1">
           <h1>Order summary </h1> 
        </div>


    </div>
  )
}

export default Shop