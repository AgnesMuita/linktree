import React from 'react'
import i4g from "../static/i4g.png"

function Footer () {
  return (
    <div className='Footer'>
      <div className='footer-container'>
        <div className='footer-content'>
          <div className='zuri-internship-logo'>
            <div className='vector1'></div>
            <div className='vector2'></div>
          </div>
          <div className='footer-text'>   
            <p>HNG internship 9 Frontend Task</p>
          </div>
          <img className='i4g-image' src={i4g}/>
        </div>
      </div>
    </div>
  )
}

export default Footer