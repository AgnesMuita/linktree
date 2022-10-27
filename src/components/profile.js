import React from 'react';
import profile from "../static/blank-profile-picture-png.webp"

function Profile() {
  return (
    <div class="profile-img">
      <img src={profile} alt=""/>
    </div>
  )
}

export default Profile