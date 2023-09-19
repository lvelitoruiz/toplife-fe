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
      {footerInfo !== undefined &&
      footerInfo !== null &&
      footerInfo.attributes !== undefined &&
      footerInfo.attributes !== null ? (
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
                <a
                  className="text-white"
                  href={`tel:${footerInfo.attributes.phone}`}
                >
                  {footerInfo.attributes.phone}
                </a>
                <a
                  className="text-white"
                  href={`tel:${footerInfo.attributes.cellphone}`}
                >
                  {footerInfo.attributes.cellphone}
                </a>
                <a
                  className="text-white"
                  href={`mailto:${footerInfo.attributes.mail}`}
                >
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
                  className="bg-[#F1F1F1] w-[50px] h-[50px] rounded-full flex items-center justify-center"
                  href={footerInfo.attributes.link1}
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.25 10V20C26.25 21.6576 25.5915 23.2473 24.4194 24.4194C23.2473 25.5915 21.6576 26.25 20 26.25H10C8.3424 26.25 6.75269 25.5915 5.58058 24.4194C4.40848 23.2473 3.75 21.6576 3.75 20V10C3.75 8.3424 4.40848 6.75269 5.58058 5.58058C6.75269 4.40848 8.3424 3.75 10 3.75H20C21.6576 3.75 23.2473 4.40848 24.4194 5.58058C25.5915 6.75269 26.25 8.3424 26.25 10Z"
                      stroke="#2C261F"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.75 26.25V15C13.75 12.265 14.375 10 18.75 10M11.25 16.25H18.75"
                      stroke="#2C261F"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
                <a
                  className="bg-[#F1F1F1] w-[50px] h-[50px] rounded-full flex items-center justify-center"
                  href={footerInfo.attributes.link2}
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 20C16.3261 20 17.5979 19.4732 18.5355 18.5355C19.4732 17.5979 20 16.3261 20 15C20 13.6739 19.4732 12.4021 18.5355 11.4645C17.5979 10.5268 16.3261 10 15 10C13.6739 10 12.4021 10.5268 11.4645 11.4645C10.5268 12.4021 10 13.6739 10 15C10 16.3261 10.5268 17.5979 11.4645 18.5355C12.4021 19.4732 13.6739 20 15 20Z"
                      stroke="#2C261F"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.75 20V10C3.75 8.3424 4.40848 6.75269 5.58058 5.58058C6.75269 4.40848 8.3424 3.75 10 3.75H20C21.6576 3.75 23.2473 4.40848 24.4194 5.58058C25.5915 6.75269 26.25 8.3424 26.25 10V20C26.25 21.6576 25.5915 23.2473 24.4194 24.4194C23.2473 25.5915 21.6576 26.25 20 26.25H10C8.3424 26.25 6.75269 25.5915 5.58058 24.4194C4.40848 23.2473 3.75 21.6576 3.75 20Z"
                      stroke="#2C261F"
                      stroke-width="1.5"
                    />
                    <path
                      d="M21.875 8.13753L21.8875 8.12378"
                      stroke="#2C261F"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
                <a
                  className="bg-[#F1F1F1] w-[50px] h-[50px] rounded-full flex items-center justify-center"
                  href={footerInfo.attributes.link3}
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.75 21.25V12.5M26.25 10V20C26.25 21.6576 25.5915 23.2473 24.4194 24.4194C23.2473 25.5915 21.6576 26.25 20 26.25H10C8.3424 26.25 6.75269 25.5915 5.58058 24.4194C4.40848 23.2473 3.75 21.6576 3.75 20V10C3.75 8.3424 4.40848 6.75269 5.58058 5.58058C6.75269 4.40848 8.3424 3.75 10 3.75H20C21.6576 3.75 23.2473 4.40848 24.4194 5.58058C25.5915 6.75269 26.25 8.3424 26.25 10Z"
                      stroke="#2C261F"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.75 21.25V17.1875M13.75 17.1875V12.5M13.75 17.1875C13.75 12.5 21.25 12.5 21.25 17.1875V21.25M8.75 8.76253L8.7625 8.74878"
                      stroke="#2C261F"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
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
