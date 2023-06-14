import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import axios from 'axios'
import { Link } from 'react-router-dom';
import imag from "../image/images.png"

export default function OrderPage() {

  const [order, setOrder] = useState([]);
  const getOrder = async () =>{
    await axios.get("/order/getOrder",{
      headers : {
        "token" : localStorage.getItem("token")
      }
    }).then(res => {
      // console.log(res.data);
      setOrder(res.data)
    }) 
  }
  useEffect(() => {
    getOrder()
  },[])
  // console.log(order)
  return (
    <div>
      <Navbar />
      <div className="container">
        {order.map(item => {
          return(
            <Link style={{color : 'black', textDecoration : "none"}} to={`/order/${item._id}`}>
            <div className="card my-2 " key={order._id} style={{cursor : "pointer", textAlign : "left"}}>
              <div className="card-body d-flex">
                <img src={imag} alt="..." style={{width : "170px", height : "200px", objectFit : "cover"}}/>
                <div className='mx-4'>

                <h5 className="card-title">Order Detail</h5>
                <p className="card-text">Order id : {item._id}</p>
                <h4 className="card-text">Amount : {item.amount}</h4>
                <p className="card-text">Time : {item.createdAt.split("T")[1].split(".")[0] + " "+ item.createdAt.split("T")[0] }</p>
                <p className="card-text">Status : {item.status}</p>
                </div>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
            </Link>
          )
        })}  
      
      </div>
      <Footer />
    </div>
  )
}

    
    // const orderProduct = useSelector(state => state.order)
    // let op = orderProduct.user;
    // let pot = [];
    // op.map((item) => { 
    //   return pot = item
    // })
  
    // let opt = []
    // let ppt = []
    // let po = orderProduct.products;
      
    // po.map((item) => { 
    //   return opt = item.products;
    // })
    // po.map((item) => { 
    //   return ppt = item.total;
    // })
  
  
    // const text = {
    //   name : pot.name,
    //   address : pot.address + ", "+ pot.city+", " + pot.state + ", "+ pot.pin,
    //   products : opt,
    //   amount : ppt
    // }
  
    // const handleClick = async () => {
    //   await axios.post("/order/neworder",text,{
    //     headers : {
    //       "token" : localStorage.getItem("token")
    //     }
    //   }).then(res => {
    //     console.log(res.data);
    //   })
    // }