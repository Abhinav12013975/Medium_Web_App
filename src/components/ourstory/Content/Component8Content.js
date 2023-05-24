import React from 'react'
import './Component8Content.css'
const Component8Content = () => {
  return (
    <div className="Component8Content">
    <div className="heading"><h2>Learn more <br></br> about us.Or <br></br>join us.</h2></div>
    <div>
        <div id="content_of_id">
        <h3>The medium blog</h3>
        <p>Visit our company blog for the latest news,product update , tips and tricks</p>
        <a href="https://blog.medium.com/" target="_blank" rel="noreferrer" ><button>Read our blog</button></a>
        </div>

        <div id="content_of_box2">
            <h3>Work at medium </h3>
            <p>Our team is home to engineer,journlist, artists and creative of all stripes</p>
           <a href="https://medium.com/jobs-at-medium/work-at-medium-959d1a85284e" target="_blank" rel="noreferrer"><button>View open position</button></a> 
        </div>
    </div>

    </div>
  )
}

export default Component8Content