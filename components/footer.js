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
            <hr className='bg-black h-0.5' />
            <div className="grid grid-cols-3 p-5 max-[426px]:inline-block max-[426px]:items-center">
                <div className="text-left p-0 m-15px">
                    <a href="#">
                        <p>Politica y Privacidad</p>
                    </a>
                    <a href="#">
                        <p>Terminos y Condiciones</p>
                    </a>
                    <a href="#">
                        <p>Atencion al Cliente</p>
                    </a>
                    <p>Contacto: <br /> <a href="#">bancocapitalitba2023@hotmail.com</a></p>
                </div>
                <div className="footer-logo justify-center">
                    <Image className="pb-1 w-28" src={logo} alt="Logo Banco Nacional ITBA" />
                    <p className="text-center">© 2023 Banco Capital ITBA <br /> Todos los derechos Reservados.</p>
                </div>
                <div className="p-10px text-center">
                    <div className="grid grid-cols-3">
                        <a href="https://instagram.com/" target="_blank"><Image className="img-redes" src={instagram} /></a>
                        <a href="https://es-la.facebook.com/" target="_blank"><Image className="img-redes" src={facebook} alt="logo facebook" /></a>
                        <a href="https://twitter.com/" target="_blank"><Image className="img-redes" src={twitter} alt="logo twitter" /></a>
                    </div>
                    <div className="grid grid-cols-2">
                        <a href="https://play.google.com/store/" target="_blank"><Image className="img-apps" src={google} alt="logo google playstore" /></a>
                        <a href="https://www.apple.com/la/app-store/" target="_blank"><Image className="img-apps" src={apple} alt="logo apple store" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}
