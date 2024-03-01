import React, { useEffect } from "react";
import "./Bannertop.css";
import image from "./cbd.png";
import Aos from "aos";
import "aos/dist/aos.css";


function Bannertop() {
  useEffect(() => {
    Aos.init();
  }, []);


  return (
    <div>
      <div className="container-fluid background">
        <div className="row">
          <div
            className="col-12 col-md-6 pt-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
          >
            <h1 className="mainHeadingHerocbd " >
              Elevate Your Brand <br />
              with Unique CBD   <br />

              Packaging
              {/* <p className="text-1">Get Instant</p>
              <p className="text-1">Custom Packaging Solutions</p>
              <p className="text-1">&</p>
              <p className="text-1">Printing Services Online!</p> */}
            </h1>
            <p
              className="py-2  mainHeadingHeroP mainHeadingHeroPb"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              With custom packaging and printing, you can create the perfect
              brand experience. You can expect complete customization, immediate
              quotes, and a quick turnaround from us!
            </p>
            <div className="btnformb">
              <button className="Button_1 buttonforcolortop me-2" style={{ margin: "0.5rem!important" }}>Get A Quote</button>
              <button className="Button_2 m-2" style={{ margin: "0.5rem!important" }}>Start Exploring</button>
            </div>
          </div>
          <div className="col-12 col-md-6 image_banner pt-3 text-center" data-aos="fade-up">
            <img src={image} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bannertop;
