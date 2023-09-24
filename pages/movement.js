import Link from 'next/link';
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Movement() {
    const [movimientos, setMovimientos] = useState([
        { fecha: '2023-08-25', descripcion: 'Compra en tienda', monto: -600.00 },
        { fecha: '2023-08-24', descripcion: 'Transferencia', monto: 780.00 },
        { fecha: '2023-08-23', descripcion: 'Retiro en cajero', monto: -3000.00 }
    ]);
    const [mostrarDetalleIndex, setMostrarDetalleIndex] = useState(null);

    useEffect(() => {
        cargarMovimientos();
    }, []);

    const cargarMovimientos = () => {
        //para cargar movimientos
    };
    const toggleDetalle = (index) => {
        setMostrarDetalleIndex(mostrarDetalleIndex === index ? null : index);
    };

    return (
        <>
            <Head>
                <title>BCIB - Actividad</title>
                <meta
                    name="description"
                    content="Actividad de tu perfil dentro del banco"
                />
                <meta
                    name="robots"
                    content="noindex, nofollow"
                />
            </Head>
            <h1 className="mt-5 text-3xl text-center">Ultimos movimientos</h1>
            <section id="movement">
                <div className="container" >
                    <h1 className='text-white text-2xl'>Actividad</h1>
                    <ul id="movimientos-list">
                        {movimientos.map((movimiento, index) => (
                            <li key={index}>
                                <span>{movimiento.fecha}</span>
                                <span>{movimiento.descripcion}</span>
                                <span>{movimiento.monto > 0 ? '+' : '-'}$ {Math.abs(movimiento.monto).toFixed(2)}</span>
                                <button onClick={() => toggleDetalle(index)}>Ver Detalle</button>
                                {mostrarDetalleIndex === index && (
                                    <div className="dropdown">
                                        <ul className="detalle-list">
                                            <li>Sucursal: 000 - Casa Central</li>
                                            <li>Referencia: 165215</li>
                                            <li>Fecha: {movimiento.fecha} | 15:25 hs</li>
                                            <li>Descripción: {movimiento.descripcion}</li>
                                            <li>Monto: {movimiento.monto > 0 ? '+' : '-'}$ {Math.abs(movimiento.monto).toFixed(2)}</li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}
