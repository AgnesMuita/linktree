import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/free-solid-svg-icons' // <-- import styles to be used


export default function SocialSection() {
  return (
    <div className='social-section'>
      <div className='container'>
        <div className='content'>
          <div className='social-icons'>
            <div className='slack-icon'>
              <div className='slack-inner-icon'>
                <FontAwesomeIcon icon={solid('slack')} />
              </div>
            </div>
            <div className='twitter-icon'>
              <div class="twitter-inner-icon">
                <FontAwesomeIcon icon={solid('twitter')} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
