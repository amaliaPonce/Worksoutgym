import React from "react";
import InfoUserComponent from "../components/users/InfoUserComponent";
import HeaderDashboard from "../components/Dashboard/HeaderDashboard";
import Sidebar from "../components/Dashboard/Sidebar";

const InfoUserPage = () => {
  return (
    <main>
      <HeaderDashboard />
      <InfoUserComponent />
      <Sidebar />
    </main>
  );
};

export default InfoUserPage;
