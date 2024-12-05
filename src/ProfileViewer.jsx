import React from "react";

const ProfileViewer = ({ userData, closeSesame }) => {
  
  return (
    <div className="viewer-style">
      <img src={userData.image} />
      <div className="userdata">
        <h2>{userData.name}</h2>
        <h5>{userData.title} </h5>
        <h5>{userData.cellPhone} </h5>
        <h5>{userData.address} </h5>{" "}
      </div>

      <button
        onClick={() => {
          closeSesame(false);
        }}
      >
        CLose
      </button>
    </div>
  );
};

export default ProfileViewer;
