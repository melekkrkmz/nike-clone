import React from "react";
import "../genderCard/genderCard.css";

export default function Gender() {
  return (
    <div>
      <div className="gender-title m-5">
        <h4>Daha Fazla Hediye Keşfet</h4>
      </div>
      <div className="container d-flex">
        <div id="card" className="women-card  position-relative m-2">
          <button className="btn btn-light fs-5">Kadın</button>
        </div>

        <div id="card" className="men-card m-2">
          <button className="btn btn-light  fs-5">Erkek</button>
        </div>

        <div id="card" className="child-card m-2">
          <button className="btn btn-light fs-5">Çocuk</button>
        </div>
      </div>
    </div>
  );
}
