import Link from 'next/link';
import Image from "next/image";
import React, { useState } from 'react';
import creditCard from "../public/images/credit-card/credit-card-visa.png"
import Head from 'next/head';

export default function Profile() {
    const [montoDeSaldoBancario, setMontoDeSaldoBancario] = useState(100000);
    const [transferAmount, setTransferAmount] = useState('');
    const [payAmount, setPayAmount] = useState('');

    const handleTransferClick = () => {
        if (montoDeSaldoBancario < transferAmount) {
            alert('Saldo insuficiente');
            return;
        }
        const validar = window.confirm('¿Seguro que quieres realizar esta transferencia?');
        if (validar) {
            setMontoDeSaldoBancario(montoDeSaldoBancario - transferAmount);
            setTransferAmount('');
            alert('Tu operación ha sido realizada con éxito');
        } else {
            alert('Tu operación ha sido cancelada');
        }
    };

    const handlePayClick = () => {
        if (montoDeSaldoBancario < payAmount) {
            alert('Saldo insuficiente');
            return;
        }
        const validar = window.confirm('¿Seguro que quieres realizar esta transferencia?');
        if (validar) {
            setMontoDeSaldoBancario(montoDeSaldoBancario - payAmount);
            setPayAmount('');
            alert('Tu operación ha sido realizada con éxito');
        } else {
            alert('Tu operación ha sido cancelada');
        }
    };

    return (
        <>
            <Head>
                <title>BCIB - Perfil</title>
                <meta
                    name="description"
                    content="Perfil dentro de Banco Capital ITBA"
                />
                <meta
                    name="robots"
                    content="noindex, nofollow"
                />
            </Head>
            <div className="userName">
                <h1 className="mt-5 mb-12 text-3xl text-center">Bienvenido, Maxi! </h1>
            </div>
            <div className="container-creditCard">
                <div className="credit-card">
                    <Image className="imgCreditCard" src={creditCard} alt="Tu tarjeta de credito" />
                </div>
                <div className="dates">
                    <div className="datesUser">
                        <p className="pDatos">Saldo:</p>
                        <h2 className="h2Datos">{`$${montoDeSaldoBancario}`}</h2><br />

                        <p className="pDatos">Name :</p>
                        <h2 className="h2Datos">Maxi</h2>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center g-50 my-25 flex-col">
                <section className="main-container">
                    <h3 className="box-title">Transferencia</h3>
                    <div className="input-form">
                        <label htmlFor="nombre">Destinatario:</label>
                        <input type="text" id="transfer-destiny" placeholder="Ingresa CBU o Alias" />
                    </div>
                    <div className="input-form">
                        <label htmlFor="nombre">Monto:</label>
                        <input
                            className="transfer-amount"
                            type="number"
                            value={transferAmount}
                            placeholder="Ingrese el Monto"
                            onChange={(e) => setTransferAmount(Number(e.target.value))}
                        />
                    </div>
                    <div className="acc-btn">
                        <button className="trasferencia" id="pay-btn" onClick={handleTransferClick}>
                            Transferir
                        </button>
                    </div>
                </section>
                <section className="main-container">
                    <h3 className="box-title">Pago</h3>
                    <div className="input-form">
                        <label htmlFor="nombre">Destinatario:</label>
                        <input type="text" id="pay-destiny" placeholder="Ingresa el numero de la factura" />
                    </div>
                    <div className="input-form">
                        <label htmlFor="nombre">Monto:</label>
                        <input
                            className="transfer-amount pay-amount"
                            placeholder="Ingresa el Monto"
                            type="number"
                            value={payAmount}
                            onChange={(e) => setPayAmount(Number(e.target.value))}
                        />
                    </div>
                    <div className="acc-btn">
                        <button className="pagar" id="pay-btn" onClick={handlePayClick}>Realizar pago</button>
                    </div>
                    <div id="msj-container"></div>
                </section>
            </div>
        </>
    )
}
