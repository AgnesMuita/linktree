import React from 'react';
import './ProfileSection.css'
import profile from "../../static/profile-img.jpg"

function Profile() {
  return (
    <div className='profile-section'>
        <img className="profile-img" src={profile} alt="" id="profile_img"/>
        <h1 className="twitter-frame" id="twitter">Aggie Muita</h1>
        <h1 className="slack-frame" id="slack">AggieMuita</h1>
    </div>
  )
}

export default Profile