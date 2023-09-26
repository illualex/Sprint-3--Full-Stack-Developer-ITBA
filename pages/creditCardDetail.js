import { useRouter } from 'next/router';
import Link from 'next/link';
import creditCardsData from './creditCards/creditCardData';
import Head from 'next/head';

function CreditCardDetail({ card }) {
    return (
        <>
            <Head>
                <title>BCIB - Detalle de la Tarjeta de Crédito</title>
                <meta
                    name="description"
                    content="Detalle de tus tarjetas de crédito dentro del Banco Capital ITBA"
                />
                <meta
                    name="robots"
                    content="noindex, nofollow"
                />
            </Head>
            <div className='grid place-items-center pb-5'>
                <h1 className='text-3xl p-5'>Detalle de la Tarjeta de Crédito</h1>
                <div className='grid grid-cols-2 gap-4 text-lg m-5'>
                    <div>
                        <label className='block font-bold p-1'>Nombre de la Tarjeta:&nbsp;</label>
                        <label className='block font-bold p-1'>Número de Tarjeta:&nbsp;</label>
                        <label className='block font-bold p-1'>Fecha de Vencimiento Desde:&nbsp;</label>
                        <label className='block font-bold p-1'>Fecha de Vencimiento Hasta:&nbsp;</label>
                        <label className='block font-bold p-1'>Límite de Crédito:&nbsp;</label>
                    </div>
                    <div>
                        <p className='p-1'>{card.name}</p>
                        <p className='p-1'>{card.number}</p>
                        <p className='p-1'>{card.dateFrom}</p>
                        <p className='p-1'>{card.dateTo}</p>
                        <p className='p-1'>{card.limit}</p>
                    </div>
                </div>
                <div className="mb-5">
                    <button className='btnRegistrarse'><Link className='text-white' href="/creditCard">Volver</Link></button>
                </div>
            </div>
        </>
    );
}

export async function getStaticPaths() {
    const paths = creditCardsData.map((card) => ({
        params: { id: card.id },
    }));

    return {
        paths,
        fallback: false,
    };
}
export async function getStaticProps({ params }) {
    const cardId = params.id;
    const card = creditCardsData.find((c) => c.id === cardId);

    return {
        props: {
            card,
        },
    };
}

export default CreditCardDetail;
