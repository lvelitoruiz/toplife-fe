import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Slide from "./Slide";

import queryFunctions from "../utils/queryFunctions";

const slider = () => {
  const [slideData, setSlideData] = useState<any>([]);

  const getSlideData = async () => {
    const data = await queryFunctions(
      "https://top-life-backend-805c2a56b99a.herokuapp.com/api/initial-banners"
    );
    let dataProd = JSON.parse(data);
    setSlideData(dataProd.data);
  };

  useEffect(() => {
    getSlideData();
  }, []);

  return (
    <section className="bg-[#F1F1F1] h-screen">
      <Swiper
        modules={[EffectFade, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ el: ".swiper-pagination" }}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        scrollbar={{ draggable: true }}
      >
        {slideData !== undefined &&
          slideData !== null &&
          slideData.length > 0 &&
          slideData.map((item: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <Slide
                  BannerPrice={item.attributes.BannerPrice.data.attributes.url}
                  BannerMobile={item.attributes.BannerMobile.data.attributes.url}
                  Banner1={item.attributes.Banner1.data.attributes.url}
                  title={item.attributes.title}
                  subtitle={item.attributes.subtitle}
                  priceText={item.attributes.priceText}
                  price={item.attributes.price}
                  perks={item.attributes.perks}
                  legal={item.attributes.legal}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div className="swiper-banner">
        <span className="text-sm text-white lg:text-[#2C261F] p-0 leading-none font-medium z-10">
          01
        </span>
        <div className="swiper-pagination"></div>
        <span className="text-sm text-white lg:text-[#2C261F] p-0 leading-none font-medium z-10">
          0{ slideData.length }
        </span>
      </div>
    </section>
  );
};

export default slider;
