import Link from 'next/link';
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Head from 'next/head';

export default function Price() {
    const [currencies, setCurrencies] = useState([]);
    const [selectedCurrency, setSelectedCurrency] = useState("USD");
    const [amount, setAmount] = useState(1);
    const [exchangeRate, setExchangeRate] = useState(null);
    useEffect(() => {
        fetch("https://v6.exchangerate-api.com/v6/caed938467e0116fc0f6a437/latest/ARS")
            .then((response) => response.json())
            .then((data) => {
                const currenciesList = Object.keys(data.conversion_rates);
                setCurrencies(currenciesList);
            })
            .catch((error) => {
                console.error("Error fetching currency list:", error);
            });
    }, []);

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/caed938467e0116fc0f6a437/pair/ARS/${selectedCurrency}`)
            .then((response) => response.json())
            .then((data) => {
                const rate = data.conversion_rate;
                setExchangeRate(rate);
            })
            .catch((error) => {
                console.error("Error fetching exchange rate:", error);
            });
    }, [selectedCurrency]);
    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
    };


    return (
        <>
            <Head>
                <title>BCIB - Cotización</title>
                <meta
                    name="description"
                    content="Cotizador virtual de monedas"
                />
                <meta
                    name="robots"
                    content="noindex, follow"
                />
            </Head>
            <div className="m-10">
                <h1 className='m-5 text-3xl text-center'>Cotización de moneda</h1>
                <div className="container-converter">
                    <section id="background">
                        <label htmlFor="text" className="sub-title">Ingresa el monto deseado a cambiar</label>
                        <input type="number" id="pesos" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Cantidad en pesos" />
                        <section id="ops">
                            <select id="moneda" value={selectedCurrency} onChange={handleCurrencyChange}>
                                {currencies.map((currency) => (
                                    <option key={currency} value={currency}>
                                        {currency}
                                    </option>
                                ))}
                            </select>
                        </section>
                        <label htmlFor="resultado" className="sub-title">El cambio final es de:</label>
                        <p id="resultado" className="bg-white">
                            {exchangeRate ? (amount * exchangeRate).toFixed(2) : "Cargando..."} {selectedCurrency}
                        </p>
                    </section>
                </div>
            </div>
        </>
    )
}