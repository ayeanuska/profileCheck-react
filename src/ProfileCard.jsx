import React from "react";

const ProfileCard = ({ item, openSesame, updateProfile }) => {
  const OpenProfileViewer = () => {
    openSesame(true);
    updateProfile(item);
  };
  return (
    <div className="card-style">
      <img src={item.image} />
      <div>{item.name}</div>
      <div>{item.title}</div>
      <button onClick={OpenProfileViewer}>View Profile</button>
    </div>
  );
};

export default ProfileCard;
