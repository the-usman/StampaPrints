import React, { Fragment, useEffect } from "react";

import 'aos/dist/aos.css';
import AOS from 'aos';
import "./CBCPackingIdeal.css";

function CBCPackingIdeal() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Fragment>

      <div className="CBCPackingIdealwhole">
        <div className="row CBCPackingIdealwhole1" data-aos="zoom-in-down">
          <div
            className="col-12 col-sm-6 col-md-7 col-lg-7 CBCPackingIdealtext1">
            <div className="">
              <h3 className="mainHeadingH2">
                CBD Packaging: Artistic Designs,<br /> Essential Info: A case study
              </h3>
              <p className="ParagraphH2P">
                As the CBD industry rapidly expands, so does the competition
                to create innovative and attractive packaging designs. In
                order to stand out from the crowd, companies need to design
                packaging that is both visually appealing and provides
                essential information about the product.
              </p>
            </div>
            <div className="col  mt-3">
              <button
                className="btn btn-primary px-3 py-2"
                style={{
                  backgroundColor: " #9BC194",
                  border: "none",
                  borderRadius: "5px 5px 5px 5px",
                }}
              >
                Read In Detail
              </button>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-5 col-md-5 CBCPackingIdealimg imagehovercbd">
            <img
              className="imgforcbcideal img-fluid"
              src={require("./Rectangle 106.png")}
              alt=""
            />
          </div>
        </div>
        <div className="row ">
          <div className="col-12 col-sm-6 col-lg-5 col-md-5 CBCPackingIdealimg1 imagehovercbd" data-aos="zoom-in-down">
            <img
              className="imgforcbcideal img-fluid"
              src={require("./Rectangle 105.png")}
              alt=""
            />
          </div>
          <div className="ol-12 col-sm-6 col-md-7 col-lg-7 CBCPackingIdealtext1" >
            <div className="">
              <h3 className="mainHeadingH2">
                CBD Packaging: Artistic Designs,<br /> Essential Info: A case study
              </h3>
              <p className="ParagraphH2P">
                As the CBD industry rapidly expands, so does the competition
                to create innovative and attractive packaging designs. In
                order to stand out from the crowd, companies need to design
                packaging that is both visually appealing and provides
                essential information about the product.
              </p>
            </div>
            <div className="col">
              <button
                className="btn btn-primary px-3 py-2"
                style={{
                  backgroundColor: " #9BC194",
                  border: "none",
                  borderRadius: "5px 5px 5px 5px",
                }}
              >
                Read In Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default CBCPackingIdeal;
