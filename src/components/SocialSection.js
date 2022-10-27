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
                 <FontAwesomeIcon icon={faCoffee} className="twitter-inner-icon" />              
              </div>
            </div>
            <div className='twitter-icon'>
                 <FontAwesomeIcon icon={faCoffee} className="twitter-inner-icon" />              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SocialSection
