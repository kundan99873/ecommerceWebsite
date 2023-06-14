import React from 'react'
import "./productCard.css"
import { Link } from 'react-router-dom';

export default function Product(props) {
    const {item} = props;
  return (
    <div>
      <Link id='product' style={{color : 'black', textDecoration : "none"}} to={`/product/${item._id}`}>
      <div className="card" style={{ height : "320px"}}>
        <div style={{height : "70%"}}>
        <img src={item.image} className="card-img-top" alt="..." style={{height : "80%",marginTop : "10px", borderRadius : "10px", objectFit : "contain"}}/>
        </div>
        <div className="card-body">
          <h5 className="card-title" style={{margin : '-5px'}}>{item.title}</h5>
          <p style={{margin : '-5px'}}>{item.category}</p>
          <h2 style={{margin : '-5px'}}>Rs {item.price}</h2>
        </div>
      </div>
      </Link>
    </div>
  )
}
