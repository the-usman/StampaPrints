import React, { Fragment, useEffect } from "react";
import "./Footer.css";


function Footer(props) {
  useEffect(() => {
    console.log(props.heading)
  }, [])
  return (
    <Fragment>
      <div className="maincolor hamza pt-4 Pb-3 " style={{ background: "#3A776C", width: "100vw" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="footerleft">
                <div className=""><img
                  className="pb-2 "
                  style={{ height: "102px" }}
                  src={require("./stampaprints-white 1.png")}
                  alt="StampaPrints Logo"
                />
                </div>
                <div className="logotext ">
                  Stampa Prints transform your vision into reality through our
                  cutting-edge online custom printing and packaging services.
                  Experience the perfect blend of style, quality, and
                  professionalism for your brand.
                </div>
                <div className="  ">
                  <div className="icontext ">
                    <h6 className="m-0" style={{ fontSize: "15px", fontFamily: "Poppins" }}>
                      Do follow us:
                    </h6>
                  </div>
                  <div className="iconforfooter">
                    <a href="https://www.facebook.com/stampaprintsusa/" target="_blank">
                      <img src={require("./fb (1).png")} alt="" />

                    </a>
                    <a href="https://www.instagram.com/stampaprints/" target="_blank">
                      <img src={require("./insta.png")} alt="" />

                    </a>
                    <a href="https://www.linkedin.com/company/stampa-prints/" target="_blank">
                      <img src={require("./linkedin.png")} alt="" />

                    </a>
                    <a href="https://www.pinterest.com/stampapackaging/" target="_blank">
                      <img src={require("./pinterest.png")} alt="" />

                    </a>
                  </div>
                </div>
                {/* <div>
                  <div className="btntext">
                    <span>Sign up & get 10% off on your</span>
                    <p className="pb-2" style={{ color: props.color }}>{props.heading ? (props.heading) : "next order"}</p>
                  </div>
                  <div className="buttonhai">
                    <div>
                      <input
                        className="buttonsabc"
                        placeholder="Email Address"
                        type="text"
                      />
                    </div>
                    <div className="py-3">
                      <button className="butt">Subscribe</button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="col-md-2 col-sm-6 pt-4 ">
              <div>
                <p className="linkhead">Quick Links</p>
              </div>
              <div className="links">
                <ul>
                  <li>
                    <a href="about">About us</a>
                  </li>
                  <li>
                    <a href="ourblog">Blog</a>
                  </li>
                  <li>
                    <a href="FAQs">FAQs</a>
                  </li>
                  <li>
                    <a href="Portfolio">Our Portfolio</a>
                  </li>
                  <li>
                    <a href="privacy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="t">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 pt-4">
              <div>
                <p className="linkhead">Packaging Products</p>
              </div>
              <div className="links">
                <ul>
                  <li>
                    <a href="CBDPackaging">CBD Packaging</a>
                  </li>
                  <li>
                    <a href="kraft">Kraft Boxes</a>
                  </li>
                  <li>
                    <a href="pd2">Mailer Boxes</a>
                  </li>
                  <li>
                    <a href="pdh">Pre Roll Packaging</a>
                  </li>
                  <li>
                    <a href="samplerequest">Rigid boxes</a>
                  </li>
                  <li>
                    <a href="">Vape Cartridge Boxes</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 pt-4">
              <div>
                <p className="linkhead">Printing Products</p>
              </div>
              <div className="links">
                <ul>
                  <li>
                    <a href="psp">Booklet Printing</a>
                  </li>
                  <li>
                    <a href="lfo">Brochure Printing</a>
                  </li>
                  <li>
                    <a href="#">Carbon Less Forms</a>
                  </li>
                  <li>
                    <a href="#">Catalog Printing</a>
                  </li>
                  <li>
                    <a href="#">Comic Book Printing</a>
                  </li>
                  <li>
                    <a href="#">Magazine Printing</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 pt-4">
              <div>
                <p className="linkhead">Contact Us</p>
              </div>
              <div className="links">
                <ul>
                  <li>
                    <a href="#">Easton-PA 18040</a>
                  </li>
                  {/* <li>
                    <a href="cu">Contact Us</a>
                  </li> */}
                  <li>
                    <a href="mailto:sales@stampaprints.com">sales@stampaprints.com</a>

                  </li>
                  <li>
                    <a href="tel:+1-877-296-2937">1-877-296-2937</a>
                  </li>
                  <li>
                    <a href="#">Live Chat</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row  forfootermob pt-5">
            <div className="col-md-4 col-sm-12 text-start">
              <div className="paymenttext ">
                <h6 style={{ fontSize: "15px", fontFamily: "Poppins" }}>
                  Payment methods we accept:
                </h6>
              </div>
              <div className="paymenticon">
                <ul>

                  <a className="mr-1 me-2" href="#">
                    <img src={require("./v.png")} alt="Visa" />
                  </a>

                  <a className="mx-1" href="#">
                    <img className="" src={require("./m.png")} alt="Mastercard" />
                  </a>

                  <a className="mx-1" href="#">
                    <img src={require("./ma.png")} alt="Maestro" />
                  </a>



                  <a className="mx-1" href="#">
                    <img src={require("./p.png")} alt="Paypal" />
                  </a>

                </ul>
              </div>

              {/* <div className="icontext pb-1">
                <h6 style={{ fontSize: "15px", fontFamily: "Poppins" }}>
                  Do follow us:
                </h6>
              </div>
              <div className="iconforfooter">
                <a href="https://facebook.com" target="_blank">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com" target="_blank">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://linkedin.com" target="_blank">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://pinterest.com" target="_blank">
                  <i className="fa-brands fa-pinterest-p"></i>
                </a>
              </div> */}

            </div>
            <div className="col-md-3 col-sm-12 text-c enter mid-text textformbbb">
              {/* <h6 className="">
                Copyright © - 2023 Stampa Enterprise LLC. All Rights Reserved.
              </h6> */}
            </div>

            <div class="col-md-5 col-sm-12 text-end m-0 p-0 textformbbb">
              <div class="buttonhai d-flex justify-content-end pt-1">
                <div>
                  <input
                    class="buttonsabc"
                    placeholder="Sign up & get 10% off"
                    type="text"
                  />
                </div>
                <div class="ps-3 text-end">
                  <button class="butt">Subscribe</button>
                </div>
              </div>
            </div>

          </div>

          <hr style={{ marginTop: "0px" }} />
          <div className="row px-3 forfootermob">
            {/* <div className="col-md-3 col-sm-12 text-start">
              <div className="icontext pb-2">
                <h6 style={{ fontSize: "15px", fontFamily: "Poppins" }}>
                  Do follow us:
                </h6>
              </div>
              <div className="iconforfooter">
                <a href="https://facebook.com" target="_blank">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com" target="_blank">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://linkedin.com" target="_blank">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://pinterest.com" target="_blank">
                  <i className="fa-brands fa-pinterest-p"></i>
                </a>
              </div>

            </div> */}
            <div className="col col-sm-12 p-4 text-center enter mid-text textformbbb1">
              <h6 className="">
                Copyright © - 2023 Stampa Enterprise LLC. All Rights Reserved.
              </h6>
            </div>
            {/* <div className="col-md-3 col-sm-12 text-end textformbbb">
              <div className="paymenttext pb-2">
                <h6 style={{ fontSize: "15px", fontFamily: "Poppins" }}>
                  Payment methods we accept:
                </h6>
              </div>
              <div className="paymenticon">
                <ul>
                  <a className="mx-1" href="#">
                    <img className="imghoverfooter" src={require("./mastercard.png")} alt="Mastercard" />
                  </a>
                  <a className="mx-1" href="#">
                    <img src={require("./union-pay.png")} alt="UnionPay" />
                  </a>
                  <a className="mx-1" href="#">
                    <img src={require("./maestro.png")} alt="Maestro" />
                  </a>
                  <a className="mx-1" href="#">
                    <img src={require("./visa.png")} alt="Visa" />
                  </a>
                  <a className="mr-1" href="#">
                    <img src={require("./paypal.png")} alt="Paypal" />
                  </a>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;
