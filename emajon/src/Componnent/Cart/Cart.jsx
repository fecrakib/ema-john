

function Cart({cart}) {
    console.log(cart)
    let totalPrice = 0;
    for (const product of cart) {
        totalPrice +=parseFloat(product.price);
    }
    // console.log(totalPrice)
    console.log(totalPrice)
  return (
    <div className="bg-orange-400 p-4">   
  <h1>Order summary </h1> 
  <p>Selected product:{cart.length}</p>
  <p>Total Price:${totalPrice}</p>
  <p>Total Shipping:</p>
  <p>Tax:</p>
  <h4>Grand Total:</h4>
    </div>
  )
}

export default Cart