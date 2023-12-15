import React from "react";
import "../navbar/navbar.css";
import TopSlider from "./TopSlider";
import DropDown from "../DropDown/DropDown";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="left-logo">
          <img src="./resimler/pngegg.png" alt="nike-icon" />
        </div>
        <div className="dropdown">
          <DropDown></DropDown>
        </div>
        <div className="rigth-nav d-flex">
          <div className="search-input">
            <span>
              <i class="bi bi-search"></i>
            </span>
            <input type="text" placeholder="Ara" />
          </div>
          <div className="fs-5">
            <button className="border-0 bg-transparent">
              <i className="bi bi-suit-heart"></i>
            </button>
          </div>
          <div className="fs-5">
            <button className="border-0 bg-transparent">
              <i class="bi bi-bag"></i>
            </button>
          </div>
        </div>
      </nav>
      <TopSlider></TopSlider>
    </>
  );
}
