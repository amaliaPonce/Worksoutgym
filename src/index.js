import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./context/AppContext";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./RoutesApp";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <AppProvider>
          <ThemeProvider>
            <AppRoutes />
          </ThemeProvider>
        </AppProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
