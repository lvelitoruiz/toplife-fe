import React, { useEffect, useState } from "react";
import queryFunctions from "../utils/queryFunctions";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

interface galleryProps {
  activeTab: boolean;
  onOpenModal: (typeAssign: string, sourceAssign: string) => void;
}

const ViewGallery = ({ activeTab, onOpenModal }: galleryProps) => {
  const [images, setImages] = useState<any>([]);

  const getImages = async () => {
    const data = await queryFunctions("https://top-life-backend-805c2a56b99a.herokuapp.com/api/commons");
    let dataProd = JSON.parse(data);
    setImages(dataProd.data[0].attributes.gallery.data);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div data-tab="2" className={`tab-content ${activeTab ? "active" : ""}`}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={3}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {images !== null && images !== undefined
          ? images.map((image: any, index: number) => {
              return (
                <SwiperSlide key={index} className="swiper-slide">
                  <div className="h-[444px]" onClick={(event) => onOpenModal('image',image.attributes.url)}>
                    <img
                      className="w-full h-full object-cover"
                      src={image.attributes.formats.small.url}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              );
            })
          : null}
      </Swiper>
    </div>
  );
};

export default ViewGallery;
