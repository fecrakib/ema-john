import { useEffect, useState } from 'react';
import './Shop.css'
import { data } from 'autoprefixer';
import Product from '../Product/Product';


const Shop = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    
    const [cart,setCart] = useState([]);
 
    const hadeladdToCart = (product) => {
       const newCart  = [...cart,product];
       setCart(newCart);
    };
    console.log(cart);

    return (
        <div className=' grid  grid-cols-5'>

            <div className=' md:col-span-4 md:grid grid-cols-3 '>
                {
                    products.map(product=><Product key={product.id} product={product}
                    hadeladdToCart={hadeladdToCart}
                    ></Product>)
                }
                <h1 className='text-6xl'>product </h1>

            </div>
            <div className=' col-span-1'>
                <h2>Order Summary</h2>
                <p>Selected Product:{cart.length}</p>

            </div>
            
        </div>
    );
};

export default Shop;