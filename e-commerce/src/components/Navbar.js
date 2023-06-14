import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import "./Search.css"


export default function Navbar() {

  const myCart = useSelector(state => state.cartItem)

  const navigate = useNavigate();
  const location = useLocation();
  const [loc, setLoc] = useState("");
  useEffect(() => {
    // console.log(location.pathname)
    setLoc(location.pathname)

  },[])

  const [user, setUser] = useState({
    name : "",
    email : ""
  });

  const [find, setFind] = useState("");
  const [product, setProduct] = useState([]);
  const getUserDetail = async () => {
    await axios.get("/auth/userDetail", {
      headers : {
        "token" : localStorage.getItem("token")
      }
    }).then(res => {
      setUser({
        name : res.data.name,
        email : res.data.email
      })
    })
  }
  
  const getProduct = async () => {
    await axios.get("/product").then(res => {
      setProduct(res.data)
    })
  }
  useEffect(() => {
    getProduct();

    getUserDetail();
  }, [])

  const handleLogout = () =>{
    localStorage.removeItem("token");
    navigate("/login")
  }
  const handleChange = (event) => {
    setFind(event.target.value);
  }

  const handleProfile = () => {
    navigate("/profile")
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">ECOMMERCE</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={loc === "/" ? "nav-link active" : "nav-link"} aria-current="page" to = "/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={loc === "/products" ? "nav-link active" : "nav-link"} to = "/products">Product</Link>
        </li>     
        <li className="nav-item">
          {localStorage.getItem("token") ? <Link className={loc === "/myorder" ? "nav-link active" : "nav-link"} to = "/myorder">Order</Link> : ""}
        </li>
        
      </ul>
      {localStorage.getItem("token") ?<div className='d-flex'>
      <Link className="nav-link active" aria-current="page" to="/cart"><i className="fa-solid fa-lg fa-cart-shopping">{<span className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-danger" style={{fontSize : "10px"}}>
        {myCart.quantity === 0 ? "" : myCart.quantity }
        </span>}</i></Link>
        <i className="fa-solid fa-lg fa-user mx-4" onClick={handleProfile} style={{cursor : "pointer", marginTop : "10px"}}></i></div> :
        <div><button type="button" className="btn btn-outline-success mx-2" data-bs-dismiss="modal" onClick={() => navigate("/login")}>Login</button>
        <button type="button" className="btn btn-outline-success mx-2" data-bs-dismiss="modal" onClick={() => navigate("/register")}>Register</button></div>}

        <div className="btn-group">
</div>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel" >User Detail</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       
        <h5><div style={{textAlign : "left", }}>Name : {user.name} <br />
        Email : {user.email} <br />
        </div></h5>
        <button type="button" onClick={handleLogout} className="btn btn-outline-secondary">Logout</button>
        
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
</nav>
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid d-flex justify-content-between">
    <Link className="navbar-brand" to="/">ECOMMERCE</Link>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <form className="d-flex" role="search" >
        <div className='dropdown-center'>
        <input className="form-control dropdown-toggle" type="search" placeholder="Search" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false" value={find} aria-label="Search" onChange={handleChange}/>
        <ul className="dropdown-menu">
          {product.filter((item) => {
            const searchItem = find.toLowerCase();
            const productname = item.title.toLowerCase();
            return searchItem && productname.startsWith(searchItem)
          }).map((item) => {
            return <li><Link className="dropdown-item" to = {`/product/${item._id}`}>{item.title}</Link></li>
          })}
        </ul>
        </div>
      </form>  
      </ul>
        <Link className="nav-link active" aria-current="page" to="/cart"><i className="fa-solid fa-lg fa-cart-shopping">{<span className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-danger" style={{fontSize : "10px"}}>
        {0}
  </span>}</i></Link>
  {localStorage.getItem("token") ?
        <i className="fa-solid fa-lg fa-user" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{cursor : "pointer", marginLeft : "20px"}}></i> :
        <div><button type="button" className="btn btn-outline-success mx-2" data-bs-dismiss="modal" onClick={() => navigate("/login")}>Login</button>
        <button type="button" className="btn btn-outline-success mx-2" data-bs-dismiss="modal" onClick={() => navigate("/register")}>Register</button></div>}

        <div className="btn-group">
</div>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel" >User Detail</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       
        <h5><div style={{textAlign : "left", }}>Name : {user.name} <br />
        Email : {user.email} <br />
        </div></h5>
        <button type="button" onClick={handleLogout} className="btn btn-outline-secondary">Logout</button>
        
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
      
    </div>

</nav> */}
    </div>
  )
}
