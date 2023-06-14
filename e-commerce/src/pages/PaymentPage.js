import React from 'react'
import Pay from '../components/Pay';
import "../components/Payment.css"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation, useNavigate } from 'react-router-dom';

const stripePromise = loadStripe("pk_test_51Mir2BSJfev21QuqJ8KQ4VpPq9W2h1Szd5oYgMh1p8Q8UtfHVeRc6AaOEcLID7nHlQ9ygNJB1cQiuc4CAjCrdzFp00EflQgn6h");

export default function PaymentPage() {

  

  const location = useLocation()
  const clientSecret = location.pathname.split("/")[2];

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };
  return (
    <div>
      {
        clientSecret && (
            <Elements options={options} stripe={stripePromise}>
                <Pay />
            </Elements>
        )}
    </div>
  )
}
