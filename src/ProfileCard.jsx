import React from "react";

const ProfileCard = ({ item }) => {
  const cardStyle = {
    width: "200px",
    height: "auto",
    backgroundColor: "white",
    color: "black",
    marginTop: "10px",
    padding: "10px",
    borderRadius: "20px",
  };
  return (
    <div style={cardStyle}>
      <img src={item.image} />
      <div>{item.name}</div>
      <div>{item.tittle}</div>
      <button>View Profile</button>
    </div>
  );
};

export default ProfileCard;
