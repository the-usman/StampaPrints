import React, { useEffect } from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarSliderLable.css';
import Aos from "aos";
import "aos/dist/aos.css";
import image from "./banner-for-web-1 1.png";
import image1 from "./2.png"


const NavbarSliderLable = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <>
            <Carousel fade={true} controls={false} indicators={false} interval={1000}>
                {/* <Carousel fade={true} interval={1000}> */}
                <Carousel.Item>
                    <div>
                        <div className="container-fluid  background1">
                            <div className="row">
                                <div
                                    className="col-12 col-md-6 pt-4"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="100"
                                    data-aos-easing="ease-in-out"
                                    data-aos-mirror="true"
                                >
                                    <h1 className="mainHeadingHero1 mainHeadingHeroresponsive1" >
                                        Get Instant <br />
                                        Custom Packaging Solutions <br />
                                        & <br />
                                        Printing Services Online!
                                        {/* <p className="text-1">Get Instant</p>
              <p className="text-1">Custom Packaging Solutions</p>
              <p className="text-1">&</p>
              <p className="text-1">Printing Services Online!</p> */}
                                    </h1>
                                    <p
                                        className="py-2  mainHeadingHeroP"
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                    >
                                        With custom packaging and printing, you can create the perfect
                                        brand experience. You can expect complete customization, immediate
                                        quotes, and a quick turnaround from us!
                                    </p>
                                    <div className="btnformb1">
                                        <button className=" buttonforcolortop m-2" style={{ margin: "0.5rem!important" }}>Get A Quote</button>
                                        <button className=" buttonforcolortop2 m-2" style={{ margin: "0.5rem!important" }}>Start Exploring</button>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 image_banner img_banner1 pt-3 text-center" data-aos="fade-up">
                                    <img src={require("./12.png")} className="img-fluid imgestyleformb" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                {/* <Carousel.Item>
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
                                    <h1 className="mainHeadingHero1 mainHeadingHeroresponsive" >
                                        Get Instant <br />
                                        Custom Packaging Solutions <br />
                                        & <br />
                                        Printing Services Online!

                                    </h1>
                                    <p
                                        className="py-2  mainHeadingHeroP"
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                    >
                                        With custom packaging and printing, you can create the perfect
                                        brand experience. You can expect complete customization, immediate
                                        quotes, and a quick turnaround from us!
                                    </p>
                                    <div className="btnformb">
                                        <button className="Button_1 m-2" style={{ margin: "0.5rem!important" }}>Get A Quote</button>
                                        <button className="Button_2 m-2" style={{ margin: "0.5rem!important" }}>Start Exploring</button>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 image_banner imagebannerforheight pt-2 text-center" data-aos="fade-up">
                                    <img src={require("./new1.png")} alt="" className="img-fluid" style={{ paddingTop: "50px" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item> */}
                {/* <Carousel.Item>
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
                                    <h1 className="mainHeadingHero1" >
                                        Get Instant <br />
                                        Custom Packaging Solutions <br />
                                        & <br />
                                        Printing Services Online!
                                        
                                    </h1>
                                    <p
                                        className="py-2  mainHeadingHeroP"
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                    >
                                        With custom packaging and printing, you can create the perfect
                                        brand experience. You can expect complete customization, immediate
                                        quotes, and a quick turnaround from us!
                                    </p>
                                    <div className="btnformb">
                                        <button className="Button_1 m-2" style={{ margin: "0.5rem!important" }}>Get A Quote</button>
                                        <button className="Button_2 m-2" style={{ margin: "0.5rem!important" }}>Start Exploring</button>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 image_banner pt-2 text-center" data-aos="fade-up">
                                    <img src={require("./03 Home Page Hero banner 512 x 350.webp")} className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item> */}
            </Carousel>
            {/* </Carousel > */}
        </>
    )
}

export default NavbarSliderLable