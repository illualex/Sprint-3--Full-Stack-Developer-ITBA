import { useRouter } from 'next/router';
import accounts from './accounts';
import Link from 'next/link';

function Account2() {
    const router = useRouter();
    const { id } = router.query;
    const account = accounts.find((acc) => acc.id === 'account2');

    return (
        <>
            <div className='grid place-items-center pb-5'>
                <h1 className='text-3xl p-5'>Detalles de la Cuenta Bancaria</h1>
                <div className='grid grid-cols-2 gap-4 text-lg m-5'>
                    <div>
                        <label className='block font-bold p-1'>Nombre del Titular:&nbsp;</label>
                        <label className='block font-bold p-1'>Nombre del Banco:&nbsp;</label>
                        <label className='block font-bold p-1'>Número de Cuenta:&nbsp;</label>
                        <label className='block font-bold p-1'>CUIL/CUIT:&nbsp;</label>
                        <label className='block font-bold p-1'>CBU/CVU:&nbsp;</label>
                        <label className='block font-bold p-1'>E-mail:&nbsp;</label>
                    </div>
                    <div>
                        <p className='block p-1'> {account.accountName}</p>
                        <p className='block p-1'> {account.bank}</p>
                        <p className='block p-1'> {account.accountNumber}</p>
                        <p className='block p-1'> {account.cuil}</p>
                        <p className='block p-1'> {account.cbu}</p>
                        <p className='block p-1'> {account.mail}</p>
                    </div>
                </div>
                <div className='mb-4'>
                    <button className='btnRegistrarse'><Link className='text-white' href="/recipients">Volver</Link></button>
                </div>
            </div>
        </>
    );
}

export default Account2;
