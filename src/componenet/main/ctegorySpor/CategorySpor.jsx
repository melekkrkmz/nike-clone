import React from "react";
import { catgory } from "../../../api/sporCategoyApi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";

export default function CategorySpor() {
  return (
    <>
      <h4 className="m-5">Spora Göre İncele</h4>
      <Swiper
        className="container"
        // install Swiper modules
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView="auto"
        navigation
        scrollbar={{ hide: true }}
        onSlideChange={() => console.log("slide change")}
      >
        {catgory.map((product,index) => {
          return (
            <SwiperSlide key={index} className="res-slide">
              <div className="card">
                <img
                  src={product.img}
                  className="card-img-top"
                  alt={product.category}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.category}</h5>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
