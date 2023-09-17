import React from "react";
import HeaderDashboard from "../components/Dashboard/HeaderDashboard";
import Sidebar from "../components/Dashboard/Sidebar";
import MainContent from "../components/Dashboard/MainContent";
import { useTheme } from "../context/ThemeContext";

function UsersPage() {
  const theme = useTheme();

  return (
    <div className={`pages ${theme}`}>
      <header className="header">
        <HeaderDashboard />
      </header>
      <main className="main-content">
        <MainContent />
      </main>
      <aside className="sidebar">
        <Sidebar />
      </aside>
    </div>
  );
}

export default UsersPage;
