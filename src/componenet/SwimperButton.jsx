// some-inner-component.jsx
import { React } from "react";
import { useSwiper } from "swiper/react";

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <div className="slider-btn">
      <button
        onClick={() => swiper.slideNext()}
        className="btn btn-light m-3 rounded-circle fs-4"
      >
        <i class="bi bi-chevron-left"></i>
      </button>
      <button onClick={() => swiper.slidePrev()} className="btn btn-light rounded-circle fs-4">
        <i class="bi bi-chevron-right"></i>
      </button>
    </div>
  );
}
