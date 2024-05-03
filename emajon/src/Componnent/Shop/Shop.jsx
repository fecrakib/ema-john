import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Product from "../Products/Product";
import Cart from "../Cart/Cart";


function Shop() {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[])
   const [cart,setCart] = useState([]);
   const handleCart = (product) => {
       const newCart = [...cart,product];
       setCart(newCart);
   };
  return (
    <div className="container grid grid-cols-5 ">
        {/* product-container */}
        <div className=" col-span-4 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-1 mx-3"> 
       {
        products.map((product)=>(
        <Product key={product.id }
        product={product}
        handleCart ={handleCart }
        ></Product>

        ))
       }
     
        </div>
        {/* cart container */}
        <div className="col-span-1">
       <Cart key={cart.id} cart={cart}></Cart>
         
          
        </div>


    </div>
  ) 
}

export default Shop