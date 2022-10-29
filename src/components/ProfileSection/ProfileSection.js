import React from 'react';
import './ProfileSection.css'
import profile from "../../static/profile-img.jpg"

function Profile() {
  return (
    <div className='profile-section'>
        <img className="profile-img" src={profile} alt=""/>
        <h1 className="twitter-frame">Aggie Muita</h1>
        {/* <h1 className="twitter-frame"><p id="slack">Agnes Muita</p></h1> */}
    </div>
  )
}

export default Profile