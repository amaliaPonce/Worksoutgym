import React from "react";
import InfoUserComponent from "../components/users/InfoUserComponent";
import HeaderDashboard from "../components/Dashboard/HeaderDashboard";
import Sidebar from "../components/Dashboard/Sidebar";
import { useTheme } from "../context/ThemeContext";

const InfoUserPage = () => {
  const theme = useTheme();

  return (
    <div className={`pages ${theme}`}>
      <HeaderDashboard />
      <InfoUserComponent />
      <Sidebar />
    </div>
  );
};

export default InfoUserPage;
