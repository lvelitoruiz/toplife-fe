import React, { useEffect, useState } from "react";
import queryFunctions from "../utils/queryFunctions";

const Ubication = () => {
  const [ubication, setUbication] = useState<any>({});

  const getImage = async () => {
    const data = await queryFunctions("https://top-life-backend-805c2a56b99a.herokuapp.com/api/ubications");
    let dataProd = JSON.parse(data);
    setUbication(dataProd.data[0].attributes);
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <section>
      <div className="flex flex-col lg:flex-row items-start">
        <div className="w-full lg:w-4/12">
          <div className="px-4 pb-10 lg:pb-0 lg:pl-20 pt-20 lg:pr-16">
            <h2 className="text-[20px] md:text-[26px] text-left pb-6 md:pb-8">
              {ubication.title}
            </h2>
            <div className="border-b border-[#D9D9D9] flex items-center pb-6">
              <p className="text-[#9B8F86] text-sm">{ubication.description}</p>
            </div>
            <div className="py-8">
              <h4 className="text-[#F09B3C] uppercase text-sm">
                {ubication.subtitle1}
              </h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="min-w-[5px] min-h-[5px] bg-[#9B8F86] rounded-full"></span>
                <p className="text-sm text-[#9B8F86] leading-none pt-2">
                  {ubication.description2}
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-[#F09B3C] uppercase text-sm">
                {ubication.subtitle2}
              </h4>
              <div className="flex items-center gap-6 mt-3">
                <a
                  className="w-full h-[50px] border-2 border-[#42B0CD] text-[#42B0CD] font-medium flex items-center justify-center uppercase text-sm"
                  href=""
                >
                  <span className="pt-2">{ubication.button1}</span>
                </a>
                <a
                  className="w-full h-[50px] border-2 border-[#42B0CD] text-[#42B0CD] font-medium flex items-center justify-center uppercase text-sm"
                  href=""
                >
                  <span className="pt-2">{ubication.button2}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-8/12">
          <div className="w-full h-[512px] lg:h-[612px] bg-[#D9D9D9] relative">
            <div className="absolute bottom-4 left-4 right-4 md:right-auto lg:bottom-8 lg:left-8">
              <div className="flex items-center bg-white overflow-auto">
                <button className="font-medium text-sm w-full px-7 h-[65px] flex items-center justify-center text-white bg-[#42B0CD] gap-2">
                  <i className="icon-shop text-2xl text-white"></i>
                  <span className="pt-3 whitespace-nowrap">COMERCIOS</span>
                </button>
                <button className="font-medium text-sm w-full px-7 h-[65px] flex items-center justify-center text-[#8B8986] gap-2">
                  <i className="icon-bank text-2xl text-[#8B8986]"></i>
                  <span className="pt-3 whitespace-nowrap">BANCOS</span>
                </button>
                <button className="font-medium text-sm w-full px-7 h-[65px] flex items-center justify-center text-[#8B8986] gap-2">
                  <i className="icon-hospital text-2xl text-[#8B8986]"></i>
                  <span className="pt-3 whitespace-nowrap">
                    CENTROS MÉDICOS
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ubication;
