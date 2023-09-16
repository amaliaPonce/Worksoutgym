import React, { useContext } from "react";
import HeaderDashboard from "../components/Dashboard/HeaderDashboard";
import Sidebar from "../components/Dashboard/Sidebar";
import ListUserComponent from "../components/users/ListUserComponent";
import { AppContext } from "../context/AppContext";
import { useTheme } from "../context/ThemeContext";

const ListUserPage = () => {
  const { user } = useContext(AppContext);
  const theme = useTheme();

  return (
    <div className={`pages ${theme}`}>
      <HeaderDashboard />
      {user.role === "admin" && <ListUserComponent />}
      <Sidebar />
    </div>
  );
};

export default ListUserPage;
