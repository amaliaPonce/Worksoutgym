import React from "react";
import UserSidebar from "../userDashboard/UserSidebar";
import HeaderDashboard from "../adminDashboard/HeaderDashboard";
import UserMainContent from "../userDashboard/UserMainContent";

function ClientComponent() {
  return (
    <div>
      <HeaderDashboard />
      <div className="client-container">
        <UserSidebar />
        <UserMainContent />
      </div>
    </div>
  );
}

export default ClientComponent;
