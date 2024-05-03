

function Product({product,handleCart }) {
    const {name,seller,price,rating,img}=product
  return (
    <div>
           <div className="m-3 "> 
        <div className="bg-white shadow-md  rounded-lg p-4 w-full max-w-md mx-auto">
      {/* Product Image */}
      <img className="w-full h-[250px] mb-4"
        src={img}
      
      />

      {/* Product Title */}
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
      {name}
      </h2>

      {/* Price */}
      <p className="text-gray-600 mb-2">price:${price}</p>

      {/* Manufacturing */}
      <p className="text-sm text-gray-500 mb-2">{seller}</p>

      {/* Rating */}
    

      {/* Add to Cart Button */}
      <button onClick= {()=> handleCart(product) } className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md w-full">
        Add to Cart
      </button>
    </div>
        </div>
    </div>
  )
}

export default Product