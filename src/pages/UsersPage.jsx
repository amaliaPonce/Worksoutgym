import React from "react";
import HeaderDashboard from "../components/Dashboard/HeaderDashboard";
import Sidebar from "../components/Dashboard/Sidebar";
import MainContent from "../components/Dashboard/MainContent";

function UsersPage() {
  return (
    <main>
      <HeaderDashboard />
      <MainContent />
      <Sidebar />
    </main>
  );
}

export default UsersPage;
