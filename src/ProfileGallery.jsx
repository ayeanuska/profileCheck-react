import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import ProfileViewer from "./ProfileViewer";

const users = [
  {
    name: "John Doe",
    title: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/59.jpg",
    cellPhone: "+1 (555) 123-4567",
    address: "123 Elm St, Springfield, IL 62701",
  },
  {
    name: "Jane Doe",
    title: "Market Specialist",
    image: "https://randomuser.me/api/portraits/women/59.jpg",
    cellPhone: "+1 (555) 234-5678",
    address: "456 Oak Ave, Chicago, IL 60601",
  },
  {
    name: "Michael Smith",
    title: "Graphic Designer",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    cellPhone: "+1 (555) 345-6789",
    address: "789 Pine Rd, Denver, CO 80202",
  },
  {
    name: "Emily Johnson",
    title: "Data Scientist",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
    cellPhone: "+1 (555) 456-7890",
    address: "101 Maple Blvd, Austin, TX 73301",
  },
  {
    name: "David Williams",
    title: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
    cellPhone: "+1 (555) 567-8901",
    address: "202 Birch Ln, Seattle, WA 98101",
  },
  {
    name: "Olivia Brown",
    title: "HR Manager",
    image: "https://randomuser.me/api/portraits/women/61.jpg",
    cellPhone: "+1 (555) 678-9012",
    address: "303 Cedar Dr, Miami, FL 33101",
  },
  {
    name: "James Davis",
    title: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    cellPhone: "+1 (555) 789-0123",
    address: "404 Fir St, Boston, MA 02108",
  },
  {
    name: "Sophia Miller",
    title: "UX Designer",
    image: "https://randomuser.me/api/portraits/women/62.jpg",
    cellPhone: "+1 (555) 890-1234",
    address: "505 Redwood Ave, San Francisco, CA 94101",
  },
  {
    name: "Lucas Wilson",
    title: "Marketing Director",
    image: "https://randomuser.me/api/portraits/men/63.jpg",
    cellPhone: "+1 (555) 901-2345",
    address: "606 Willow Dr, Los Angeles, CA 90001",
  },
  {
    name: "Isabella Moore",
    title: "Content Creator",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    cellPhone: "+1 (555) 012-3456",
    address: "707 Palm St, New York, NY 10001",
  },
];

// const galleryStyle = {
//   display: "flex",
//   gap: "15px",
//   width: "100%",
//   flexWrap: "wrap",

// };

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

      <div className="gallery-style">
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
