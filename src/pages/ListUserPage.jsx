import React, { useContext } from "react";
import HeaderDashboard from "../components/Dashboard/HeaderDashboard";
import Sidebar from "../components/Dashboard/Sidebar";
import ListUserComponent from "../components/users/ListUserComponent";
import { AppContext } from "../context/AppContext";

const ListUserPage = () => {
  const { user } = useContext(AppContext);

  return (
    <main className="exercise-page-container">
      <HeaderDashboard />
      {user.role === "admin" && <ListUserComponent />}
      <Sidebar />
    </main>
  );
};

export default ListUserPage;
