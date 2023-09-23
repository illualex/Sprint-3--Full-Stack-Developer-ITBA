import React, { useState } from "react";
import Image from "next/image";
import Link from 'next/link';

import { BiHome } from "react-icons/bi";


const navItems = ["Inicio", "settings", "backup", "mail", "cloud", "layers"];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-inner">
        <header className="sidebar-header">
          <button
            type="button"
            className="sidebar-burger"
            onClick={toggleSidebar}
          >
            <span>
              {isOpen ? "Cerrar" : "Menu"}
            </span>
          </button>
          <Image src={Logo} alt="me" className="sidebar-logo" />
        </header>
        <nav className="sidebar-menu">
          <ul>
            <li className="sidebar-button"><BiHome className="text-3xl"/><button>Inicio</button></li>
            <li className="sidebar-button"> <Link href="/profile">Perfil</Link> </li>
            <li className="sidebar-button">Actividad</li>
            <li className="sidebar-button">Cotización</li>
            <li className="sidebar-button">Préstamos</li>
            <li className="sidebar-button">Nosotros</li>
          </ul>
          
          {/* {navItems.map((item) => (
            <button key={item} type="button" className="sidebar-button">
              <span className="material-symbols-outlined">{item}</span>
              <p>{item}</p>
            </button>
          ))} */}
        </nav>
      </div>
    </nav>
  );
};
