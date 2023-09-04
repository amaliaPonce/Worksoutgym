import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import AdminComponent from "../components/users/AdminComponent";

function AdminPage() {
  const { user } = useContext(AppContext);

  return (
    <div>
      <h2>AdminPage</h2>
      {user.role === "admin" && (
        <div>
          <AdminComponent />
        </div>
      )}
    </div>
  );
}
export default AdminPage;
