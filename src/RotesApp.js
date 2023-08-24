import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import LoginComponent from "../src/components/LoginComponent";
import RegisterComponent from "../src/components/RegisterComponent";
import AdminComponent from "../src/components/AdminComponent";
import ClientComponent from "../src/components/ClientComponent";

function PrivateRoute({ element, authenticated }) {
  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return element;
}

export function RoutesApp({ authenticated, setAuthenticated }) {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/login"
        element={<LoginComponent setAuthenticated={setAuthenticated} />}
      />
      <Route path="/register" element={<RegisterComponent />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute
            element={<ClientComponent />}
            authenticated={authenticated}
          />
        }
      />
      <Route
        path="/admin"
        element={
          <PrivateRoute
            element={<AdminComponent />}
            authenticated={authenticated}
            roles={["admin"]}
            fallback={<Navigate to="/unauthorized" />}
          />
        }
      />
    </Routes>
  );
}
export default RoutesApp;
