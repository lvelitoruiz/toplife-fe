import React from "react";

import LogoVal from "../images/logo-val.svg";
import LogoTorre from "../images/logo-torre.svg";
import LogoValWhite from "../images/logo-val-white.svg";
import LogoTorreWhite from "../images/logo-torre-white.png";

interface SlideProps {
  BannerPrice: string;
  BannerMobile: string;
  Banner1: string;
  title: string;
  subtitle: string;
  priceText: string;
  price: string;
  perks: { icon: string; text: string }[];
  legal: string;
}

const Slide = ({
  BannerPrice,
  BannerMobile,
  Banner1,
  title,
  subtitle,
  priceText,
  price,
  legal,
  perks,
}: SlideProps) => {
  return (
    <div className="swiper-slide">
      <div className="flex">
        <div className="absolute lg:relative lg:w-5/12 z-10">
          <div className="fade-content2 h-screen">
            <div className="h-screen flex flex-col justify-between px-4 lg:pl-[100px] pt-[120px] lg:pt-[180px] pb-4 lg:pb-16">
              <div className="w-10/12 md:w-9/12 flex flex-col items-start">
                <h2 className="mb-6 text-white lg:text-[#2C261F] text-[50px] md:text-[70px] leading-none uppercase pt-2">
                  {title}
                  <span className="text-[#42B0CD] font-medium">{subtitle}</span>
                </h2>
                <div className="mb-7 relative flex items-center">
                  <img className="hidden lg:block" src={BannerPrice} alt="" />
                  <img className="lg:hidden" src={BannerMobile} alt="" />
                  <div className="absolute left-[20px] pt-3">
                    <p className="text-white lg:text-[#2C261F] text-sm lg:text-base uppercase mb-2 leading-none">
                      {priceText}
                    </p>
                    <p className="text-white lg:text-[#2C261F] text-[30px] lg:text-[35px] leading-none">
                      {price}
                    </p>
                  </div>
                </div>
                <a
                  className="font-medium h-[50px] bg-[#42B0CD] text-white px-10 uppercase flex items-center shadow-[0_10px_20px_0_rgba(66,176,205,0.20)]"
                  href="#form"
                >
                  <span className="pt-2">¡Cotizar ahora!</span>
                </a>
              </div>
              <div className="bg-[#00000080] lg:bg-transparent lg:w-9/12 lg:border-t lg:border-[#D9D9D9] p-4 lg:px-0 lg:pb-0 pt-5">
                <p className="text-sm text-white lg:text-[#2C261F] pt-2">
                  Promueve y construye:
                </p>
                <div className="flex items-center gap-10 mt-4">
                  <img
                    className="h-[30px] hidden lg:inline-block"
                    src={LogoVal}
                    alt=""
                  />
                  <img
                    className="h-[70px] hidden lg:inline-block"
                    src={LogoTorre}
                    alt=""
                  />
                  <img
                    className="h-[30px] lg:hidden"
                    src={LogoValWhite}
                    alt=""
                  />
                  <img
                    className="h-[50px] lg:hidden"
                    src={LogoTorreWhite}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-7/12 h-screen relative before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-[#00000080] lg:before:bg-transparent">
          <img className="w-full h-full object-cover" src={Banner1} alt="" />
          <div className="absolute hidden lg:block bottom-5 left-5">
            <span className="bg-[#2C261F] px-4 pb-1 pt-3 text-white inline-block leading-none">
              Preventa
            </span>
            <div className="bg-[#42B0CD] flex items-center justify-center mt-4">
              {perks !== undefined &&
                perks !== null &&
                perks.map((perk, index) => {
                  return (
                    <div className="w-[96px] h-[96px] text-center flex items-center flex-col justify-center" key={index}>
                      <i className={`${perk.icon} text-white text-[40px]`}></i>
                      <p className="text-white text-xs pt-2">
                        {perk.text}
                      </p>
                    </div>
                  );
                })}
            </div>
            <p className="text-[#2C261F] text-xs mt-2 pt-2">{legal}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
