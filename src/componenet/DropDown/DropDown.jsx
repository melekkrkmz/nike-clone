import React from "react";
import "../DropDown/dropDown.css"; // Stilleri içe aktarmak için gereken CSS dosyası
import { Link } from "react-router-dom";

const Dropdown = () => {
  const dropdownItems = [
    "Yeni Ürünler Ve Öne Çıkanlar",
    "Erkek",
    "Kadın",
    "Çocuk",
    "İndirim",
  ]; // Dropdown içindeki kategoriler
  

  return (
    <div className="dropdown">
      {dropdownItems.map((btnItem, index) => (
        <button className="dropbtn" key={index}>
         {btnItem}
        </button>
      ))}

      <div className="dropdown-content row">
        
          <div className="col">
            <Link>
              <h5>Öne Çıkanlar</h5>
            </Link>
            <Link>kategoriler</Link>
            <Link>kategoriler</Link>
            <Link>kategoriler</Link>
            <Link>kategoriler</Link>
          </div>
          <div className="col">
            <Link>
              <h5>Öne Çıkanlar</h5>
            </Link>
            <Link>kategoriler</Link>
            <Link>kategoriler</Link>
            <Link>kategoriler</Link>
            <Link>kategoriler</Link>
          </div>
          <div className="col">
            <Link>
              <h5>Öne Çıkanlar</h5>
            </Link>
            <Link>kategoriler</Link>
            <Link>kategoriler</Link>
            <Link>kategoriler</Link>
            <Link>kategoriler</Link>
          </div>
      
      </div>
    </div>
  );
};

export default Dropdown;
