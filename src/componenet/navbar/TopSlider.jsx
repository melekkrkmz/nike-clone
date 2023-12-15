import React from "react";
import "../navbar/navbar.css";
import { Link } from "react-router-dom";

export default function TopSlider() {
  return (
    <div className="topSliderContainer">
      <ul>
        <li className="d-none">
          <span>Tüm Yeni Çıkan Ürünleri İncele</span>
          <button className="border-0 bg-transparent">
            <Link>incele</Link>
          </button>
        </li>
        <li className="d-flex">
          <span>Türk İthalat Mevzuatı</span>
          <p>
            150 € üzeri siparişlerin teslimi garanti edilemiyor.
            <button className="border-0 bg-transparent">
              <Link>Daha fazla bilgi..</Link>
            </button>
          </p>
        </li>
      </ul>
    </div>
  );
}
