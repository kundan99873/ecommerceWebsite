import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { orderProduct } from '../state/action';

// const stripePromise = loadStripe("pk_test_51Mir2BSJfev21QuqJ8KQ4VpPq9W2h1Szd5oYgMh1p8Q8UtfHVeRc6AaOEcLID7nHlQ9ygNJB1cQiuc4CAjCrdzFp00EflQgn6h");


export default function Checkout() {

  const myCart = useSelector(state => state.cartItem)
  // console.log(myCart)

  // const productCar = myCart.products;
  // console.log(productCar)
  const productCart = myCart.products;
  // console.log(productCart)
  const [client, setClient] = useState("");

  const [text , setText] = useState({
    email : "",
    name : "",
    state : "",
    pin : "",
    city : "",
    address : ""
  });

  const total = {
    amount : myCart.total * 100
  }

  const handleChange = (event) => {
    setText({...text, [event.target.name] : event.target.value})
  }
  const payment = async () => {
    await axios.post("/payment/create-payment-intent", total).then(res => {
      setClient(res.data.clientSecret);
    })
  }

  const dispatch = useDispatch();
  
  const navigator = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(orderProduct(myCart,text))
    // console.log(text);
    // console.log(total)

    navigator(`/payment/${client}`);
  }
  useEffect(() => {
    payment();
  },[handleSubmit])
  
//   const [products, setProducts] = useState([{}]);

//   useEffect(() => {
//     productCart.map((item) => {
//         axios.get(`/product/find/${item}`).then((res) => {
//             setProducts([...products, res.data])
//         })
//     })
//     console.log(products)
//   },[])

  return (
    <>
    <div className="mx-3 my-5 "style={{backgroundImage : "https://source.unsplash.com/random/1350x500?mobile"}}>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center d-flex justify-content-center py-5">
        <div className="col">
          <div className="card  shadow p-3 mb-5 bg-white rounded">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Checkout Details</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <input type="text" className="form-control" placeholder="Full Name" name = "name" value={text.name} onChange={handleChange}  required/>   
                </div>
                <div className="mb-2">
                    <input type="text" className="form-control" placeholder="Email" name = "email" value={text.email} onChange={handleChange}  required/>   
                </div>
                <div className="mb-2">
                    <input type="text" className="form-control" placeholder="Address" name = "address" value={text.address} onChange={handleChange} required />   
                </div>
                <div className="mb-2">
                    <input type="text" className="form-control" placeholder="City" name = "city" value={text.city} onChange={handleChange} required />   
                </div>
                <div className="mb-2">
                    <input type="text" className="form-control" placeholder="State" name = "state" value={text.state} onChange={handleChange} required />   
                </div>
                <div className="mb-2">
                    <input type="number" className="form-control" placeholder="Pincode" name = "pin" value={text.pin} onChange={handleChange} required />   
                </div>
                <button type="submit" className="btn btn-outline-success" >Pay</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
