import React from "react";
import ProfileCard from "./ProfileCard";
import { ProfileViewer } from "./ProfileViewer";

const users = [
  {
    name: "John Doe",
    title: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/59.jpg",
  },
  {
    name: "Jane Doe",
    title: "Market Specialist",
    image: "https://randomuser.me/api/portraits/women/59.jpg",
  },
  {
    name: "John Doe",
    title: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/59.jpg",
  },
  {
    name: "Jane Doe",
    title: "Market Specialist",
    image: "https://randomuser.me/api/portraits/women/59.jpg",
  },
  {
    name: "John Doe",
    title: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/59.jpg",
  },
  {
    name: "Jane Doe",
    title: "Market Specialist",
    image: "https://randomuser.me/api/portraits/women/59.jpg",
  },
];

const galleryStyle = {
  display: "flex",
  gap: "15px",
  width: "100vw",
  flexWrap: "wrap",
};

const ProfileGallery = () => {
  return (
    <div>
      <h1> Profile Gallery </h1>

      <div style={galleryStyle}>
        {users.map((item, index) => (
          <ProfileCard key={index} item={item} />
        ))}{" "}
      </div>

      <ProfileViewer />
    </div>
  );
};

export default ProfileGallery;
