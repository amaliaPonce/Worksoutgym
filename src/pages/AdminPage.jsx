import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import HeaderDashboard from "../components/Dashboard/HeaderDashboard";
import Sidebar from "../components/Dashboard/Sidebar";
import MainContent from "../components/Dashboard/MainContent";

function AdminPage() {
  const { user } = useContext(AppContext);

  return (
    <div>
      <h2>AdminPage</h2>
      {user && user.role === "admin" && (
        <div>
          <HeaderDashboard />
          <h1>hola esto hay que quitarlo es para que baje el contenido</h1>
          <MainContent />
          <Sidebar />
        </div>
      )}
    </div>
  );
}
export default AdminPage;