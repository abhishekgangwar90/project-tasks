import React from 'react';
import PROFILE_PIC from '../../assets/profilePic.jpg';

import './userProfile.scss';

function UserProfilePic() {
  return <img alt="profile" className="user-profile" src={PROFILE_PIC} />;
}

export default UserProfilePic;
