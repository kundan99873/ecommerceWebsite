import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data'
import "./Categories.css"


export default function Category() {
    
  return (
    <>
    <h1>Categories</h1>
   
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-3 text-center mx-2" >
      {data.categories.map((item) => {
        return <div className="col" key={item.id}>
           <Link to={`/products/${item.title}`} style = {{color : "black", textDecoration : "none"}}>
            <div className="card mb-4 rounded-3 shadow-sm" style={{backgroundImage : `url(${item.img})`, 
                    cursor:"pointer", backgroundRepeat : "no-repeat",objectFit : "cover",display : "flex",
                    justifyContent:"center"}}>
            <div className="card-header py-3" style={{border : "none"}}>
            <h4 className="my-0 fw-normal" >Category</h4>
             </div>
          <div className="card-body">
            <h1 className="card-title ">{item.title}</h1>
            
            <button type="button" className="w-60 btn btn-lg btn-outline-dark">Shop Now</button>
          </div>
          <div className="card-footer py-3" style={{border : "none"}}>
            <h4 className="my-0 fw-normal"></h4>
          </div>
        </div>
          </Link>
      </div>
      })}
    </div>
  </>    
  )
}
    
    
//         <div className='d-flex flex-wrap'>
//             {
//                 data.categories.map((item) => {
//                     return <div key={item.id} style={{color : "white"}} >
//                         <div className="card mx-2 my-2"  style={{backgroundImage : `url(${item.img})`,height : "200px", 
//                         cursor:"pointer", backgroundRepeat : "no-repeat",objectFit : "cover",width:"18rem",display : "flex",
//                         justifyContent:"center"
//                       }}>
//                         <div>
    
//                         <h3 >{item.title}</h3>
//                         <div className="btn btn-primary" style={{fontWeight : "bold"}}>Shop Now</div>
//                         </div>
                        
//                   </div>
//                         </div>
//                 })
//               }
//             </div> 
// // {/* <h3 style={{alignItems : "center"}}>{item.title}</h3> */}
// //     {/* <img src={item.img} className="card-img-top " alt="..."/> */}
// //     {/* <img src="https://source.unsplash.com/random/1350x500?ecommerce"  className="d-block w-100 h-60" alt="..." style={{objectFit : "cover"}} /> */}
// // {/* <div  style={{backgroundImage : `url(${item.img})`}}>

// //   {item.title}
// // </div> */}