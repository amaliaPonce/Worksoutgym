import HeaderDashboard from "../components/Dashboard/HeaderDashboard";
import Sidebar from "../components/Dashboard/Sidebar";
import MainContent from "../components/Dashboard/MainContent";

function UsersPage() {
  return (
    <div>
      <div>
        <HeaderDashboard />
        <MainContent />
        <Sidebar />
      </div>
    </div>
  );
}
export default UsersPage;
