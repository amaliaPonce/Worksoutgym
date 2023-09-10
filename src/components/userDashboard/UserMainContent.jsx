import Layout from "../../components/userDashboard/UserLayout";
import { Outlet } from "react-router-dom";

function UserMainContent() {
  return (
    <Layout>
      <h2>Contenido Principal MAIN</h2>
      <p>
      Aquí puedes acceder a tus funciones y contenido personalizado.
      </p>
      <Outlet />
    </Layout>
  );
}

export default UserMainContent;
