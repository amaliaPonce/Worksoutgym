import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Layout from "../components/userDashboard/UserLayout";
import ClientComponent from "../components/users/ClientComponent";

function ClientPage() {
  const { user } = useContext(AppContext);

  return (
    <div>
      <h2>ClientPage</h2>
      {user.role === "cliente" && (
        <Layout>
          <ClientComponent />
        </Layout>
      )}
    </div>
  );
}

export default ClientPage;
