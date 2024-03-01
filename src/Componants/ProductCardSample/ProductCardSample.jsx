import React, { useState, useEffect } from 'react';
import './ProductCardSample.css';
import image1 from './images/Rectangle 105.png';
import imagemain from './images/Bath Bomb Boxes 180 x 210.jpg'
import image2 from './images/Rectangle 144.png';
import image3 from './images/Rectangle 1441.png';
import Imagenew from './images/Bath Bomb Boxes.webp';
import intlTelInput from 'intl-tel-input';
import pd1 from './images/pd1.png'

import 'intl-tel-input/build/css/intlTelInput.css';

const countryOptions = [
  { value: 'us', label: 'United States (+1)' },
  { value: 'ca', label: 'Canada (+1)' },
  { value: 'uk', label: 'United Kingdom (+44)' },
  // Add more country options as needed
];

const ProductCardSample = () => {
  return (
    <div className="container">
      <div className="single-product1 row">
        <div className="rowforthis2 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div className="col2rec">
            <h2 className='mainHeadingH2 mainHeadingH2pcs'>Enhance your brand's appeal with bespoke custom packaging.</h2>
            <p className='ParagraphH2P ParagraphH2P12'>Custom boxes are a great way to make your customers feel like they've gotten more than just an item from you. They can also help to differentiate your product from those of your competitors. So if you're looking for a way to promote your brand and set yourself apart from the competition, you should consider custom packaging.
              <br /><br />
              ost companies, whether they are start-ups or long-standing businesses, have some sort of branded product. This could be a physical item like a t-shirt or a mug, but it could also be an intangible asset, such as a company name or logo.</p>
          </div>
          <div className="col2rec">
            <h2 className='mainHeadingH2 mainHeadingH2pcs'>What Makes us Different From The Others  </h2>
            <p className='ParagraphH2P ParagraphH2P12'>At Stampa Prints, our commitment to excellence sets us apart in the world of custom packaging. Our unwavering dedication to quality, innovation, and customer satisfaction drives everything we do.
              <br /><br />
              From our meticulous attention to detail and cutting-edge design capabilities to our sustainable practices and exceptional customer service, we go the extra mile to ensure that your packaging needs are not only met but exceeded. We understand that every project is unique, and that's why we tailor our services to match your vision.</p>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mainHeadingH2 mainforpad1 mb-0">
          <div>
            {/* <h2 className='ParagraphH2P12'>Custom Brochure Printing
            </h2>
            <p className='ParagraphH2P ParagraphH2P11'>
              Improve Your Business Bottom Line or Showcase to the World What Your Business Has Got for Them! Avail our custom booklet printing services to inform, engage, and convert your audience.
            </p> */}

            <form className='formfororder1'>
              <h2 className="text-center mainHeadingH2 mainHeadingH2sizee" style={{ color: "white", fontSize: "26px" }}>Get an instant Quote</h2>
              <div className="row mb-3">
                <div className="col">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form6Example1"
                      className="form-control form-control2"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form6Example2"
                      className="form-control form-control2"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <div className="form-outline ">
                    <input
                      type="tel"
                      id="form6Example3"
                      className="form-control form-control2"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form6Example2"
                      className="form-control form-control2"
                      placeholder="Custom Booklet Printing"
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-3 col-md-3 col-lg-3 col-sm-6">
                  <div className="form-outline ">
                    <input
                      type="number" id="quantity" name="quantity" min="1" max="5"
                      className="form-control form-control2"
                      placeholder="Quantity"
                    />
                  </div>
                </div>
                <div className="col-3 col-md-3 col-lg-3 col-sm-6">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form6Example2"
                      className="form-control form-control2"
                      placeholder="Color"
                    />
                  </div>
                </div>
                <div className="col-3 col-md-3 col-lg-3 col-sm-6">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form6Example2"
                      className="form-control form-control2"
                      placeholder="Orientation"
                    />
                  </div>
                </div>
                <div className="col-3 col-md-3 col-lg-3 col-sm-6">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form6Example2"
                      className="form-control form-control2"
                      placeholder="Paper Type"
                    />
                  </div>
                </div>
              </div>
              <h2 className="text-center mainHeadingH2 mainHeadingH2sizee" style={{ color: "white", fontSize: "26px" }}>Custom Requirements</h2>
              <div className="row mb-3">
                <div className="col">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form6Example1"
                      className="form-control form-control2"
                      placeholder="Height"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form6Example2"
                      className="form-control form-control2"
                      placeholder="Width"
                    />
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-4">
                  <div className="form-outline ">
                    <input
                      type="number" id="quantity" name="quantity" min="1" max="5"
                      className="form-control form-control2"
                      placeholder="Weight"
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form6Example2"
                      className="form-control form-control2"
                      placeholder="Binding "
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form6Example2"
                      className="form-control form-control2"
                      placeholder="Side/Pages"
                    />
                  </div>
                </div>

              </div>

              <div className='uploadsample'>
                <p className='uploadsampletext'>Upload Sample design If Any</p>
                <button className="Button11 m-2" style={{
                  margin: "0.5rem!important", backgroundColor: "rgba(21, 85, 95, 0.50)", borderRadius: "5px 5px 5px 5px", padding: "5px 5px 5px 5px", fontFamily: "Poppins", color: "white",
                  fontSize: "14px", fontWeight: "400", border: "none"
                }}>+ Upload</button>
              </div>
              <div className="form-outline mb-2">
                <textarea
                  className="form-control form-control2"
                  id="form6Example4"
                  rows="4"
                  placeholder="Specification"
                ></textarea>
              </div>
              <div className="text-center">
                <button className="Button11 m-2" style={{
                  margin: "0.5rem!important", backgroundColor: "rgba(21, 85, 95, 0.50)", borderRadius: "5px 5px 5px 5px", padding: "10px 10px 10px 10px", fontFamily: "Poppins", color: "white",
                  fontSize: "16px", fontWeight: "400", border: "none"
                }}>Send Message</button>
                {/* <button className="btn btn-primary " style={{ backgroundColor: " rgba(21, 85, 95, 0.50)", border: "none", borderRadius: "5px 5px 5px 5px" }}>Send Message</button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSample;
