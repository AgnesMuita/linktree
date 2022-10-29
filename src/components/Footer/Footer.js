import React from 'react'
import './footer.css'
import i4g from "../../static/i4g.png"
import zuri from "../../static/zuri.png"

function Footer () {
  return (
    <div className='Footer'>
      <div className='footer-section'>
        <div className='zuri'>
          <img className='zuri-img' src={zuri}/>
        </div>
        <div className='footer-text'>
          <p>HNG internship 9 Frontend Task</p>
        </div>
        <img className='i4g-image' src={i4g}/>
      </div>
    </div>
  )
}

export default Footer