import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Product from "../Products/Product";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../Fakebd/Fadkebd";


function Shop() {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[])
 

    useEffect(() => {
        const storedCart = getShoppingCart();
        const saveCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) { // Check if addedProduct is defined
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
              
                saveCart.push(addedProduct);
            } else {
                console.log(`Product with id ${id} not found in the products array.`);
            }
            console.log('addded cart',addedProduct);
        }
        setCart(saveCart);
    }, [products]);
    
   const [cart,setCart] = useState([]);
   const handleCart = (product) => {
       const newCart = [...cart,product];
       setCart(newCart);
       addToDb(product.id);
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