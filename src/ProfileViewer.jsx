import React from "react";

const ProfileViewer = ({ userData, closeSesame }) => {
  const Handleclose = () => {};
  return (
    <div className="viewer-style">
      <img src={userData.image} />
      <h2>{userData.name}</h2>
      <h5>{userData.title}</h5>
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
