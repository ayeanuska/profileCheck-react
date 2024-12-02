import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import ProfileViewer from "./ProfileViewer";

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
    name: "Michael Smith",
    title: "Graphic Designer",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    name: "Emily Johnson",
    title: "Data Scientist",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    name: "David Williams",
    title: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
  },
  {
    name: "Olivia Brown",
    title: "HR Manager",
    image: "https://randomuser.me/api/portraits/women/61.jpg",
  },
  {
    name: "James Davis",
    title: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
  },
  {
    name: "Sophia Miller",
    title: "UX Designer",
    image: "https://randomuser.me/api/portraits/women/62.jpg",
  },
  {
    name: "Lucas Wilson",
    title: "Marketing Director",
    image: "https://randomuser.me/api/portraits/men/63.jpg",
  },
  {
    name: "Isabella Moore",
    title: "Content Creator",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
  },
];

const galleryStyle = {
  display: "flex",
  gap: "15px",
  width: "100%",
  flexWrap: "wrap",
};

const showProfile = false;

const ProfileGallery = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState({
    name: "",
    title: "",
    image: "",
  });

  return (
    <div>
      <h1> Profile Gallery </h1>

      <div style={galleryStyle}>
        {users.map((item, index) => (
          <ProfileCard
            key={index}
            item={item}
            openSesame={setShowProfile}
            updateProfile={setSelectedProfile}
          />
        ))}
      </div>
      {showProfile ? (
        <ProfileViewer
          userData={{ ...selectedProfile }}
          // name="John Doe"
          // title="Software Engineer"
          // image="https://randomuser.me/api/portraits/men/59.jpg"
          closeSesame={setShowProfile}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ProfileGallery;
