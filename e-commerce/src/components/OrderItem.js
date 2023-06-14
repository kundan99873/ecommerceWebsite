import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function OrderItem(props) {

    const [item, setItem] = useState({});
    const getProduct = async () =>{
        axios.get(`/product/find/${props.products}`).then(res => {
        // console.log(res.data)
        setItem(res.data)
    })
}

    useEffect(() => {
        getProduct();
    },[])
  return (
    <div>
      <div className="card my-4" style={{ height : "320px" , }}><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{fontSize : "20px"}}>
        {props.quantity}
        </span>
        <div style={{height : "70%"}}>
        <img src={item.image} className="card-img-top" alt="..." style={{height : "80%",marginTop : "10px", borderRadius : "10px", objectFit : "contain"}}/>
        </div>
        <div className="card-body d-flex justify-content-evenly">
          <div>

          <h5 className="card-title" style={{margin : '-5px'}}>{item.title}</h5>
          <p style={{margin : '-5px'}}>{item.category}</p>
          <h2 style={{margin : '-5px'}}>Rs {item.price}</h2>
          </div>
      
        </div>
      </div>
    </div>
  )
}
