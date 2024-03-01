import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './WorkProcess.css';

class WorkProcess extends Component {
  componentDidMount() {
    AOS.init({
      duration: 2000, // Set the duration for animations (in milliseconds)
    });
  }

  render() {
    return (
      <>
        <div className="forsmallscreen ">
          <div className="forsmallscreen1223 ">
            <h2 style={{ color: "#15555F", fontSize: "20px" }} data-aos="zoom-in">
              Navigating Through Our Seamless and Efficient Work Process

            </h2>
            <p style={{ color: "#7B7B7B", fontSize: "12px", fontWeight: "300px" }} data-aos="zoom-in">
              At Stampa Prints, we have meticulously designed and streamlined the custom box order process, ensuring a seamless and effortless experience for our valued customers. Our commitment to ease and efficiency sets us apart, making your journey with us convenient and straightforward
            </p>

            <div className="mainprocess pb-1 ">
              <div className="row responsiveRow">
                <div className="col-md-1 col-12 "></div>
                <div className="text-center col-md p-0 col-12" data-aos="fade-right">
                  <img

                    className="img-fluid imgforproces "
                    src={require("./1.png")}
                    alt=""
                  />


                  <h5 className="text-center mt-3 formobiletexthed">Choose Box Style</h5>
                  <p className="text-center formobiletexttt">
                    Specify the details for the printed box you chose, get an instant quote
                    from us.
                  </p>
                </div>
                <div className="danda col-md d-flex justify-content-center align-items-center col-12">
                  <img
                    className="img-fluid "
                    src={require("./dnda.png")}
                    alt=""
                  />
                </div>

                <div className="col-md p-0 col-12 text-center" data-aos="fade-right">
                  <img
                    className="img-fluid imgforproces "
                    src={require("./2.png")}
                    alt=""
                  />
                  <h5 className="text-center mt-3 formobiletexthed">Get Quote</h5>
                  <p className="text-center formobiletexttt">
                    Specify the details for the printed box you chose, get an instant quote
                    from us.
                  </p>
                </div>
                <div className="danda col-md d-flex justify-content-center align-items-center col-12">
                  <img
                    className="img-fluid imgforproces"
                    src={require("./dnda.png")}
                    alt=""
                  />
                </div>
                <div className="col-md p-0 col-12 text-center" data-aos="fade-right">
                  <img
                    className="img-fluid imgforproces "
                    src={require("./3.png")}
                    alt=""
                  />
                  <h5 className="text-center mt-3 formobiletexthed">Finalize Artwork</h5>
                  <p className="text-center formobiletexttt">
                    Specify the details for the printed box you chose, get an instant quote
                    from us.
                  </p>
                </div>

                <div className="danda col-md d-flex justify-content-center align-items-center col-12">
                  <img
                    className=""
                    src={require("./dnda.png")}
                    alt=""
                  />
                </div>
                <div className="col-md p-0 col-12 text-center" data-aos="fade-right">
                  <img
                    className="img-fluid imgforproces"
                    src={require("./4.png")}
                    alt=""
                  />
                  <h5 className="text-center mt-3 formobiletexthed">Ready For Shipment</h5>
                  <p className="text-center formobiletexttt">
                    Specify the details for the printed box you chose, get an instant quote
                    from us.
                  </p>
                </div>
                <div className="col-md-1 col-12"></div>
              </div>
            </div>
          </div>
        </div>



        <div className="forbigscreenworkprocess">
          <div className="">
            <h2 className="mainHeadingH2" style={{}} data-aos="zoom-in">
              Navigating Through Our Seamless and Efficient Work Process
            </h2>
            <p className="forprocessparagraph ParagraphH2P" data-aos="zoom-in">
              At Stampa Prints, we have meticulously designed and streamlined the custom box order process, ensuring a seamless and effortless experience for our valued customers. Our commitment to ease and efficiency sets us apart, making your journey with us convenient and straight forward.
            </p>
          </div>
          <div className="container">
            <div className="d-flex align-items-center justify-content-center">

              <div className="imgforproces" data-aos="fade-right"><img src={require("./1.png")} alt="" /></div>
              <div className="images1" data-aos="fade-left "><img src={require("./dnda.png")} alt="" /></div>


              <div className="imgforproces" data-aos="fade-right"><img src={require("./2.png")} alt="" /></div>
              <div className="images1" data-aos="fade-left"><img src={require("./dnda.png")} alt="" /></div>
              <div className="imgforproces" data-aos="fade-right"><img src={require("./3.png")} alt="" /></div>
              <div className="images1" data-aos="fade-left"><img src={require("./dnda.png")} alt="" /></div>
              <div className="imgforproces" data-aos="fade-right"><img src={require("./4.png")} alt="" /></div>
            </div>
          </div>
          <div className="d-flex mx-5 justify-content-center">
            <div className=" ps-5 pe-4 ms-5" data-aos="fade-up">
              <h5 className="text-center mt-3 forbigtextproceshd">Choose Box Style</h5>
              <p className="text-center formobiletextprcess">
                Specify the details for the printed <br /> box you chose
              </p>
            </div>
            <div className="pe-5 ps-3" data-aos="fade-up">
              <h5 className="text-center mt-3 forbigtextproceshd">Get Quote</h5>
              <p className="text-center formobiletextprcess">
                Specify the details for the printed <br /> box you chose
              </p>
            </div>
            <div className="pe-5" data-aos="fade-up">
              <h5 className="text-center mt-3 forbigtextproceshd">Finalize Artwork</h5>
              <p className="text-center formobiletextprcess">
                Specify the details for the printed <br /> box you chose
              </p>
            </div>
            <div className=" me-5 pe-5 " data-aos="fade-up">
              <h5 className="text-center mt-3 forbigtextproceshd">Ready For Shipment</h5>
              <p className="text-center formobiletextprcess">
                Specify the details for the printed <br /> box you chose
              </p>
            </div>
          </div>
        </div>

      </>
    );
  }
}

export default WorkProcess;
