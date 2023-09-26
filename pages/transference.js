import Link from 'next/link';
import Image from "next/image";
import React, { useState } from 'react';
import Head from 'next/head';
import accounts from './bankAccounts/accounts';

export default function Transference({ accountOptions }) {
    const [montoDeSaldoBancario, setMontoDeSaldoBancario] = useState(100000);
    const [toAccount, setToAccount] = useState('');
    const [amount, setAmount] = useState(0);

    const handleTransfer = () => {
        if (amount <= 0 || toAccount === '') {
            alert('Por favor, seleccione cuenta destino válida y una cantidad mayor que cero.');
            return;
        }
        if (montoDeSaldoBancario < amount) {
            alert('Saldo insuficiente');
            return;
        }
        const toAccountData = accounts.find((account) => account.id === toAccount);
        const validar = window.confirm('¿Seguro que quieres realizar esta transferencia?');
        if (validar) {
            setMontoDeSaldoBancario(montoDeSaldoBancario - amount);
            setAmount('');
            alert(`Se transfirieron $${amount} a la cuenta de ${toAccountData.accountName}.`);
        } else {
            alert('Tu operación ha sido cancelada');
        }
    };

    return (
        <>
            <Head>
                <title>BCIB - Transferencias</title>
                <meta
                    name="description"
                    content="..."
                />
                <meta
                    name="robots"
                    content="noindex, nofollow"
                />
            </Head>
            <div className='grid place-items-center pb-5'>

                <h1 className="text-3xl p-5">Transferencias entre Cuentas Bancarias</h1>
                <div className="grid grid-cols-2 gap-4 text-lg m-5">
                    <div>
                        <label className='block font-bold p-1'>Cuenta de origen:&nbsp;</label>
                        <label className='block font-bold p-1'>Cuenta de destino:&nbsp;</label>
                        <label className='block font-bold p-1'>Monto a transferir:&nbsp;</label>
                        <label className='block font-bold p-1'>Concepto:&nbsp;</label>
                    </div>
                    <div>
                        <p className='block p-1'>245-5745454 - Saldo: ${montoDeSaldoBancario}</p>
                        <select className='block p-1 border rounded-lg' onChange={(e) => setToAccount(e.target.value)} value={toAccount}>
                            <option value="">Seleccionar cuenta de destino</option>
                            {accountOptions.map((account) => (
                                <option key={account.id} value={account.id}>
                                    {account.bank} - {account.accountName}
                                </option>
                            ))}
                        </select>
                        <input
                            className='block p-1 border rounded-lg'
                            type="number"
                            placeholder="Monto a Transferir"
                            value={amount}
                            onChange={(e) => setAmount(parseFloat(e.target.value))}
                        />
                        <select className='block p-1 border rounded-lg'>
                            <option>Varios</option>
                            <option>Alquileres</option>
                            <option>Cuota</option>
                            <option>Expensas</option>
                            <option>Facturas</option>
                            <option>Honorarios</option>
                        </select>
                    </div>
                </div>
                <div className='flex m-4'>
                    <button className='btnRegistrarse' onClick={handleTransfer}>Realizar Transferencia</button>
                    <button className='btnRegistrarse'><Link className='text-white' href="/recipients">Agenda de destinatarios</Link></button>
                </div>
            </div>
        </>
    )
}
export async function getStaticProps() {
    const accountOptions = accounts.map((account) => ({
        id: account.id,
        accountNumber: account.accountNumber,
        accountName: account.accountName,
        bank: account.bank,
        cbu: account.cbu,
        cuil: account.cuil
    }));

    return {
        props: {
            accountOptions,
        },
    };
}
