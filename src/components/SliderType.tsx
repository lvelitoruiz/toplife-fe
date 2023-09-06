import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperRef } from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import queryFunctions from "../utils/queryFunctions";

interface sliderProperties {
  type: string;
  onSliderChange: (value: number) => void;
}

const SliderType = ({ type = "1", onSliderChange }: sliderProperties) => {
  const [depas, setDepas] = useState<any>([]);

  const [swiperRef, setSwiperRef] = useState<SwiperRef>();

  const getSlideData = async () => {
    const data = await queryFunctions(
      "https://top-life-backend-805c2a56b99a.herokuapp.com/api/tipo-depas"
    );
    let dataProd = JSON.parse(data);
    console.log(dataProd.data);
    setDepas(dataProd.data);
  };

  useEffect(() => {
    getSlideData();
  }, []);

  useEffect(() => {
    console.log(swiperRef);
    if (swiperRef !== null && swiperRef !== undefined) {
      swiperRef.slideTo(parseInt(type) -1);
    }
  }, [type]);

  return (
    <Swiper
      onSwiper={setSwiperRef}
      modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      onSlideChange={ index =>  onSliderChange(index.snapIndex) }
    >
      {depas !== null && depas !== undefined
        ? depas.map((depa: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <div className="bg-[#F1F1F1] gap-10 md:gap-0 relative md:min-h-[584px] flex-col items-center flex justify-between p-4">
                  <div>
                    <img
                      className="md:h-[428px]"
                      src={depa?.attributes?.plane?.data?.attributes?.url}
                      alt=""
                    />
                  </div>
                  <div className="absolute bottom-[110px] right-4 flex items-center gap-2">
                    <button className="w-10 h-10 flex items-center justify-center border-2 border-[#42B0CD]">
                      <i className="icon-download text-[#42B0CD] text-xl"></i>
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center border-2 border-[#42B0CD]">
                      <i className="icon-share text-[#42B0CD] text-xl"></i>
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center border-2 border-[#42B0CD]">
                      <i className="icon-download text-[#42B0CD] text-xl"></i>
                    </button>
                  </div>
                  <div className="bg-white flex items-center gap-2 lg:gap-0 lg:justify-between h-[78px] w-full px-4">
                    <p className="text-[#42B0CD] text-sm font-medium lg:text-2xl pt-2 lg:pt-3 whitespace-nowrap">
                      {depa.attributes.title}
                    </p>
                    <div className="items-center gap-3 hidden lg:flex">
                      <i className="icon-dormitorio text-4xl"></i>
                      <div className="pt-2">
                        <p className="text-[10px]">DORMITORIOS</p>
                        <p className="text-xs font-medium">
                          {depa.attributes.dorms}
                        </p>
                      </div>
                    </div>
                    <div className="items-center gap-3 hidden lg:flex">
                      <div className="pt-2">
                        <div className="flex justify-between items-center gap-2">
                          <p className="text-[11px]">ÁREA TECHADA APROX.</p>
                          <p className="text-xs font-medium">
                            {depa.attributes.techado}
                          </p>
                        </div>
                        <div className="flex justify-between items-center gap-2">
                          <p className="text-[11px]">ÁREA SIN TECHADA APROX.</p>
                          <p className="text-xs font-medium">
                            {depa.attributes.libre}
                          </p>
                        </div>
                        <div className="flex justify-between items-center gap-2">
                          <p className="text-[11px]">ÁREA OCUPADA APROX.</p>
                          <p className="text-xs font-medium">
                            {depa.attributes.ocupada}
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-[#2C261F] text-sm lg:hidden pt-2">
                      {depa.attributes.mobile}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })
        : null}
      <div className="swiper-arrow-plano">
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </Swiper>
  );
};

export default SliderType;
