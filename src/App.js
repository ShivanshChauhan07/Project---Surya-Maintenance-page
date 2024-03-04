import { Outlet } from "react-router-dom";
import "./App.css";
import Breif from "./component/Breif";
import Carousel from "./component/Carousel";
import Clients from "./component/Clients";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Services from "./component/Services";
import SmallCarousel from "./component/SmallCarousel";
import data from "./util/imageData";
import data2 from "./util/imageData2";
import data3 from "./util/imageData3";
import FaceDetection from "./component/FaceDetection";

function App() {
  return (
    <div className="App font-rob ">
      {/* <Header /> */}
      <Carousel data={data} />
      <Breif />
      <Services />
      <div className="bg-hero bg-cover bg-no-repeat text-center p-4">
        <h1 className="relative font-bold text-5xl text-white my-11">
          Service That Can Be Trusted !
        </h1>
        <div className="flex items-center overflow-hidden p-4 my-16">
          <SmallCarousel data={data2} />
        </div>
      </div>
      {/* <Footer /> */}
      <FaceDetection />
    </div>
  );
}

export default App;
