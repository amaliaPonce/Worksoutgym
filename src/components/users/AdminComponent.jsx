import React from "react";

import Sidebar from "../adminDashboard/Sidebar"; 
import HeaderDashboard from "../adminDashboard/HeaderDashboard";
import MainContent from "../adminDashboard/MainContent"; 

function AdminComponent() {
  return (
    <div>
      <HeaderDashboard />
      <div className="admin-container">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default AdminComponent;
