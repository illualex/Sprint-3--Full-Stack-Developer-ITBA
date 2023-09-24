import React, { useState } from "react";
import { Sidebar } from "../components/sidebar"; // Ajusta la ruta según la ubicación real de Sidebar
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Inicio from "@/pages/dashboard";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <Inicio />
    </main>
  );
};

export default Home;
