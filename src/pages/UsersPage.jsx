import HeaderDashboard from "../components/Dashboard/HeaderDashboard";
import Sidebar from "../components/Dashboard/Sidebar";
import MainContent from "../components/Dashboard/MainContent";

function UsersPage() {
  return (
    <div className="pages">
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
