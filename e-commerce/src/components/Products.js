import React, { useEffect, useState } from 'react'
import Product from './Product'
import axios from "axios"

export default function Products({cat,sort, filter}) {
  const [product,setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  },[cat])
  const getProduct = async () => {
    await axios.get(cat ? `/product?category=${cat}` : "/product").then(res => {
      setProduct(res.data)
    })
  }

  const sortedProduct = (key) => {
    if(key === "new"){
      return product;
    }else if(key === "asc"){
      return product.sort((a, b) => a.price - b.price);
    }else if(key === "dec"){
      return product.sort((a, b) => b.price - a.price);
    }else if(key === 3){
      return product.slice(0 , 3);
    }else if(key === 10){
      return product.slice(0 , 10);

    }
  }

  return (
    <div style={{textAlign : "center"}}>
      <div style={{margin : "auto"}}>
        <div className= "row row-cols-sm-2 row-cols-md-3 row-cols-xl-4 mb-3 text-center d-flex justify-content-center my-2 mx-2 my-auto">
          {filter ? product.filter((item) => {
            const searchItem = filter.toLowerCase();
            const productname = item.title.toLowerCase();
            return searchItem && productname.startsWith(searchItem)
          }).map((item) => {
            return <div className="my-2" key={item._id} >
            <Product item={item} />
            
          </div>
          }) :sort ? sortedProduct(sort).map((item) => {
            return <div className="my-2" key={item._id} >
              <Product item={item} />
            </div>
          }) : product.map((item) => {
            return <div className="my-2" key={item._id} >
              <Product item={item} />
            </div>
          })}

        </div>
      </div>
    </div>
  )
}
