import React from 'react';
import logo from '../assets/VotaSmartMono.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'

function Footer() {
  return (
    <footer className="footer">
        <div className="min-h-screen flex flex-col">
            <section className="mt-auto p-8 flex flex-row justify-between items-center bg-titulo">
                <nav className="pl-8">
                    <ul className="list-none text-justify text-hover">
                    <li className="my-4">
                        <a href="index.html" className="text-white">Inicio</a>
                    </li>
                    <li className="my-4">
                        <a href="faseEquipos.html" className="text-white">Calendario</a>
                    </li>
                    <li className="my-4">
                        <a href="Equipos.html" className="text-white">Equipos</a>
                    </li>
                    </ul>
                </nav>
                <a href="#">
                    <img src={logo} alt="logo" className="w-40 h-auto" />
                </a>
            </section>
            <section className="p-4 flex flex-row justify-between items-center bg-fondo3">
                <p className="m-0 p-0 pl-16 text-hover">Grupo 5</p>
                <article className="m-0 p-0 pr-16 flex flex-row">
                    <a href="https://www.facebook.com/" className="pr-2 pl-2">
                    <img src={facebook} alt="facebook" />
                    </a>
                    <a href="https://www.instagram.com/" className="pr-2 pl-2">
                    <img src={instagram} alt="instagram" />
                    </a>
                    <a href="https://twitter.com/" className="pr-2 pl-2">
                    <img src={twitter} alt="twitter"/>
                    </a>
                </article>
            </section>
        </div>
    </footer>

  );
}

export default Footer;