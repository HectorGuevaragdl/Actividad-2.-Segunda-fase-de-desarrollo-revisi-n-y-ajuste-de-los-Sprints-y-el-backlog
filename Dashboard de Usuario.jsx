import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const DashboardPage = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="dashboard">
      <h2>Bienvenido, {currentUser?.email}</h2>
      <div className="user-progress">
        <h3>Mis cursos en progreso</h3>
        <div className="progress-tracker">
          <p>React Básico: 30% completado</p>
          <div className="progress-bar">
            <div style={{ width: "30%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;