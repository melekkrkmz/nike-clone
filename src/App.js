import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetalist from "./componenet/productDetalist/ProductDetalist";
import Footer from "./componenet/footer/Footer"
import Header from "./componenet/header/Header"
import Navbar from "./componenet/navbar/Navbar"








function App() {

  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/productDetail" element={<ProductDetalist />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
