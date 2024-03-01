import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


import './CustomPackage.css';

function CustomPackage() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Set the duration for animations (in milliseconds)
        });
    }, []);

    return (

        <>
            {/* <div className="pt-5 pb-2 forbigscreencustompakages">
        <h2 className='text-center mb-5 cpcolor'>Let Us Design & Print Your Custom Packaging Boxes For You!</h2>
        <div className="container">
          <div className="main123  mb-5 ">
            <div className="main1">
              <img className="main1img1 imgimgimg" data-aos="fade-up" src={require("./Images/2.png")} alt="" />

              <img className="main1img2 imgimgimg " data-aos="fade-up" data-aos-delay="200" src={require("./Images/3.png")} alt="" />

            </div>
            <div className="main2 imgimgimg1" data-aos="fade-up">
              <img src={require("./Images/Group 1000003817.png")} alt="" />
            </div>
            <div className="main3">
              <img className="main2img1 imgimgimg" data-aos="fade-up" src={require("./Images/5.png")} alt="" />
              <img className="main2img2 imgimgimg" data-aos="fade-up" data-aos-delay="200" src={require("./Images/4.png")} alt="" />
              <img className="main2img3 imgimgimg" data-aos="fade-up" data-aos-delay="400" src={require("./Images/1.png")} alt="" />
            </div>
          </div>
        </div>
      </div> */}

            {/* <div className="forbigscreencustompakages pt-5">
        <h2 className='text-center mb-5 cpcolor'>Let Us Design & Print Your Custom Packaging Boxes For You!</h2>

        <div className="container">
          <OwlCarousel className="row ">
            <div class="card cardcustomhover p-2 text-center m-3" style={{ width: "389px", height: "283px" }}>
              <img src={require("./Images/box1.png")} class="card-img-top mx-auto" alt="..." style={{ height: "111px", width: "126px" }} />
              <div class="card-body">
                <h5 class="card-title mainHeadingH3">Why Our Printing Services?</h5>
                <p class="card-text ParagraphH2P" style={{ fontSize: "14px" }}>Stampa Prints turns your packaging box design dreams into reality with free design assistance and limitless customization choices. Elevate your packaging boxes with our expert support for distinctive and standout results.</p>

              </div>
            </div>
            <div class="card cardcustomhover p-2 text-center m-3" style={{ width: "389px", height: "283px" }}>
              <img src={require("./Images/box1.png")} class="card-img-top mx-auto" alt="..." style={{ height: "111px", width: "126px" }} />
              <div class="card-body">
                <h5 class="card-title mainHeadingH3">Why Our Printing Services?</h5>
                <p class="card-text ParagraphH2P" style={{ fontSize: "14px" }}>Stampa Prints turns your packaging box design dreams into reality with free design assistance and limitless customization choices. Elevate your packaging boxes with our expert support for distinctive and standout results.</p>

              </div>
            </div>
            <div class="card cardcustomhover p-2 text-center m-3" style={{ width: "389px", height: "283px" }}>
              <img src={require("./Images/box1.png")} class="card-img-top mx-auto" alt="..." style={{ height: "111px", width: "126px" }} />
              <div class="card-body">
                <h5 class="card-title mainHeadingH3">Why Our Printing Services?</h5>
                <p class="card-text ParagraphH2P" style={{ fontSize: "14px" }}>Stampa Prints turns your packaging box design dreams into reality with free design assistance and limitless customization choices. Elevate your packaging boxes with our expert support for distinctive and standout results.</p>

              </div>
            </div>
          </OwlCarousel> */}

            {/* <div className="main123  mb-5 ">
            <div className="main1">
              <img className="main1img1 imgimgimg" data-aos="fade-up" src={require("./Images/new4.png")} alt="" />

              <img className="main1img2 imgimgimg " data-aos="fade-up" data-aos-delay="200" src={require("./Images/new5.png")} alt="" />

            </div>
            <div className="main2 imgimgimg1" data-aos="fade-up">
              <img src={require("./Images/maindanda.png")} alt="" />
            </div>
            <div className="main3">
              <img className="main2img1 imgimgimg" data-aos="fade-up" src={require("./Images/new1.png")} alt="" />
              <img className="main2img2 imgimgimg" data-aos="fade-up" data-aos-delay="200" src={require("./Images/new2.png")} alt="" />
              <img className="main2img3 imgimgimg" data-aos="fade-up" data-aos-delay="400" src={require("./Images/new3.png")} alt="" />
            </div>
          </div> */}
            {/* </div>
      </div> */}


            {/* <div className="pt-5 pb-2 formbscreencustompakages">
        <h2 className='text-center mb-5 cpcolor'>Let Us Design & Print Your Custom Packaging Boxes For You!</h2>
        <div className="container">
          <div className="main123  mb-5 "> */}

            {/* <div class="card  container-fluid">
              <div class="row ">
                <div class="col-4">
                  <img src={require("./Images/222.png")} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-8">
                  <div class="card-body">
                    <h5 class="card-title">Never Ending Customization
                    </h5>
                    <p class="card-text">Stampa Prints turns your packaging box design dreams into reality with free design assistance and limitless customization choices. Elevate your packaging boxes with our expert support for distinctive and standout results.</p>

                  </div>
                </div>
              </div>
            </div> */}

            {/* <img className="ms-4" data-aos="fade-up" src={require("./Images/dandaformobile.png")} alt="" />
            <img className="main2img1 imgimgimg " data-aos="fade-up" src={require("./Images/mb1.png")} alt="" />
            <img className="main1img1 imgimgimg" data-aos="fade-up" src={require("./Images/mb2.png")} alt="" />

            <img className="main2img2 imgimgimg" data-aos="fade-up" data-aos-delay="200" src={require("./Images/mb3.png")} alt="" />
            <img className="main1img2 imgimgimg " data-aos="fade-up" data-aos-delay="200" src={require("./Images/mb4.png")} alt="" />
            <img className="main2img3 imgimgimg" data-aos="fade-up" data-aos-delay="400" src={require("./Images/mb5.png")} alt="" />

          </div>
        </div>



      </div> */}

            <OwlCarousel className='owl-theme' loop margin={10} nav>
                <div class='item'>
                    <h4>1</h4>
                </div>
                <div class='item'>
                    <h4>2</h4>
                </div>
                <div class='item'>
                    <h4>3</h4>
                </div>
                <div class='item'>
                    <h4>4</h4>
                </div>
                <div class='item'>
                    <h4>5</h4>
                </div>
                <div class='item'>
                    <h4>6</h4>
                </div>
                <div class='item'>
                    <h4>7</h4>
                </div>
                <div class='item'>
                    <h4>8</h4>
                </div>
                <div class='item'>
                    <h4>9</h4>
                </div>
                <div class='item'>
                    <h4>10</h4>
                </div>
                <div class='item'>
                    <h4>11</h4>
                </div>
                <div class='item'>
                    <h4>12</h4>
                </div>
            </OwlCarousel>;
        </>
    );
}

export default CustomPackage;
