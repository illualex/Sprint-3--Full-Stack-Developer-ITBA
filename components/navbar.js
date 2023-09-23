import React, { useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import Dashboard from "../pages/dashboard";
import About from "../pages/about";
import Profile from "../pages/profile";
import Movement from "../pages/movement";
import Price from "../pages/price";
import Lending from "../pages/lending";

const Navbar = () => {
    return (
        <>
            <div id="menuToggle" className="block relative px-30 z-1 select-none">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <div className=" pl-30 overflow-hidden transition max-h-full delay-200 ease-out">
                        <li><Link href="/">Inicio</Link></li>
                        <li><Link href="/profile">Perfil</Link></li>
                        <li><Link href="/movement">Actividad</Link></li>
                        <li><Link href="/price">Cotización</Link></li>
                        <li><Link href="/lending">Préstamos</Link></li>
                        <li><Link href="/about">Nosotros</Link></li>
                    </div>
                </ul>
            </div>
        </>
    );
};

export default Navbar;