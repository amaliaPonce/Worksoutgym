import React from "react";
import { useAuth } from "../context/AuthContext";
import AdminComponent from "../components/admin/AdminComponent";

function AdminPage() {
  const { user } = useAuth();
  return (
    <div>
      <h2>AdminPage</h2>
      {user === "admin" && (
        <div>
          <AdminComponent />
        </div>
      )}
    </div>
  );
}
export default AdminPage;
