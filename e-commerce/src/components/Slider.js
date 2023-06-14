import React from 'react'
import img from "../image/img1.jpg"
import img1 from "../image/img2.jpg"
import { useNavigate } from 'react-router-dom'


export default function Slider() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/products")
  }
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img}  className="d-block w-100 h-60" alt="..." style={{objectFit : "cover"}} />
      <div className="carousel-caption d-none d-md-block">
        <h3>Mobile Accessories</h3>
        <p>The sale of the season that have been arived</p>
        <div className="btn btn-outline-dark" style={{fontWeight : "bold"}} onClick={handleClick}>Shop Now</div>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/1350x500?mobile" className="d-block w-100 h-60" alt="..." style={{objectFit : "cover"}} />
      <div className="carousel-caption d-none d-md-block">
        <h5>Laptop</h5>
        <p>the Sale is going on !! Shop Now</p>
        <div className="btn btn-outline-dark" style={{fontWeight : "bold"}} onClick={handleClick}>Shop Now</div>
      </div>
    </div>
    <div className="carousel-item h-60">
      <img src={"https://source.unsplash.com/random/1350x500?laptop"} className="d-block w-100 h-60" alt="..." style={{objectFit : "cover"}} />
      <div className="carousel-caption d-none d-md-block">
        <h5>Shop Now</h5>
        <p>Ecommerce Website</p>
        <div className="btn btn-outline-dark" style={{fontWeight : "bold"}} onClick={handleClick}>Shop Now</div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
