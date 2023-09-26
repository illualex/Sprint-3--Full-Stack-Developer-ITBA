import Link from 'next/link';
import { useRouter } from 'next/router';

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
            <div className='grid place-items-center pb-5'>
                <h1>Detalle de Factura</h1>
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