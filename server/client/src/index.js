import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { WorkoutsContextProvider } from "./context/WorkoutContext";
import { AuthContextProvider } from "./context/AuthContext";
import { ComplaintContextProvider } from "./context/ComplaintContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkoutsContextProvider>
        <ComplaintContextProvider>
          <App />
        </ComplaintContextProvider>
      </WorkoutsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
