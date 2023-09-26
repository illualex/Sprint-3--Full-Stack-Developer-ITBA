import Link from 'next/link';
import Image from "next/image";
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>BCIB - Nosotros</title>
        <meta
          name="description"
          content="Información del Banco Capital ITBA"
        />
        <meta
          name="robots"
          content="index, follow"
        />
      </Head>
      <div className="grid place-items-center pb-5">
        <div className="px-8">
          <Image loading='lazy' className='w-screen' src={nosotros} alt="Edificio de la empresa BCIB" />
          <p className="m-5 text-lg">
            Nos distinguimos por orientar nuestra vocación hacia el cliente. Por ello, en los últimos años, hemos trabajado en: la construcción de nuevos centros de atención; la implementación de tecnología de avanzada; la capacitación constante de nuestro personal; y la innovación continua en la variedad de productos y servicios. Así llegamos a cubrir en la actualidad todas las áreas de negocios y segmentos del mercado: personas, empresas, pymes, emprendedores, y lideramos la posición en Planes Sueldo del sistema financiero. Estas características sumadas a una atención personalizada nos permiten dar respuestas efectivas a las necesidades de nuestros clientes, garantizándoles: calidad, discreción, solvencia, transparencia y un acceso rápido y eficaz a toda la Información requerida. Porque nuestra misión es ser un banco universal, cercano a sus clientes, con presencia nacional y vocación de crecimiento, en constante búsqueda de creación de valor para sus accionistas, colaboradores y la sociedad en su conjunto.
          </p>
        </div>
        <h1 className="text-3xl">¡SÉ PARTE DE NUESTRO EQUIPO!</h1>
        <div className='m-5'>
          <button className="btnRegistrarse">Oportunidades de empleo</button>
        </div>
      </div>
    </>
  )
}