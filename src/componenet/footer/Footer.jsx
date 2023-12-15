import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../footer/footer.css"
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <div>
    <MDBFooter className="text-center mt-2 " color="white" bgColor="dark">
      <MDBContainer
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        className="p-2  row"
      >
        <section className="mb-4 col-10">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    MAĞAZA BUL
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    NIKE JOURNAL
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    ÜYE OL
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    GERİ BİLDİRİM
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    PROMOSYON KODLARI
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h6 className="text-uppercase">YARDIM AL</h6>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Sipariş Durumu
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Kargo ve Teslimat
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    İadeler
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Ödeme Seçenekleri
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Bize Ulaşın
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h6 className="text-uppercase">NIKE HAKKINDA</h6>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Haberler
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Kariyer
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Yatırımcılar
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Sürdürülebilirlik
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Amac
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h6 className="text-uppercase">BIZE KATIL</h6>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Nike App
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Nike Run Club
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Nike Training Club
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    SNKRS
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>

        <section className="mb-4 col-2">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1 rounded-circle"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1 rounded-circle"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1 rounded-circle"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1 rounded-circle"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="youtube" />
          </MDBBtn>
        </section>
      </MDBContainer>
    </MDBFooter>

    </div>
  );
}
