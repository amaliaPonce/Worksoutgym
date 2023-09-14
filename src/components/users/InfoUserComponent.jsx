import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useUser from "../../hooks/useUser"; 
import HeaderDashboard from "../Dashboard/HeaderDashboard";
import Sidebar from "../Dashboard/Sidebar";
import { AppContext } from "../../context/AppContext"; 
import { getUserService } from "../../service";

const InfoUserComponent = () => {
  const { id } = useParams();
  const { error } = useUser(id);
  const { user } = useContext(AppContext);
  console.log("User", user);
  const { userInfo } = useUser(user.id, user.token);
  console.log("UserInfo", userInfo);
  const [userData, setUserData] = useState(userInfo[0]);
  const [setMessage] = useState("");
  const [loading, setLoading] = useState(true);



  useEffect(() => {
 
    const fetchUserData = async () => {
      try {
        if (!user || !user.token) {
          throw new Error("Debes iniciar sesión");
        }

        const userData = await getUserService(user.id, user.token);
        setUserData(userData);
        setLoading(false);
      } catch (error) {
        setMessage(error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user, setMessage]);
  console.log (user);

  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px",
  };

  if (loading) {
    return <p>Cargando información del usuario...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div style={pageStyle}>
      <HeaderDashboard />
      <section>
        <h2>Detalles del Usuario</h2>
        <div>
          <p><strong>Nombre:</strong> {userData ? userData.name : "Desconocido"}</p>
          <p><strong>Email:</strong> {userData ? userData.email : "Desconocido"}</p>
        </div>
      </section>
      <Sidebar />
    </div>
  );
};

export default InfoUserComponent;
