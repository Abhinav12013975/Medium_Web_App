import React from 'react'
import './Carousel.css';
const Carousel = () => {
  return (
    <div className="carousel">
   
     <div className="carousel-data">
      <div className="left-side-bar">
       <h2>Stay Curious</h2>
        <h3>Discover stories, thinking and<br></br> expertise from writers on any topic</h3>
        <div className="button-btn">
          <a href="https://medium.com/m/signin" style={{textDecoration:"none"}}><button>Start reading</button></a>  
        </div>
        </div>
     </div>
     <div className="carousel-data-animation">
         <h1>Welcome to medium</h1>
     </div>
    </div>
  )
}

export default Carousel