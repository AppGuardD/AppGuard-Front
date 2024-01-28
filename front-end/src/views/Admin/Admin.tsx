import React from "react";
import SideBar from "@/components/SideBar/SideBar";

const Admin: React.FC = () => {
  const handleSidebarClick = () => {
    // Lógica que quieres ejecutar cuando se hace clic en la barra lateral
    console.log("Sidebar Clicked");
  };

  return (
    <div>
      <SideBar />
    </div>
  );
};

export default Admin;
