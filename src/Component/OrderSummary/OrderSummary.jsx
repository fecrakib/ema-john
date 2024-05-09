

const OrderSummary = ({cart}) => {
  
    const totalPrice = cart.reduce((total,cart)=>total+cart.price,0);
    const shippingCast = cart.reduce((total,cart)=>total+cart.shipping,0);
    const tax  = (totalPrice*7/100).toFixed(2);
    const grandTotal = parseFloat(totalPrice)+parseFloat(shippingCast)+parseFloat(tax);
   
    return (
        <div className="position sticky top-0 ">
               <h2>Order Summary</h2>
                <p>Selected Product:{cart.length}</p>
                <p>Total Price:${totalPrice} </p>
                <p>Total Shipping:${shippingCast}</p>
                <p>Tax:${tax}</p>
                <h4>Grand Total:${grandTotal} </h4>
        </div>
    );
};

export default OrderSummary;