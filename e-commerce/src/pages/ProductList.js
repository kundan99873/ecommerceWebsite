import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'

export default function ProductList() {

  const [sort, setSort] = useState("new");
  const [text, setText] = useState({
    name : ""
  })
  const handleSort = (event) => {
    setSort(event.target.value)
  }

  const handleChange = (event) => {
    setText({...text, [event.target.name] : event.target.value})
  }

  return (
    <div>
      <Announcement />
      <Navbar />
      <nav>
        <div className="nav nav-tabs my-2" id="nav-tab" role="tablist">
          <button className="nav-link active" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all" type="button" role="tab" aria-controls="nav-all" aria-selected="true"><h5>All Product</h5></button>
          <button className="nav-link" id="nav-mobile-tab" data-bs-toggle="tab" data-bs-target="#nav-mobile" type="button" role="tab" aria-controls="nav-mobile" aria-selected="false"><h5>Mobile</h5></button>
          <button className="nav-link" id="nav-laptop-tab" data-bs-toggle="tab" data-bs-target="#nav-laptop" type="button" role="tab" aria-controls="nav-laptop" aria-selected="false"><h5>Laptop</h5></button>
          <button className="nav-link" id="nav-cloth-tab" data-bs-toggle="tab" data-bs-target="#nav-cloth" type="button" role="tab" aria-controls="nav-cloth" aria-selected="false"><h5>Cloth</h5></button>
          <button className="nav-link" id="nav-shoe-tab" data-bs-toggle="tab" data-bs-target="#nav-shoe" type="button" role="tab" aria-controls="nav-shoe" aria-selected="false"><h5>Shoes</h5></button>
          <button className="nav-link" id="nav-sport-tab" data-bs-toggle="tab" data-bs-target="#nav-sport" type="button" role="tab" aria-controls="nav-sport" aria-selected="false"><h5>Sports</h5></button>
          <button className="nav-link" id="nav-bag-tab" data-bs-toggle="tab" data-bs-target="#nav-bag" type="button" role="tab" aria-controls="nav-bag" aria-selected="false"><h5>Bag</h5></button>
          
        </div>
      </nav>
        
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
      <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Search Product..." aria-label="Username" value={text.name} name = "name" onChange={handleChange} aria-describedby="basic-addon1" />
</div>
      </div>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab" tabIndex="0"><Products sort={sort} filter = {text.name} /></div>
        <div className="tab-pane fade" id="nav-mobile" role="tabpanel" aria-labelledby="nav-mobile-tab" tabIndex="0"><Products cat = "Mobile" sort={sort} filter = {text.name} /></div>
        <div className="tab-pane fade" id="nav-laptop" role="tabpanel" aria-labelledby="nav-laptop-tab" tabIndex="0"><Products cat = "Laptop" sort={sort} filter = {text.name} /></div>
        <div className="tab-pane fade" id="nav-cloth" role="tabpanel" aria-labelledby="nav-cloth-tab" tabIndex="0"><Products cat = "Cloth" sort={sort} filter = {text.name} /></div>
        <div className="tab-pane fade" id="nav-shoe" role="tabpanel" aria-labelledby="nav-shoe-tab" tabIndex="0"><Products cat = "Shoes" sort={sort} filter = {text.name} /></div>
        <div className="tab-pane fade" id="nav-sport" role="tabpanel" aria-labelledby="nav-sport-tab" tabIndex="0"><Products cat = "Sports" sort={sort} filter = {text.name} /></div>
        <div className="tab-pane fade" id="nav-bag" role="tabpanel" aria-labelledby="nav-bag-tab" tabIndex="0"><Products cat = "Bag" sort={sort} filter = {text.name} /></div>
      </div>
      
      <Footer />
    </div>
  )
}


