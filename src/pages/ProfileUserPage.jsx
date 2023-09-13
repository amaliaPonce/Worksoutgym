import React, { useContext } from "react";
import HeaderDashboard from "../components/Dashboard/HeaderDashboard";
import Sidebar from "../components/Dashboard/Sidebar";
import ListUserComponent from "../components/users/ListUserComponent";
import { AppContext } from "../context/AppContext";

const ProfileUserPage = () => {
  const { user } = useContext(AppContext);
  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "500px",
  };

  return (
    <div style={pageStyle}>
      <HeaderDashboard />
      {user.role === "admin" && <ListUserComponent />}
      <Sidebar />
    </div>
  );
};

export default ProfileUserPage;
