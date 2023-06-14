import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <footer className="bd-footer py-2  bg-light">
  <div className="container py-3">
    <div className="row">
      <div className="col-lg-2">
        <Link className="d-inline-flex mb-2 link-dark text-decoration-none" to="/" aria-label="Bootstrap">
          <span className="fs-5">ECOMMERCE</span>
        </Link><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem?
      </div>
      <div className=" col-lg-2 offset-lg-1 mb-3">
        <h5>Links</h5>
        <ul className="list-unstyled">
          <li className="mb-2"><Link to="/">Home</Link></li>
          <li className="mb-2"><Link to="/products">Products</Link></li>
          {/* <li className="mb-2"><Link to="/docs/5.0/examples/">Examples</Link></li> */}
          
        </ul>
      </div>
      <div className=" col-lg-3 mb-3">
        <h5>Category</h5>
        <div className="row">
          <div className=" col-lg-5 mb-3">
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/products/Mobile">Mobile</Link></li>
              <li className="mb-2"><Link to="/products/Laptop">Laptop</Link></li>
              <li className="mb-2"><Link to="/products/Bag">Bag</Link></li>
              
            </ul>
          </div>
          <div className=" col-lg-5 mb-3">
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/products/Shoes">Shoes</Link></li>
              <li className="mb-2"><Link to="/products/Sports">Sports</Link></li>
              <li className="mb-2"><Link to="/products/Clothes">Clothes</Link></li>
              
            </ul>
          </div>
        </div>
      </div>
      <div className=" col-lg-2 offset-lg-1 ">
        <h5>Contact us</h5>
        <ul className="list-unstyled " style={{textAlign : "left"}}>
          <li className="mb-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </li>
          <li className="mb-1"><i className="fa-solid fa-phone" />&nbsp; 8779253882</li>
          <li className="mb-1"><i className="fa-solid fa-envelope" />&nbsp; kundan@gmail.com</li>
        </ul>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}
