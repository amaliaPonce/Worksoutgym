import { useContext } from "react";
import InfoUserComponent from "../components/users/InfoUserComponent";
import HeaderDashboard from "../components/Dashboard/HeaderDashboard";
import Sidebar from "../components/Dashboard/Sidebar";
import { AppContext } from "../context/AppContext";
const InfoUserPage = () => {
  const { user } = useContext(AppContext);

  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "500px",
  };

  return (
    <div style={pageStyle}>
      <HeaderDashboard />
      <InfoUserComponent user={user} />
      <Sidebar />
    </div>
  );
};

export default InfoUserPage;
