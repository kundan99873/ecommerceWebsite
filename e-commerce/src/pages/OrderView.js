import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import OrderItem from '../components/OrderItem';

export default function OrderView() {
    const location = useLocation();
    const orderId = location.pathname.split("/")[2];

    const [order, setOrder] = useState([])
    const [orderDetail, setOrderDetail] = useState([])
    const getOrderDetail = async () => {
        await axios.get(`/order/getOrder/${orderId}`,{
            headers : {
              "token" : localStorage.getItem("token")
            }
          }).then(res => {
            // console.log(res.data.products);
            setOrder(res.data.products)
            setOrderDetail(res.data)
          }) 
        }
        useEffect(() => {
          getOrderDetail()
        },[])
        // console.log(order)
    
  return (
    <div>
        <Navbar />
        <div className="card" style={{width : "90vw", textAlign : "left", margin : "auto", marginTop : "30px", padding : "30px"}}>
      <h5>Order Id : {orderDetail._id}</h5>
      <h5>Name : {orderDetail.name}</h5>
      <h5>Address : {orderDetail.address}</h5>
      <h5>Status : {orderDetail.status}</h5>
      {/* <h5>Order time : {orderDetail.createdAt.split("T")[1].split(".")[0] + " "+ orderDetail.createdAt.split("T")[0] }</h5> */}
        </div>
      <h3>Ordered Product</h3>
      <div style={{textAlign : "center"}}>
  <div style={{margin : "auto"}}>
    <div className= "row row-cols-sm-2 row-cols-md-3 row-cols-xl-4 mb-3 text-center d-flex justify-content-center my-2 mx-2 my-auto">
            {order.map(item => {
                return <OrderItem products = {item.id} quantity = {item.pQuantity} />
            })}
        </div>
      </div>
      </div>
      <h1>Total Price : {orderDetail.amount}</h1>
    </div>
  )
}
