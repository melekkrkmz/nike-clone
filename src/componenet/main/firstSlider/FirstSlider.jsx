import React, { useEffect, useState } from "react";
import "../firstSlider/firstSlider.css";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import SlideNextButton from "../../SwimperButton";
import { SliderApi } from "../../../api/slideContent";
import { Link } from "react-router-dom";

export default function FirstSlider() {
  
  const [product, setProduct] = useState([]);

  console.log("product state", product);

  useEffect(() => {
    const call = async () => {
      const productRequest = await fetch(SliderApi);
      const productResponse = await productRequest.json();

      setProduct(productResponse);
      console.log(productResponse);
    };

    call();
  }, []);

  return (
    <>
      <div className="title-box">
        <h4>Bu Haftanın Trend Ürünleri</h4>
        <SlideNextButton></SlideNextButton>
      </div>
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
        {SliderApi.map((product) => {
          return (
            <SwiperSlide className="res-slide">
              <Link to={"/productDetail"}>
                <div className="card">
                  <img
                    className="card-img-top"
                    src={product.img}
                    alt={product.name}
                  />
                  <div id="card-content" clasName="card-content">
                    <h4>{product.name}</h4>
                    <h5>{product.category}</h5>
                    <p className="card-text">{product.price}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
