import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../public/images/logo/logo-1.png';
import Navbar from './navbar';

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const handleOcultar = () => {
        setIsVisible(false);
    };

    return (
        <>
            <div className="grid grid-cols-3 shadow-lg shadow-gray-500/5">
                <div className="m-1">
                    <Navbar></Navbar>
                </div>
                <div className="m-1">
                    <Link href="/"><Image className="w-28" src={logo} alt="logo de banco BCIB" /></Link>
                </div>
                <div className="m-1">
                    <div className="buttonMenu">
                        <Link href="signup"><button className="btnInicioSesion">Iniciar <br /> Sesion</button></Link>
                        <Link href="signup"><button className="btnRegistrarse">Hacete <br /> Cliente</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}