import React, { useEffect } from "react";
import "./BannertopCatagary.css";
import image from "./cataHomePageHerobanner.png";
import Aos from "aos";
import "aos/dist/aos.css";


function BannertopCatagary({ data }) {
  const { heading, desc, image } = data;
  useEffect(() => {
    Aos.init();
  }, []);


  return (
    <div>
      <div className="container-fluid backgroundbtc">
        <div className="row">
          <div
            className="col-12 col-md-6 col-sm-6 col-lg-6 pt-4 textareabtc"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
          >
            <h1 className="mainHeadingHerocatagary mainHeadingHero" >
              {heading}

              {/* Elevate Your Brand <br />
              with Unique CBD   <br />
              Packaging */}
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
              {desc}
            </p>

            <div className="">
              <button className="Button_1 buttonforcolortop me-2" style={{ margin: "0.5rem!important" }}>Get A Quote</button>
              <button className="Button_2 m-2" style={{ margin: "0.5rem!important" }}>Start Exploring</button>
            </div>
          </div>
          <div className="col-12 col-md-6 col-sm-6 col-lg-6 image_banner pt-3 text-center" data-aos="fade-up">
            <img src={image} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannertopCatagary;
