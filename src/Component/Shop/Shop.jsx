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
    console.log(products);

    return (
        <div className=' grid  grid-cols-5'>

            <div className=' md:col-span-4 md:grid grid-cols-3 '>
                {
                    products.map(product=><Product key={product.id} product={product}></Product>)
                }
                <h1 className='text-6xl'>product </h1>

            </div>
            <div className=' col-span-1'>
                <h2>Order Summary</h2>

            </div>
            
        </div>
    );
};

export default Shop;