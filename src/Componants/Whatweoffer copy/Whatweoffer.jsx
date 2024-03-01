import React, { useEffect } from 'react';
import './Whatweoffer.css';
import image1 from './Maskgroup.png';
import image2 from './Maskgroup2.png';
import image3 from './Maskgroup3.png';
import image4 from './Maskgroup4.png';
import image5 from './Maskgroup5.png';
import image6 from './Maskgroup6.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Whatweoffer() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section>
      {/* <h2 style={{ fontStyle: 'Anek Gurmukhi' }}>just for check</h2> */}

      {/* <div className='py-4 formobileremove'>
        <div className="container-fluid">
          <h2 className="headingforweoffer mainHeadingH2 p-5">What We Offer</h2>
          <div className="row imgmobileweoffer">

            <div
              className="col-2 img_p col2border"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img className='' src={image1} alt="" />
              <p className="changetext1 pt-2">Design Support</p>
            </div>
            <div
              className="col-2 img_p col2border"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img src={image2} alt="" />
              <p className="changetext1 pt-2">Custom Sizes & Shapes </p>
            </div>
            <div
              className="col-2 img_p col2border"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img src={image3} alt="" />
              <p className="changetext1 pt-2">Quality Printing</p>
            </div>
            <div
              className="col-2 img_p col2border"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <img src={image4} alt="" />
              <p className="changetext1 pt-2">Free Delivery</p>
            </div>
            <div
              className="col-2 img_p col2border"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <img src={image5} alt="" />
              <p className="changetext1 pt-2">Secure Payment</p>
            </div>
            <div
              className="col-2 img_p col2border1"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <img src={image6} alt="" />
              <p className="changetext1 pt-2">Customer Service</p>
            </div>
          </div>
        </div>
      </div> */}

      <div className=' formobileremove'>
        <div className="container-fluid">
          <h2 className="headingforweoffer1 mainHeadingH2 pb-3 pt-4 text-center">What We Offer</h2>
        </div>
      </div>
      <div className="formobileremove">
        <div className="row  imgmobileweoffer">
          <div className="col text-center" data-aos="fade-up"
            data-aos-delay="100">
            <img src={image1} alt="" />
            <p className="changetext11 pt-2 ParagraphH2P">Design Support</p>
          </div>
          <div className="col text-center " data-aos="fade-up"
            data-aos-delay="200">
            <img src={image2} alt="" />
            <p className="changetext11 pt-2 ParagraphH2P">Custom Craft</p>
          </div>
        </div>
        <div className="row imgmobileweoffer pt-4">
          <div className="col text-center" data-aos="fade-up"
            data-aos-delay="300">
            <img src={image3} alt="" />
            <p className="changetext11 pt-2 ParagraphH2P">Quality Printing</p>
          </div>
          <div className="col text-center" data-aos="fade-up"
            data-aos-delay="400">
            <img src={image4} alt="" />
            <p className="changetext11 pt-2 ParagraphH2P">Free Delivery</p>
          </div>
        </div>
        <div className="row imgmobileweoffer pt-4 ">
          <div className="col text-center" data-aos="fade-up"
            data-aos-delay="500">
            <img src={image5} alt="" />
            <p className="changetext11 pt-2 ParagraphH2P">Secure Payment</p>
          </div>
          <div className="col text-center" data-aos="fade-up"
            data-aos-delay="600">
            <img src={image6} alt="" />
            <p className="changetext11 pt-2 ParagraphH2P">Customer Service</p>
          </div>
        </div>
      </div>




      <div className='formbigscreenremove'>
        <div className="container-fluid">
          <h2 className="headingforweoffer mainHeadingH2 pb-5">What We Offer</h2>
          <div className="row imgmobileweoffer">

            <div
              className="col-2 img_p col2border"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img className='' src={image1} alt="" />
              <p className="changetext11 pt-2 ParagraphH2P">Design Support</p>
            </div>
            <div
              className="col-2 img_p col2border"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img src={image2} alt="" />
              <p className="changetext11 pt-2 ParagraphH2P">Custom Craft </p>
            </div>
            <div
              className="col-2 img_p col2border"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img src={image3} alt="" />
              <p className="changetext11 pt-2 ParagraphH2P">Quality Printing</p>
            </div>
            <div
              className="col-2 img_p col2border"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <img src={image4} alt="" />
              <p className="changetext11 pt-2 ParagraphH2P">Free Delivery</p>
            </div>
            <div
              className="col-2 img_p col2border"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <img src={image5} alt="" />
              <p className="changetext11 pt-2 ParagraphH2P">Secure Payment</p>
            </div>
            <div
              className="col-2 img_p col2border1"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <img src={image6} alt="" />
              <p className="changetext11 pt-2 ParagraphH2P">Customer Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
