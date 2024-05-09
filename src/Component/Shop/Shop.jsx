import { useEffect, useState } from 'react';
import './Shop.css'
import { data } from 'autoprefixer';
import Product from '../Product/Product';
import OrderSummary from '../OrderSummary/OrderSummary';
import { addToDb, getShoppingCart } from '../uttility/uttity';


const Shop = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    useEffect(()=>{
        const storedCart = getShoppingCart();
        console.log(storedCart);
    },[])
    
    const [cart,setCart] = useState([]);
 
    const hadeladdToCart = (product) => {
       const newCart  = [...cart,product];
       setCart(newCart);
       addToDb(product.id);
    };
  

    return (
        <div className=' flex justify-between  md:grid grid-cols-5'>

            <div className=' md:col-span-4 grid grid-cols-1 md:grid-cols-3 '>
                {
                    products.map(product=><Product key={product.id} product={product}
                    hadeladdToCart={hadeladdToCart}
                    ></Product>)
                }
                <h1 className='text-6xl'>product </h1>

            </div>
            <div className=' col-span-1'>
             <OrderSummary key={cart.id} cart={cart}></OrderSummary>

            </div>
            
        </div>
    );
};

export default Shop;