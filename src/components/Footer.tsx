import React, { useEffect, useState } from "react";
import LogoWhite from "../images/logo-white.svg";
import { backendUrl } from "../consts";
import queryFunctions from "../utils/queryFunctions";

const Footer = () => {
  const [footerInfo, setFooterInfo] = useState<any>([]);

  const getFooter = async () => {
    const data = await queryFunctions(backendUrl + "footers");
    let dataProd = JSON.parse(data);
    setFooterInfo(dataProd.data[0]);
  };

  useEffect(() => {
    getFooter();
  }, []);

  // useEffect(() => {
  //   console.log("the info ", footerInfo);
  // }, [footerInfo]);

  return (
    <>
      {footerInfo !== undefined && footerInfo !== null && footerInfo.attributes !== undefined && footerInfo.attributes !== null ? (
        <footer className="bg-[#2C261F] pt-20 px-4 lg:px-[100px]">
          <div className="grid grid-cols-10 md:grid-cols-12 gap-5 items-start border-b border-[#56514C] pb-12">
            <div className="col-span-10 md:col-span-6 lg:col-span-3">
              <img className="h-20 mx-auto md:mx-0" src={LogoWhite} alt="" />
            </div>
            <div className="col-span-10 md:col-span-6 lg:col-span-3 pt-2">
              <h3 className="text-white text-xl mb-6 text-center md:text-start">
                {footerInfo.attributes.contacttitle}
              </h3>
              <div className="flex flex-col gap-2 text-center md:text-start">
                <a className="text-white" href={`tel:${footerInfo.attributes.phone}`}>
                  {footerInfo.attributes.phone}
                </a>
                <a className="text-white" href={`tel:${footerInfo.attributes.cellphone}`}>
                  {footerInfo.attributes.cellphone}
                </a>
                <a className="text-white" href={`mailto:${footerInfo.attributes.mail}`}>
                  {footerInfo.attributes.cellphone}
                </a>
              </div>
            </div>
            <div className="col-span-10 md:col-span-6 lg:col-span-3 pt-2">
              <h3 className="text-white text-xl mb-6 text-center md:text-start">
                {footerInfo.attributes.scheduletitle}
              </h3>
              <div className="flex flex-col gap-2 text-center md:text-start">
                <p className="text-white">{footerInfo.attributes.schedule}</p>
              </div>
            </div>
            <div className="col-span-10 md:col-span-6 lg:col-span-3 pt-2">
              <h3 className="text-white text-xl mb-6 text-center md:text-start">
                {footerInfo.attributes.followtitle}
              </h3>
              <div className="flex gap-2 items-center justify-center md:justify-start">
                <a
                  className="bg-[#F1F1F1] w-[50px] h-[50px] rounded-full"
                  href={footerInfo.attributes.link1}
                ></a>
                <a
                  className="bg-[#F1F1F1] w-[50px] h-[50px] rounded-full"
                  href={footerInfo.attributes.link2}
                ></a>
                <a
                  className="bg-[#F1F1F1] w-[50px] h-[50px] rounded-full"
                  href={footerInfo.attributes.link3}
                ></a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center text-center py-6 px-4 lg:py-12 lg:px-10 border-b border-[#56514C]">
            <p className="text-[#9B8F86] text-xs pt-2">
              {footerInfo.attributes.legal}
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
              <a
                className="text-white underline pt-2 text-sm"
                href="/reclamaciones"
              >
                Libro de Reclamaciones
              </a>
            </div>
            <p className="text-white pt-2 text-sm">
              2023 © Todos los derechos reservados
            </p>
          </div>
        </footer>
      ) : null}
    </>
  );
};

export default Footer;
