import React from "react";
import InfoUserComponent from "../components/users/InfoUserComponent";
import HeaderDashboard from "../components/Dashboard/HeaderDashboard";
import Sidebar from "../components/Dashboard/Sidebar";

const InfoUserPage = () => {
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
      <InfoUserComponent />
      <Sidebar />
    </div>
  );
};

export default InfoUserPage;
