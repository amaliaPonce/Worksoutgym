import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import HeaderDashboard from "../components/Dashboard/HeaderDashboard";
import Sidebar from "../components/Dashboard/Sidebar";
import MainContent from "../components/Dashboard/MainContent";

function ClientPage() {
  const { user } = useContext(AppContext);

  return (
    <div>
      <h2>ClientPage</h2>
      {user.role === "cliente" && (
        <>
          <HeaderDashboard />
          <h1>
            hola, esto hay que quitarlo, es solo para que baje el contenido
          </h1>
          <MainContent />
          <Sidebar />
        </>
      )}
    </div>
  );
}

export default ClientPage;
