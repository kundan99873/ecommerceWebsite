import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {

  const navigate = useNavigate();

  const [text , setText] = useState({
    email : "",
    password : ""
  });

  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    setText({...text, [event.target.name] : event.target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return 
    }
    await axios.post("/auth/login",text).then(res => {
      // console.log(res.data.success)
      // console.log(res.data.token)
      if(res.data.success === true){
        localStorage.setItem("token", res.data.token);
        toast.success("Login Successfull...", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        navigate("/");
      }
      else{
        toast.warn(res.data.error , {
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
    })
  }

  function validateForm() {
    let errors = {};
    if (!text.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(text.email)) {
      errors.email = 'Invalid email address';
    }
    if (!text.password) {
      errors.password = 'Password is required';
    } else if (text.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  return (
    <div>
      <Navbar />
      <div className="mx-3 my-5 ">
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center d-flex justify-content-center py-5">
        <div className="col">
          <div className="card  shadow p-3 mb-5 bg-white rounded">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Login</h4>
            </div>
            <div className="card-body">
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <input type="email" name = "email" value={text.email} onChange={handleChange} className="form-control" placeholder="email" />   
                    {errors.email && <span style={{color : 'red'}}>{errors.email}</span>}
                </div>
                <div className="mb-2">
                    <input type="password" name = "password" value={text.password} onChange={handleChange} className="form-control" placeholder="password" />   
                    {errors.password && <span style={{color : 'red'}}>{errors.password}</span>}
                </div>
       
                <button type="submit" className="btn btn-outline-success">LOGIN</button>
            </form>
            <div className='my-2' >
              <a href="/" style={{textDecoration : "none"}}>forget password</a><br />
              Do not have account !<Link to= "/register" style={{textDecoration : "none"}}> Create </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ToastContainer />
    </div>
  )
}
