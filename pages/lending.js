import Link from 'next/link';
import Image from "next/image";
import React, { useState } from 'react';

export default function Lending() {
    const [monto, setMonto] = useState('');
    const [meses, setMeses] = useState('');
    const [resultadoTax, setResultadoTax] = useState(0);
    const [resultadoTotal, setResultadoTotal] = useState(0);
    const [cuotaMensual, setCuotaMensual] = useState(0);
    const calcularPorcentaje = (a, b) => {
        let interes;
        if (a <= 3) interes = 0.025; // 2.5%
        else if (a > 3 && a < 6) interes = 0.05; // 5% 
        else if (a >= 6 && a < 10) interes = 0.075; // 7.5% 
        else if (a >= 10 && a < 14) interes = 0.1; // 10%

        let operacion = b * a * interes;
        return operacion;
    };
    const calcularTotal = (a, b) => {
        let number1 = parseInt(a);
        let number2 = parseInt(b);
        return number1 + number2;
    };
    const calcularCuota = (a, b) => {
        return a / b;
    };
    const handleCalcularClick = () => {
        if (monto === '' || meses === '') return;
        let taxResult = calcularPorcentaje(meses, monto);
        let final = calcularTotal(monto, taxResult);
        let taxMounth = calcularCuota(final, meses);
        setResultadoTotal(final);
        setResultadoTax(taxResult);
        setCuotaMensual(taxMounth);
    };
    const handleVerificacionClick = () => {
        if (monto === '') return;

        let confirmar = window.confirm("¿Estás seguro de realizar esta operación?");

        if (confirmar) {
            alert("Operación realizada con éxito, los fondos serán sumados a tu cuenta en los próximos días");
        } else {
            alert("Operación cancelada");
        }
    };

    return (
        <>
            <div className='grid place-items-center'>
                <h1 className='mt-5 mb-10 text-3xl text-center'> Bienvenido al area de prestamos</h1>
                <div className='w-1/2 bg-neutral-400 rounded-xl'>
                    <section className="input-item grid place-content-center mb-2">
                        <div className='grid place-content-center'>
                            <label htmlFor="amount" className="text-lg mt-5">Ingrese su monto</label>
                            <input
                                type="number"
                                className="mb-5"
                                placeholder="Ingrese el Monto"
                                value={monto}
                                onChange={(e) => setMonto(e.target.value)}
                            />
                        </div>
                        <div className='grid place-content-center'>
                            <label htmlFor="month" className="text-lg">Cantidad de meses</label>
                            <input
                                type="number"
                                className="mb-1"
                                placeholder="Ingrese los Meses"
                                value={meses}
                                onChange={(e) => setMeses(e.target.value)}
                            />
                        </div>
                        <button className="calcular" onClick={handleCalcularClick}>Calcular</button>
                    </section>
                    <hr/>
                    <section className="grid place-content-center mb-2">
                        <div className="text-xl mt-5 text-center">
                            <p className="amount-result">Monto a devolver: ${resultadoTotal}</p>
                            <p className="month-tax">Cuota mensual: ${cuotaMensual}</p>
                            <p className="tax">Intereses: ${resultadoTax}</p>
                            <button className="calcular" id='verificacion' onClick={handleVerificacionClick}>Realizar operacion</button>
                        </div>
                    </section>
                    <hr />
                    <section className="valueTaxes">
                        <table className="taxTable">
                            <tbody>
                                <tr>
                                    <td>Meses</td>
                                    <td>Intereses</td>
                                </tr>

                                <tr>
                                    <td>1-3</td>
                                    <td>2.5%</td>
                                </tr>

                                <tr>
                                    <td>4-5</td>
                                    <td>5%</td>
                                </tr>

                                <tr>
                                    <td>6-9</td>
                                    <td>7.5%</td>
                                </tr>

                                <tr>
                                    <td>10-14</td>
                                    <td>7.5%</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
            </div>
        </>
    )
}