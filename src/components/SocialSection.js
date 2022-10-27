import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter, faSlack } from '@fortawesome/free-solid-svg-icons'
import {  faCoffee } from '@fortawesome/free-solid-svg-icons'



function SocialSection() {
  return (
    <div className='social-section'>
      <div className='container'>
        <div className='social-content'>
          <div className='social-icons'>
            <div className='slack-icon'>
              <div className='slack-inner-icon'>
                <image className="vector-icon"src="../static/twitter-icon.png"/>
              </div>
            </div>
            {/* <div className='twitter-icon'>
              <div className="twitter-inner-icon">
                 <FontAwesomeIcon icon="fa-brands fa-twitter" />              
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
export default SocialSection
