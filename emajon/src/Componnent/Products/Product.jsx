

function Product({product}) {
    const {name,seller,price,rating,img}=product
  return (
    <div>
           <div className=" "> 
        <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md mx-auto">
      {/* Product Image */}
      <img
        src={img}
        className="rounded-md mb-4"
      />

      {/* Product Title */}
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        Product Title
      </h2>

      {/* Price */}
      <p className="text-gray-600 mb-2">$99.99</p>

      {/* Manufacturing */}
      <p className="text-sm text-gray-500 mb-2">Manufactured by ABC Corp.</p>

      {/* Rating */}
    

      {/* Add to Cart Button */}
      <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md w-full">
        Add to Cart
      </button>
    </div>
        </div>
    </div>
  )
}

export default Product