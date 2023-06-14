import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'

export default function CategoryPage() {
  const location = useLocation();
  const cat = location.pathname.split("/")[2]
  const [text, setText] = useState({
    name : ""
  });

  const [sort, setSort] = useState("new");
  const handleSort = (event) => {
    setSort(event.target.value)
  }


  const handleChange = (event) => {
    setText({...text,[event.target.name] : event.target.value})
  }

  return (
    <div>
      <Announcement />
      <Navbar />
      
        <h1>{cat}</h1>
      <div className='d-flex justify-content-end mx-3'>
        <div className='d-flex mx-1'>
          <h5 className='mx-2'>Sort By : </h5>
          <select onChange={handleSort}>
            <option value="new">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="dec">Price (dec)</option>
          </select>
        </div>
      </div>
      <div className="container my-2">
        <input class="form-control form-control-lg" type="text" placeholder="Search Products" value={text.name} name = "name" onChange = {handleChange} aria-label=".form-control-lg example" />
        
      </div>
      <Products cat = {cat} sort={sort} filter = {text.name}/>
      <Footer />
    </div>
  )
}
