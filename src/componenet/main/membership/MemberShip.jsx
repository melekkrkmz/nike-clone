import React from "react";
import { memmberShip } from "../../../api/membership";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";

export default function MemberShip() {
  return (
    <>
      <div className="container">
        <h4 className="m-5">Nike Üyeliği</h4>
        <Swiper
          className="container"
          // install Swiper modules
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView="auto"
          navigation
          scrollbar={{ hide: true }}
          onSlideChange={() => console.log("slide change")}
        >
          {memmberShip.map((item) => {
            return (
              <SwiperSlide className="res-slide">
                <div className="card text-bg-dark">
                  <img
                    style={{ height: "450px", width: "450px" }}
                    src={item.img}
                    className="card-img"
                  />
                  <div
                    style={{ bottom: "30px", left: "30px" }}
                    className="card-img position-absolute "
                  >
                    <p className="card-text">
                      <h5>{item.content}</h5>
                    </p>
                    <h4>{item.text}</h4>
                    <button className="btn btn-light">
                      {item.buttonContent}
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
