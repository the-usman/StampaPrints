import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import("./Chatandcall.css")


const Chatandcall = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" mainchatandcall">
      <div className="row mainchatandcall1">

        <div className=" col-12 col-md-7 col-sm-12 col-lg-7" data-aos="fade-right">
          <h2 className='mainHeadingH2 '>Stampa Prints - Your Reliable Partner for CBD Box Packaging</h2>
          <p className='ParagraphH2P ParagraphH2Pchatandcall'>Looking for a reliable partner you can trust when it comes to CBD packaging? Look no further than Stampa Prints. We offer a wide range of custom type packaging options for CBD products, so you can find the perfect box for your business
            <br /><br />
            CBD packaging is an important part of your branding and marketing strategy. We use state-of-the-art printing technology to create beautiful, eye-catching prints that will make your products look irresistible. Trust us to provide you with the perfect packaging for your CBD products.</p>
        </div>
        <div className="col-12 col-sm-12 col-lg-5 col-md-5 text-end" data-aos="fade-left">
          <img className="img-fluid" src={require("./1.png")} alt="" />
          <img className="img-fluid pt-3" src={require("./2.png")} alt="" />
        </div>

      </div>
    </div>
  );
};

export default Chatandcall;
