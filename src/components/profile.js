import React from 'react';
import profile from "../static/blank-profile-picture-png.webp"

function Profile() {
  return (
    <div className='profile-section'>
        <img className="profile-img" src={profile} alt=""/>
        <h1 className="twitter-frame"><p id="twitter">Agnes Muita</p></h1>
        {/* <h1 className="twitter-frame"><p id="slack">Agnes Muita</p></h1> */}
    </div>
  )
}

export default Profile