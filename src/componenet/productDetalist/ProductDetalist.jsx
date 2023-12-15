import React, { useEffect } from "react";
import "../productDetalist/product.css";
import { Link, useParams } from "react-router-dom";
import FirstSlider from "../main/firstSlider/FirstSlider";
import { SliderApi } from "../../api/slideContent";

export default function ProductDetalist() {
  const { id } = useParams();

  useEffect(() => {
    const apiCall = async () => {
      try {
        const endpoint = SliderApi
        const request = await fetch(endpoint);
        const response = await request.json();
        console.log("apiden gelen",response);
      } catch (error) {
        console.error(error);
      }
    };

    apiCall();
  }, [id]);

  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-8 d-flex">
          <div className="mini-img-containerr">
            <div className="mini-img">
              <img src="" alt="" />
            </div>
          </div>
          <div className="show-img">
            <img src="" alt="" />
          </div>
        </div>
        <div className="col-4">
          <div className="product-title">
            <h2 className="title">Başlık</h2>
            <h4 className="category">kadın</h4>
            <div className="price">3500</div>
          </div>

          <div className="diffrent-product d-flex flex-row">
            <div className="mini-img">
              <img src="" alt="" />
            </div>
          </div>
          <div className="size">
            <div className="size-content d-flex justify-content-between my-2">
              <span>Numara/Beden Seç</span>
              <span>Numara/Beden Seç</span>
            </div>
            <div className="size-number">
              <div className="size-box"></div>
            </div>
          </div>
          <div className="add-btn d-flex flex-column">
            <button className="btn btn-dark my-2 p-3 rounded-pill">
              Sepete Ekle
            </button>
            <button className="btn btn-light border border-dark p-3 rounded-pill">
              Favori
            </button>
          </div>
          <span>
            <p className="my-4">description</p>
            <ul>
              <li>Gösterilen Renk: Siyah/Siyah/Beyaz</li>
              <li>Stil: DQ5601-001</li>
            </ul>
            <Link>Ürün Ayrıntılarını Görüntüle</Link>
          </span>
        </div>
      </div>
      <div className="row my-3">
        <div className="container lh-3">
          <h3>Başkalarından stil ipuçları.</h3>
          <span>
            Öne çıkma şansı için fotoğrafını yükle veya Instagram'da @Nike'tan
            bahset.
          </span>
          <div>
            <button
              style={{ width: "130px" }}
              className="btn btn-light border border-dark rounded-pill"
            >
              Fotoğraf Ekle
            </button>
          </div>
        </div>
      </div>

      <FirstSlider></FirstSlider>
    </div>
  );
}
