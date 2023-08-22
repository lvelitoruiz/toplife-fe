import React, { useEffect, useState } from "react";

import Proyecto2 from "../images/proyecto-2.svg";
import queryFunctions from "../utils/queryFunctions";

const Characteristics = () => {
  const [features, setFeatures] = useState<any>(null);

  const getFeatures = async () => {
    const data = await queryFunctions(
      "https://top-life-backend-805c2a56b99a.herokuapp.com/api/characteristics/1"
    );
    let dataProd = JSON.parse(data);
    setFeatures(dataProd.data.attributes);
  };

  useEffect(() => {
    getFeatures();
  }, []);

  return (
    <section className="bg-[#F1F1F1] pt-20">
      {features !== undefined && features !== null ? (
        <div className="px-4 lg:px-[100px]">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between pb-5">
            <h2 className="text-[20px] md:text-[26px] text-center md:text-left pb-8 md:pb-0">
              {features.title} <br />{" "}
              <span className="font-medium">{features.subtitle}</span>
            </h2>
            <div className="flex items-center gap-6">
              <div className="flex items-center justify-center flex-col">
                <p className="text-[#2C261F] font-medium text-[40px] leading-none">
                  {features.pisos}
                </p>
                <p className="leading-none text-[#9B8F86] text-[20px]">PISOS</p>
              </div>
              <div className="bg-[#D9D9D9] w-[1px] h-[45px] mb-4"></div>
              <div className="flex items-center justify-center flex-col">
                <p className="text-[#2C261F] font-medium text-[40px] leading-none">
                  {features.departamentos}
                </p>
                <p className="leading-none text-[#9B8F86] text-[20px]">DPTO</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-end justify-between gap-[10px] md:gap-10 pb-20 md:pb-0">
            <div className="flex items-center justify-center gap-[10px] md:gap-[30px] flex-col md:pb-20 w-full lg:w-fit">
              {features.features
                .slice(0, 5)
                .map((feature: any, index: number) => {
                  return (
                    <div
                      className="bg-[#42B0CD] w-10/12 md:w-full lg:w-[350px] h-[98px] p-4 flex items-center gap-4"
                      key={index}
                    >
                      <i
                        className={`${feature.icon} text-[40px] text-white`}
                      ></i>
                      <p className="font-sm text-white pt-2 font-medium">
                        {feature.text}
                      </p>
                    </div>
                  );
                })}
            </div>
            <div className="max-w-[415px] hidden lg:block">
              <img src={Proyecto2} alt="" />
            </div>
            <div className="flex items-center justify-center gap-[10px] md:gap-[30px] flex-col md:pb-20 w-full lg:w-fit">
            {features.features
                .slice(5, 10)
                .map((feature: any, index: number) => {
                  return (
                    <div
                      className="bg-[#42B0CD] w-10/12 md:w-full lg:w-[350px] h-[98px] p-4 flex items-center gap-4"
                      key={index}
                    >
                      <i
                        className={`${feature.icon} text-[40px] text-white`}
                      ></i>
                      <p className="font-sm text-white pt-2 font-medium">
                        {feature.text}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Characteristics;
