import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "../pages/Carts.css"
import {useDispatch, useSelector} from "react-redux";
import { removeFromCart, updateCart, updateSubCart } from '../state/action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Cart(props) {
    const [getProduct , setProduct] = useState([])

    const dispatch = useDispatch();
    
    const getCartProduct = async () => {
      await axios.get(`/product/find/${props.product.id}`).then((res) => {
        setProduct(res.data)
      })
    }
    const myCart = useSelector(state => state.cartItem)
    // console.log(myCart.products)
    // console.log(myCart)
    
    useEffect(() => {
      getCartProduct();
    },[])
    
    // const handleAdd = () => {
    //   console.log(getProduct._id)
    // }
    
    const handleAdd = (id) => {
      // console.log(id)
      if(props.product.pQuantity < 6){
        dispatch(updateCart(id, getProduct.price))
      }
      // document.getElementById("count") = getProduct.pQuantity;
      // console.log(myCart.products)
      // console.log(myCart)
    }

    const handleSub = (id) => {
      if(props.product.pQuantity > 1){
        dispatch(updateSubCart(id, getProduct.price))
      }
      // console.log(myCart.products)
      // console.log(myCart)
    }

    const handleDelete = () => {
      // console.log(myCart.products.indexOf(getProduct._id))
      dispatch(removeFromCart(getProduct._id, getProduct.price, props.product.pQuantity));
      toast.warn('item deleted from the cart', {
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
  return (
    <div className='card py-1 px-1 mx-2 my-2'>
    <div id = "cardImage">
      <img src={getProduct.image} alt="loading..." id='imgStyle' />
      <div id='productDetail'>
      
        <p><b>Product : </b></p><h3>{getProduct.title}</h3>
        <p><b>ID : </b>{getProduct._id}</p>
        <div>
          <button onClick={() => handleSub(getProduct._id)}>-</button>
          <span id='count'>{props.product.pQuantity}</span>
          <button onClick={() => handleAdd(getProduct._id)}>+</button>
        </div>
        <div>
            <b style={{fontSize : "30px"}}>Rs {getProduct.price}</b>
        </div>
      </div>  
      <i className = "fa-solid fa-trash mx-4 my-4" style={{cursor : "pointer"}} onClick = {handleDelete}></i>                  
    </div>
    <ToastContainer />
  </div> 
  )
}