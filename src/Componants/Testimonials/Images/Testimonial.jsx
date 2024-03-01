import React, { Fragment, useEffect } from 'react';
import image1 from "./Group 19.png";
import image2 from "./2.png";
import image3 from "./3.png";
import image4 from "./4.png";
import starimg from "./5star.png";
import "./Testimonials.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Testimonial() {
  useEffect(() => {
    AOS.init();
  }, []);

  const testimonialdata = [
    {
      image: image1,
      Cname: "Bilal",
      Star: starimg,
      Ccomment: "I was skeptical at first since I have dealt with numerous manufacturers. The boxes came in perfect!!",
    },
    {
      image: image2,
      Cname: "Bilal Ahmad",
      Star: starimg,
      Ccomment: "I was skeptical at first since I have dealt with numerous manufacturers. The boxes came in perfect!!",
    },
    {
      image: image3,
      Cname: "Bilal Tariq",
      Star: starimg,
      Ccomment: "I was skeptical at first since I have dealt with numerous manufacturers. The boxes came in perfect!!",
    },
    {
      image: image4,
      Cname: "Bilal",
      Star: starimg,
      Ccomment: "I was skeptical at first since I have dealt with numerous manufacturers. The boxes came in perfect!!",
    }
  ];

  return (
    <Fragment>
      <div className="container text-center ">
        <h2 className='tectcolortestimonial' data-aos="zoom-in">See Why Customers Love Stampa Prints</h2>
        <h5 className='tectcolortestimonialh4 pb-4' data-aos="zoom-in">Rated 4.6 out of 5 based on 25 reviews on <span><a href="https://www.trustpilot.com">Trustpilot</a></span></h5>
      </div>
      <div className="container ">
        <div className="row">
          {testimonialdata.map((val, i) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 displayformobiletestimonial pb-5" key={i} data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <div className="boxtestimonial">
                <img src={val.image} alt="" style={{ margin: "-35px 0px 0px -30px" }} />
                <div className="testimoialtextall text-center ">
                  <div className="nametestimonial fw-bold">{val.Cname}</div>
                  <div className="startestimonial"><img src={val.Star} alt="" /></div>
                  <div className="commettestimonial">{val.Ccomment}</div>
                </div>
              </div>
            </div>

          ))}
          <div className="d-flex justify-content-center">
            <button
              className="btn btnblog px-3 py-2  "
              style={{
                color: "white"

              }}
            >
              All Reviews
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Testimonial;
