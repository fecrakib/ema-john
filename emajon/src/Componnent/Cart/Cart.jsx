

function Cart({cart}) {
   
    let totalPrice = 0;
    let shipping=0;
    for (const product of cart) {
        totalPrice +=parseFloat(product.price);
        shipping +=parseFloat(product.shipping)
    }
    // console.log(totalPrice)
   let tax=parseFloat(((totalPrice*7)/100).toFixed(2));
   let grandTotal=totalPrice + shipping + tax;
  return (
    <div className="bg-orange-400 p-4">   
  <h1>Order summary </h1> 
  <p>Selected product:{cart.length}</p>
  <p>Total Price:${totalPrice}</p>
  <p> Shipping:${shipping}</p>
  <p>Tax:${tax}</p>
  <h4>Grand Total:{grandTotal}</h4>
    </div>
  )
}

export default Cart