import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../components/productCard.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Prod({id}) {
    // console.log(id)
    const navigate = useNavigate();
    const [item, setItem] = useState({});
    const getProduct = async () =>{
        axios.get(`/product/find/${id}`).then(res => {
        // console.log(res.data)
        setItem(res.data)
    })
}

const handleRemoveWish = async () => {
  if(!localStorage.getItem("token")){
    navigate("/login")
  }
  const products = {
    product : id
  }
  await axios.post("/wish/deleteWish",products,{
    headers : {
      "token" : localStorage.getItem("token")
    }
  }).then(res => {
    // console.log(res.data)
  })
  toast.warn('Removed from Wishlist Successfully', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
}

    useEffect(() => {
        getProduct();
    },[handleRemoveWish])
  return (
    <div>
      <Link style={{color : 'black', textDecoration : "none"}} to={`/product/${item._id}`}>
      <div className="card" style={{ height : "320px"}}>
        <div style={{height : "70%"}}>
        <img src={item.image} className="card-img-top" alt="..." style={{height : "80%",marginTop : "10px", borderRadius : "10px", objectFit : "contain"}}/>
        </div>
        <div className="card-body d-flex justify-content-evenly">
          <div>

          <h5 className="card-title" style={{margin : '-5px'}}>{item.title}</h5>
          <p style={{margin : '-5px'}}>{item.category}</p>
          <h2 style={{margin : '-5px'}}>Rs {item.price}</h2>
          </div>
      <i className="fa-solid fa-heart fa-2xl" style={{color : "#ff0000", marginTop : "20px", cursor : "pointer"}} onClick={handleRemoveWish}/>
        </div>
      </div>
      </Link>
      <ToastContainer />
    </div>
  )
}
