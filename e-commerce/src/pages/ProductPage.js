import React, { useEffect, useState } from 'react'
import "./ProductPage.css"
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../state/action'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Products from '../components/Products'


export default function ProductPage() {
  
  const [productDetail, setProductDetail] = useState([])
  const [nItem, setNItem] = useState(1)
  
  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const myCart = useSelector(state => state.cartItem)
  // console.log(myCart.products)
  let cartProduct = myCart.products;
  // console.log(cartProduct)

  const getProductDetail = async () => {
    await axios.get(`/product/find/${productId}`).then(res => {
      setProductDetail(res.data)
    })
  }
  useEffect(() => {
    getProductDetail()
  },[])

  const handleSubProduct = () => {
    nItem > 1 && setNItem(nItem - 1)
  }

  const handleAddProduct = () => {
    nItem < 6 && setNItem(nItem + 1)
  }

  const postData = {
    productIds : productId,
    quantity : nItem
  }

  
  const handleCart = () => {
    if(!localStorage.getItem("token")){
      navigate("/login")
    }
      let cartItem = false
      cartProduct.map(item => {
        if(item.id === productDetail._id){
          cartItem = true
        }
      })
      if(cartItem){
        toast.warn('Already item is added to cart', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }else{
        
        dispatch(addToCart(productDetail._id, nItem, productDetail.price * nItem));
      }
    }
    
    // const handleWishlist = () => {
      // const products = {
      //   product : productDetail._id
      // }
      // axios.post("/wish/addWish",products,{
      //   headers : {
      //     "token" : localStorage.getItem("token")
      //   }
      // }).then(res => {
      //   console.log(res.data)
      // })
      // toast.warn('Added to Wishlist Successfully', {
      //   position: "top-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "dark",
      // });
  

  const [wish, setWish] = useState([]);

  const productWish = async () => {
    await axios.get("/wish/getWish",{
      headers : {
        "token" : localStorage.getItem("token")
      }
    }).then(res => {
      // console.log(res.data)
      setWish(res.data);
    })
  }

  let added = false;
  if(localStorage.getItem("token")){
    wish.map(item => {
      if(item.product === productDetail._id){
        added = true
      }
    })
  }

  const handleAddWish = async () => {
    const products = {
      product : productDetail._id
    }
    if(!localStorage.getItem("token")){
      return navigate("/login")
    }
    await axios.post("/wish/addWish",products,{
      headers : {
        "token" : localStorage.getItem("token")
      }
    }).then(res => {
      // console.log(res.data)
    })
    toast.warn('Added to Wishlist Successfully', {
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
  
  const handleRemoveWish = async () => {
    if(!localStorage.getItem("token")){
      navigate("/login")
    }
    const products = {
      product : productDetail._id
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
    productWish()
  },[handleAddWish, handleRemoveWish])

  return (
    <>
    <Announcement />
    <Navbar />
    <div className='d-flex px-2 py-4' id='container'>
      <div style={{flex : 1}}>
        <img src={productDetail.image} alt="" style={{objectFit : "contain"}}/>
      </div>
      <div style={{flex : 1,textAlign : "left"}} className = "px-5" id='detail'>
        <div className='d-flex justify-content-between'>
          <h1>{productDetail.title}</h1>
          {added ? <i className="fa-solid fa-heart fa-2xl" style={{color : "#ff0000", marginTop : "20px", cursor : "pointer"}} onClick={handleRemoveWish}/>
          : <i className="fa-regular fa-heart fa-2xl" id='blank' style={{color : "#000000", marginTop : "20px", cursor : "pointer"}} onClick={handleAddWish} />}
        </div>
        <p className='my-3'>{productDetail.desc}</p>
        <span id='price'>Rs {productDetail.price}</span>
        <div>  
          <button onClick={handleSubProduct} id="subCartN">-</button>
          <span style={{fontWeight : "bold",border : "2px solid black", borderRadius : "7px", padding : "0 5px"}}>{nItem}</span>
          <button onClick={handleAddProduct} id="addCartN" >+</button>
        </div>
          <div className="btn btn-outline-success my-2 " id='btnCart' onClick={handleCart}>Add to cart</div>
      </div>

    </div>
    {/* <h1>Related Products</h1>
    
    <Products cat = {`${productDetail.category}`} sort = {3}/> */}
    <Footer />
    <ToastContainer />
    </>
  )
}

  // const getCartItem = async () =>{
  //   await axios.post("/cart/addCart", postData, {
  //     headers : {
  //       token : localStorage.getItem("token")
  //     }
  //   }).then(res => {
  //     // console.log(res.data)
  //     setCartProduct(res.data)
  //   })
  // }
  // useEffect(() =>{
  //   getCartItem();
  // },[]) 


    // console.log(cartProduct)
    // console.log(cartProduct.quantity)
  
  
    // const handleCart = () => {
    //   var bool = false
    //   productCart.map((item) => {
    //     if(item === productId){
    //       bool = true;
    //       return
    //     }
    //   })
    //   if(bool){
    //     toast.warn('Already item is added to cart', {
    //       position: "top-center",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "dark",
    //     });
    //   }
    //   else{
  
    //     dispatch(addToCart(productDetail._id,productDetail.price));
    //       toast.warn('Added to Cart Successfully...', {
    //       position: "top-center",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "dark",
    //     });
    //   }
    // }