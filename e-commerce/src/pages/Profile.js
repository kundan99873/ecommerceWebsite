import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Prod from './Prod';
import Cart from '../components/Cart';

export default function Profile() {

    const [user, setUser] = useState({
        name : "",
        email : ""
      });

      const navigate = useNavigate();

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

      useEffect(() => {
        getUserDetail();
        productWish();
      }, [])

      const handleLogout = () =>{
        localStorage.removeItem("token");
        navigate("/login")
      }

  return (
    <div>
      <Navbar />
      <div className="card" style={{width : "70%", margin : "auto", border : "2px solid black", borderRadius : "20px", marginTop : "30px"}}>
  <div className="card-body">
  <h5><div style={{textAlign : "left", }}>Name : {user.name} <br />
        Email : {user.email} <br />
        </div></h5>
        <button type="button" onClick={handleLogout} className="btn btn-outline-secondary">Logout</button>
        
  </div>
</div>

<h2 className='my-6'>My Wishlist</h2>

  <div style={{textAlign : "center"}}>
  <div style={{margin : "auto"}}>
    <div className= "row row-cols-sm-2 row-cols-md-3 row-cols-xl-4 mb-3 text-center d-flex justify-content-center my-2 mx-2 my-auto">
    {wish.map(item => {
      return <div key={item}>
      <Prod id = {item.product} />
    </div>
    })}
    </div></div></div>

    </div>
  )
}
