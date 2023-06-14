import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Cart from '../components/Cart'
import "./Carts.css";
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios';
import Navbar from "../components/Navbar"

export default function CartPage() {

  // const [clientSecret, setClientSecret] = useState("");

  const myCart = useSelector(state => state.cartItem)
  // console.log(myCart)

  // const productCar = myCart.products;
  // console.log(productCar)
  const productCart = myCart.products;
  // console.log(productCart)
  // const productCarts = myCart.products.pQuantity;
  // console.log(productCarts)

  // useEffect(() => {
  //   console.log(productCart)
  // },[productCart])

  const navigator = useNavigate();

  const handleClick = () => {
    navigator("/checkout");
  }
  
  const handleHome = () => {
    navigator("/");
  }
  return (
    <div>
      <Navbar />
      <div className='mx-3'>
      <h1>MY CART</h1>
      <div className='d-flex justify-content-between my-3'>
        <div className="btn btn-outline-success" onClick={handleHome}>CONTINUE SHOPPING</div>
        <div className='d-flex text-center'>
            <div className='mx-3'>Cart Item({myCart.quantity})</div>
        </div>
        {/* <div className="btn btn-outline-success">CHECKOUT NOW</div> */}
      </div>
      <div id='productCard'>
        <div style={{flex : 3}} >
          {myCart.quantity === 0 ? <h1>Cart is Empty !!!</h1> : productCart.map(item => {
            return <div key={item}>
              <Cart product={item}/>
              {/* {console.log(item)} */}
            </div>
          })}
        </div>
        <div id="summary" className='card px-3 py-3 my-2 mx-2'>
            <h2>ORDER SUMMARY</h2>
            <div id="totalPrice">
                <div>SubTotal</div>
                <span>Rs {myCart.total}</span>
            </div>
            <div id="totalPrice">
                <div>Estimated Shipping</div>
                <span>Rs 50</span>
            </div>
            <div id="totalPrice">
                <div>Discount</div>
                <span>Rs -50</span>
            </div>
            <div id="totalPrice">
                <h3>Total</h3>
                <h3>Rs {myCart.total}</h3>
            </div>
            {/* <Link class="btn btn-primary" to = "/checkout" role="button">Link</Link> */}
            <div className="btn btn-outline-success" onClick = {handleClick}>BUY NOW</div>
        </div>
      </div>
    </div>
  </div>
  )
}


// import React, { useState, useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// import CheckoutForm from "./CheckoutForm";
// import "./App.css";

// const stripePromise = loadStripe("pk_test_51Mir2BSJfev21QuqJ8KQ4VpPq9W2h1Szd5oYgMh1p8Q8UtfHVeRc6AaOEcLID7nHlQ9ygNJB1cQiuc4CAjCrdzFp00EflQgn6h");

// export default function App() {
//   const [clientSecret, setClientSecret] = useState("");

//   useEffect(() => {
//     // Create PaymentIntent as soon as the page loads
//     fetch("/create-payment-intent", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
//     })
//       .then((res) => res.json())
//       .then((data) => setClientSecret(data.clientSecret));
//   }, []);

//   const appearance = {
//     theme: 'stripe',
//   };
//   const options = {
//     clientSecret,
//     appearance,
//   };

//   return (
//     <div className="App">
//       {clientSecret && (
//         <Elements options={options} stripe={stripePromise}>
//           <CheckoutForm />
//         </Elements>
//       )}
//     </div>
//   );
// }