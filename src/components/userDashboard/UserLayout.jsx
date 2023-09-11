import React from "react";
import HeaderDashboard from "../adminDashboard/HeaderDashboard";
import UserSidebar from "./UserSidebar";

function UserLayout({ children }) {
  return (
    <div className="app-container">
      <HeaderDashboard />
      <UserSidebar />
      <div className="content-container">
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
}

export default UserLayout;
