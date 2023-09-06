import React from "react";
import LogoWhite from "../images/logo-white.svg";

const Footer = () => {
  return (
    <footer className="bg-[#2C261F] pt-20 px-4 lg:px-[100px]">
      <div className="grid grid-cols-10 md:grid-cols-12 gap-5 items-start border-b border-[#56514C] pb-12">
        <div className="col-span-10 md:col-span-6 lg:col-span-3">
          <img className="h-20 mx-auto md:mx-0" src={LogoWhite} alt="" />
        </div>
        <div className="col-span-10 md:col-span-6 lg:col-span-3 pt-2">
          <h3 className="text-white text-xl mb-6 text-center md:text-start">
            CONTACTANOS
          </h3>
          <div className="flex flex-col gap-2 text-center md:text-start">
            <a className="text-white" href="">
              (01) 234- 1345
            </a>
            <a className="text-white" href="">
              (+51) 223 345 467
            </a>
            <a className="text-white" href="">
              ventas@toplife.com.pe
            </a>
          </div>
        </div>
        <div className="col-span-10 md:col-span-6 lg:col-span-3 pt-2">
          <h3 className="text-white text-xl mb-6 text-center md:text-start">
            HORARIOS DE ATENCIÓN
          </h3>
          <div className="flex flex-col gap-2 text-center md:text-start">
            <p className="text-white">L - D de 9:00 am a 9:00 pm</p>
          </div>
        </div>
        <div className="col-span-10 md:col-span-6 lg:col-span-3 pt-2">
          <h3 className="text-white text-xl mb-6 text-center md:text-start">
            SIGUENOS
          </h3>
          <div className="flex gap-2 items-center justify-center md:justify-start">
            <a
              className="bg-[#F1F1F1] w-[50px] h-[50px] rounded-full"
              href=""
            ></a>
            <a
              className="bg-[#F1F1F1] w-[50px] h-[50px] rounded-full"
              href=""
            ></a>
            <a
              className="bg-[#F1F1F1] w-[50px] h-[50px] rounded-full"
              href=""
            ></a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center text-center py-6 px-4 lg:py-12 lg:px-10 border-b border-[#56514C]">
        <p className="text-[#9B8F86] text-xs pt-2">
          Todas las imágenes, planos, medidas y áreas, son referenciales por lo
          que podrían sufrir cambios al momento de desarrollarse el proyecto,
          asímismo los elementos decorativos, acabados y mobiliarios son
          propuestas del departamento de diseño que no se incluyen en la oferta
          comercial y no comprometen a la empresa inmobiliaria.
        </p>
      </div>
      <div className="flex flex-col gap-2 lg:flex-row items-center justify-between py-5">
        <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-10">
          <a className="text-white underline pt-2 text-sm" href="">
            Términos y Condiciones
          </a>
          <a className="text-white underline pt-2 text-sm" href="">
            Políticas de Privacidad
          </a>
          <a className="text-white underline pt-2 text-sm" href="/reclamaciones">
            Libro de Reclamaciones
          </a>
        </div>
        <p className="text-white pt-2 text-sm">
          2023 © Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
