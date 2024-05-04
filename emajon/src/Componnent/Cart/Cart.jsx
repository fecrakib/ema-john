

function Cart({cart}) {
   
    let totalPrice = 0;
    let shipping=0;
    let quantity = 0;
    for (const product of cart) {
      product.quantity=product.quantity ||1;
        totalPrice +=parseFloat(product.price*product.quantity);
        shipping +=parseFloat(product.shipping);
        quantity += parseFloat(product.quantity);
    }
    console.log("quantiy",quantity);
    // console.log(totalPrice)
   let tax=parseFloat(((totalPrice*7)/100).toFixed(2));
   let grandTotal=totalPrice + shipping + tax;
  return (
    <div className="bg-orange-400 p-4">   
  <h1>Order summary </h1> 
  <p>Selected product:{quantity}</p>
  <p>Total Price:${totalPrice}</p>
  <p> Shipping:${shipping}</p>
  <p>Tax:${tax}</p>
  <h4>Grand Total:{grandTotal}</h4>
    </div>
  )
}

export default Cart