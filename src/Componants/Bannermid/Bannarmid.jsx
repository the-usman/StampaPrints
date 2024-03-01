import image from "./Images/brochure printing 245 x 208.webp";
import image1 from "./Images/Carbon Less Form 245 x 208.webp";
import image2 from "./Images/Cataloge Printing 245 x 208.webp";
import image3 from "./Images/Comic Book 245 x 208.webp";
import "./Bannermid.css";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Bannarmid(props) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const projectDetail = [
    {
      image: image,
      headingbannermid: 'Brochure Printing',
    },
    {
      image: image1,
      headingbannermid: 'Carbonless Forms',
    },
    {
      image: image2,
      headingbannermid: 'Catalog Printing',
    },
    {
      image: image3,
      headingbannermid: 'Comic Book Printing',
    },
  ];

  return (
    <div className="container headingformidall">
      <div className="row ">
        <div className="col-12">
          <h2 className="headingformid1 mainHeadingH2" data-aos="zoom-in"> {props.heading ? (props.heading) : "Empower Your Brand With Our Custom Printing Solutions"}</h2>
          <p className="heading1formid" data-aos="zoom-in"> {props.headingtext ? (props.headingtext) : "Elevate your brand with our custom printing: quality, innovation, and attention to detail."}</p>
        </div>
        {projectDetail.map((val, i) => (
          <div key={i} className="col-12 col-md-6 col-lg-3  bannarmidclass " data-aos="fade-right" data-aos-delay={i * 200}>
            <div className="card cardrang">
              <img src={val.image} className="card-img-top" alt={val.headingbannermid} />
              <div className="card-body" style={{ paddingBottom: "0px" }}>
                <h3 className="card-title text-center cardhovertext cardtextdown">{val.headingbannermid}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
