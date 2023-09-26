import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

const getInvoiceDetails = (id) => {
    return {
        id,
        tipo: 'Agua',
        monto: 5660.00,
        vencimiento: '2023-10-01',
        beneficiario: 'Compañía de Agua'
    };
};
export async function getServerSideProps({ params }) {
    const id = 'water';
    const factura = getInvoiceDetails(id);
    return {
        props: { factura },
    };
}

function Water({ factura }) {
    return (
        <>
            <Head>
                <title>BCIB - Detalle de la Factura</title>
                <meta
                    name="description"
                    content="Detalle de las facturas dentro de tu cuenta en Banco Capital ITBA"
                />
                <meta
                    name="robots"
                    content="noindex, nofollow"
                />
            </Head>
            <div className='grid place-items-center pb-5'>
                <h1 className='text-3xl m-5'>Detalle de Factura</h1>
                <div className='grid grid-cols-2 gap-4 text-lg m-5'>
                    <div>
                        <label className='block font-bold p-1'>Tipo:</label>
                        <label className='block font-bold p-1'>Monto:</label>
                        <label className='block font-bold p-1'>Vencimiento:</label>
                        <label className='block font-bold p-1'>Beneficiario:</label>
                    </div>
                    <div>
                        <p className='p-1'>{factura.tipo}</p>
                        <p className='p-1'>$ {factura.monto.toFixed(2)}</p>
                        <p className='p-1'>{factura.vencimiento}</p>
                        <p className='p-1'>{factura.beneficiario}</p>
                    </div>
                </div>
                <div className='mb-4'>
                    <button className='btnRegistrarse'><Link className='text-white' href="/payment">Volver</Link></button>
                </div>
            </div>
        </>
    );
}

export default Water;