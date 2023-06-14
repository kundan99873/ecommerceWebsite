import React from 'react'

export default function Announcement() {
  return (
    <div style={{
        height : "30px",
        backgroundColor : "teal",
        color : "white",
        textAlign : "center",
        fontWeight : "bold"
    }}>
      <marquee >Super Deal! Free Shipping on Order Over Rs. 600</marquee>      
    </div>
  )
}
