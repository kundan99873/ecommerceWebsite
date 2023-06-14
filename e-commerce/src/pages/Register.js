import axios from "axios";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {

  const [text , setText] = useState({
    email : "",
    password : "",
    name : "",
    confirmPassword : ""
  });

  const [errors, setErrors] = useState({});


  const handleChange = (event) => {
    setText({...text, [event.target.name] : event.target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return 
    }
    await axios.post('/auth/register', text).then(res => {
      toast.success(res.data, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    })
  }

  function validateForm() {
    let errors = {};
    if (!text.name) {
      errors.name = 'Name is required';
    }
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
    if (!text.confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (text.confirmPassword !== text.password) {
      errors.confirmPassword = 'Passwords do not match';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  return (
    <div >
      <Navbar />
    <div className="mx-3 my-5 "style={{backgroundImage : "https://source.unsplash.com/random/1350x500?mobile"}}>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center d-flex justify-content-center py-5">
        <div className="col">
          <div className="card  shadow p-3 mb-5 bg-white rounded">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Create an account</h4>
            </div>
            <div className="card-body">
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <input type="text" className="form-control" placeholder="name" name = "name" value={text.name} onChange={handleChange} />   
                    {errors.name && <span style={{color : 'red'}}>{errors.name}</span>}
                </div>
                <div className="mb-2">
                    <input type="email" className="form-control" placeholder="email" name = "email" value={text.email} onChange={handleChange} />   
                    {errors.email && <span style={{color : 'red'}}>{errors.email}</span>}
                </div>
                <div className="mb-2">
                    <input type="password" className="form-control" placeholder="password" name = "password" value={text.password} onChange={handleChange} />   
                    {errors.password && <span style={{color : 'red'}}>{errors.password}</span>}
                </div>
                <div className="mb-2">
                    <input type="password" className="form-control" placeholder="confirm password" name = "confirmPassword" value={text.confirmPassword} onChange={handleChange} />   
                    {errors.confirmPassword && <span style={{color : 'red'}}>{errors.confirmPassword}</span>}
                </div>
                <button type="submit" className="btn btn-outline-success">REGISTER</button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ToastContainer />
    </div>
  );
}
