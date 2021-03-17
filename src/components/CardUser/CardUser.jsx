import React from 'react';
import './CardUser.css';


const CardUser = ({userData}) => {
  return(
    <div className="card-user">
      <h1 className="card-user__title">Profile</h1>
      <img src={userData.imageUrl} alt={userData.name} className="card-user__img"/>
      <p className="card-user__name">{userData.name}</p>
      <p className="card-user__email">{userData.email}</p>
    </div>
  );
}

export default CardUser;
