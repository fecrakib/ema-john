import React from 'react';

const Product = ({product}) => {
    const {id,img,name,price,rating,seller} = product;
    console.log(product)

    return (
        <div className='m-4  relative rounded-md border-2 border-bg-slate-400'>
           <img className='w-[290px] h-[290px] rounded-8' src={img} alt="" />
           <div className='px-2'>
            <h1>{name}</h1>
            <h2>Price:${price}</h2>
            <h3>{seller}</h3>
            <h3>Rating:{rating}</h3>
      
           </div>
           <button className='bg-orange-600 hover:bg-orange-700 w-full absolute bottom-0'>Add to Cart </button>
        </div>
    );
};

export default Product;