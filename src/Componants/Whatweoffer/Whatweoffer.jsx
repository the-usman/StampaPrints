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
    <>
      <section className='whatweoffer'>
        <div className="container-fluid">
          <p className="heading p-5" data-aos="fade-up">
            What We Offer
          </p>
          <div className="row imgmobileweoffer ">
            <div
              className="col-2 img_p col2border"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img src={image1} alt="" />
              <p className="changetext11">Design Support</p>
            </div>
            <div
              className="col-2 img_p col2border"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img src={image2} alt="" />
              <p className="changetext11">Custom Sizes & Shapes</p>
            </div>
            <div
              className="col-2 img_p col2border"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img src={image3} alt="" />
              <p className="changetext11">Quality Printing</p>
            </div>
            <div
              className="col-2 img_p col2border"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <img src={image4} alt="" />
              <p className="changetext11">Free Delivery</p>
            </div>
            <div
              className="col-2 img_p col2border"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <img src={image5} alt="" />
              <p className="changetext11">Secure Payment</p>
            </div>
            <div
              className="col-2 img_p"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <img src={image6} alt="" />
              <p className="changetext11">Customer Service</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
