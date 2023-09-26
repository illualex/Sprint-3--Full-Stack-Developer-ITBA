import Image from 'next/image';
import logo from '../public/images/logo/logo-1.png';
import instagram from '../public/images/redes-app/instagram.png'
import facebook from '../public/images/redes-app/facebook.png'
import twitter from '../public/images/redes-app/twitter.png'
import google from '../public/images/redes-app/google-play.png'
import apple from '../public/images/redes-app/apple-store.png'

export default function Footer() {
    return (
        <>
            <hr className='bg-black h-0.4' />
            <div className="p-5 mt-5 grid grid-cols-3 h-200">
                <div className="col-span-1">
                    <div className="space-y-2">
                        <a href="#" className="block text-xs">Política y Privacidad</a>
                        <a href="#" className="block text-xs">Términos y Condiciones</a>
                        <a href="#" className="block text-xs">Atención al Cliente</a>
                    </div>
                    <p className="mt-4 text-xs">Contacto: <a href="mailto:bancocapitalitba2023@hotmail.com">bancocapitalitba2023@hotmail.com</a></p>
                </div>
                <div className="col-span-1 text-center">
                    <Image src={logo} alt="Logo Banco Nacional ITBA" className="w-20 mx-auto pb-1" />
                    <p className='text-xs'>© 2023 Banco Capital ITBA <br /> Todos los derechos Reservados.</p>
                </div>
                <div className="flex justify-end">
                    <div className="flex justify-center items-center gap-2 mx-5">
                        <a href="https://instagram.com/" target="_blank" className="block w-10"><Image src={instagram} alt="logo instagram" /></a>
                        <a href="https://es-la.facebook.com/" target="_blank" className="block w-10"><Image src={facebook} alt="logo facebook" /></a>
                        <a href="https://twitter.com/" target="_blank" className="block w-10"><Image src={twitter} alt="logo twitter" /></a>
                    </div>
                    <div className="flex justify-center items-center gap-2 mt-2 mx-5">
                        <a href="https://play.google.com/store/" target="_blank" className="block w-10"><Image src={google} alt="logo google playstore" /></a>
                        <a href="https://www.apple.com/la/app-store/" target="_blank" className="block w-10"><Image src={apple} alt="logo apple store" /></a>
                    </div>
                </div>
            </div>


        </>
    )
}
