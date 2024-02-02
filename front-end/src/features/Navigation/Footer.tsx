import { Link } from "react-router-dom"
import logo from "../../assets/logo-appguard.svg"
import fb from "@/assets/facebook.png"
import ig from "@/assets/instagram.png"
import tw from "@/assets/twitter.png"
import tk from "@/assets/tik-tok.png"
import yt from "@/assets/youtube.png"
import google from "@/assets/google_play.png"
import appStorte from "@/assets/app_store.png"

const Footer: React.FC = () => {
  return (
    <footer className="flex items-start justify-evenly flex-wrap p-6 gap-2 border-t border-primary">
      <div className="flex flex-wrap max-w-64">
        <img src={logo} alt="" className="h-10 pr-4" />
        <span className="font-semibold mt-1 text-2xl pt-0.25">AppGuard</span>
        <p>El mejor website para guardavidas y aficionados a la naturaleza.</p>
        <div>
          <ul className="flex items-center justify-start">
            <li className="m-2 cursor-pointer"><a href="https://www.facebook.com/"><img src={fb} alt="facebook" /></a></li>
            <li className="m-2 cursor-pointer"><a href="https://www.twitter.com/"><img src={tw} alt="Twitter" /></a></li>
            <li className="m-2 cursor-pointer"><a href="https://www.instagram.com"><img src={ig} alt="Instagram" /></a></li>
            <li className="m-2 cursor-pointer"><a href="https://www.tiktok.com"><img src={tk} alt="TikTok" /></a></li>
            <li className="m-2 cursor-pointer"><a href="https://youtube.com/"><img src={yt} alt="YouTube" /></a></li>
          </ul>
          <span className="font-serif mt-1 text-xs ">
            AppGuard® 2024. Todos los derechos reservados
          </span>
        </div>
      </div>
      <div className="flex flex-wrap max-w-40">
        <span className="font-semibold mt-1 text-1xl pt-0.25">
          Sobre nosotros
        </span>{" "}
        <br /> <br />
        <ul>
          <li>
            <Link to={"/about"}>Sobre Nosotros</Link>{" "}
          </li>
          <li>
            <Link to={"/cart"}> Nuestra Tienda</Link>{" "}
          </li>
          <li className="cursor-pointer">Categorias </li>
          <li className="cursor-pointer">Blogs </li>
        </ul>
      </div>
      <div className="flex flex-wrap max-w-40">
        <span className="font-semibold mt-1 text-1xl pt-0.25">Servicios</span>
        <br />
        <br />
        <ul>
          <li>
            <Link to={`/mangrullos`}>Ir a mangrullos</Link>
          </li>
          <li>
            <Link to={`/activities`}>Ir a actividades</Link>
          </li>
          <li>
            <Link to={`/home`}>Ir a servicios </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap max-w-40">
        <span className="font-semibold mt-1 text-1xl pt-0.25">Donaciones</span>
        <br />
        <br />
        <ul>
          <li>
            <Link to={`/donations`}>Ir a donaciones</Link>
          </li>
          <li>
            <p>Tu apoyo es muy importante para nosotros</p>
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap max-w-64">
        <span className="font-semibold mt-1 text-1xl pt-0.25 m-max">
          Obtén nuestra App
        </span>
        <div>
          <ul className="flex flex-wrap items-center justify-start">
            <li className="w-40 m-2 cursor-pointer">
              <img src={google} alt="PlayStore" />
            </li>
            <li className="w-40 m-2 cursor-pointer">
              <img src={appStorte} alt="AppStore" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
