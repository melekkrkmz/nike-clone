import React from "react";
import "../discoverPP/discover.css";

export default function DiscoverApp() {
  return (
    <div className="container m-5">
      <h4 className="my-5">Uygulamalarımızı Keşfet</h4>
      <div className="discover-app d-flex justify-content-around">
        <div className="nikeApp mx-2 ">
          <div className="app-content">
            <p className="fs-5">Senin Neyin Hrakete Geçirdiğini Keşfet</p>
            <button className="btn btn-light rounded-pill">Nike App</button>
          </div>
        </div>
        <div className="nikeApp-tarainin mx-2  ">
          <div className="app-content">
            <p className="fs-5">Yüzlerce Antreman, Nefes Çalışması ve Daha Fazlası</p>
            <button className="btn btn-light rounded-pill">Nike Training Clup</button>
          </div>
        </div>
      </div>
    </div>
  );
}
