import React from "react";
import "../header/header.css"
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header ">
      <div className="Jordan-Logo"><img src="./resimler/Jordan Logo Jumpman Nike Icons.png" alt=" Logo Jumpman" /></div>
      <div className="rigt-header-content ">
        <ul>
          <div className="header-list"><Link to={"#"}>Mağaza Bul</Link><span>|</span></div>
          <div className="header-list"><Link to={"#"}>Yardım</Link> <span>|</span></div>
          <div className="header-list"><Link to={"#"}>Bize Katıl</Link><span>|</span></div>
          <div className="header-list"> <Link to={"#"}>Oturum Aç</Link></div>
        
        </ul>
      </div>
    </div>
  );
}
