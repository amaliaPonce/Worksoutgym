import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./context/AppContext";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./RoutesApp";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
