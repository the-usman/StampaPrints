import React, { useState, useEffect } from 'react';
import './Product2.css';
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

const ProductCard = ({ productcard }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [imageOpacity, setImageOpacity] = useState(1);

  const imageUrls = productcard.imageUrls;

  const handleImageClick = (index) => {
    setImageOpacity(0);

    setTimeout(() => {
      const mainImage = document.getElementById('ProductImg');
      mainImage.src = imageUrls[index];
      setImageOpacity(1);
    }, 700); // Use the same duration as the transition in milliseconds
  };

  useEffect(() => {
    const input = document.querySelector('input[type="tel"]');
    intlTelInput(input, {
      utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js',
    });
  }, []);


  return (
    <div className="container">
      <div className="single-product1 row">
        <div className="rowforthis1 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div className="col2rec">
            <img
              src={productcard.imageUrls[0]}
              width="100%"
              id="ProductImg"
              alt="Product"
              style={{ opacity: imageOpacity, transition: 'opacity 0.7s ease', borderRadius: "10px", height: "450px", width: "520px" }}
            />
            <div className="small-img-row mt-3">
              {imageUrls.map((imageUrl, index) => (
                <div
                  key={index}
                  className="small-img-col"
                  onClick={() => handleImageClick(index)}
                >
                  <img
                    src={imageUrl}
                    width="100%"
                    className="small-img"
                    alt={`Product ${index}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mainHeadingH2 mainforpad1 mb-0">
          <div>

            <h2 className='ParagraphH2P121'>{productcard.heading}
            </h2>
            <p className='ParagraphH2P ParagraphH2P11'>
              {productcard.detail}
            </p>

            <form className='formfororder1'>
              <h2 className="text-center mainHeadingH2 mainHeadingH2sizee" style={{ color: "white", fontSize: "26px" }}>Get an instant Quote</h2>
              <div className="row mb-2">
                <div className="col">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form6Example1"
                      className="form-control form-control1"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form6Example2"
                      className="form-control form-control1"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col">
                  <div className="form-outline ">
                    <input
                      type="tel"
                      id="form6Example3"
                      className="form-control form-control1"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form6Example2"
                      className="form-control form-control1"
                      placeholder={productcard.placeholder}
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-3 col-md-3 col-lg-3 col-sm-6">
                  <div className="form-outline ">
                    <input
                      type="number" id="quantity" name="quantity" min="1" max="5"
                      className="form-control form-control1"
                      placeholder="Quantity"
                    />
                  </div>
                </div>
                <div className="col-3 col-md-3 col-lg-3 col-sm-6">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form6Example2"
                      className="form-control form-control1"
                      placeholder="Color"
                    />
                  </div>
                </div>
                <div className="col-3 col-md-3 col-lg-3 col-sm-6">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form6Example2"
                      className="form-control form-control1"
                      placeholder="Orientation"
                    />
                  </div>
                </div>
                <div className="col-3 col-md-3 col-lg-3 col-sm-6">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form6Example2"
                      className="form-control form-control1"
                      placeholder="Paper Type"
                    />
                  </div>
                </div>
              </div>
              <h2 className="text-center mainHeadingH2 mainHeadingH2sizee" style={{ color: "white", fontSize: "26px" }}>Custom Requirements</h2>
              <div className="row mb-2">
                <div className="col">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form6Example1"
                      className="form-control form-control1"
                      placeholder="Height"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form6Example2"
                      className="form-control form-control1"
                      placeholder="Width"
                    />
                  </div>
                </div>
              </div>

              <div className="row mb-2">
                <div className="col-4">
                  <div className="form-outline ">
                    <input
                      type="number" id="quantity" name="quantity" min="1" max="5"
                      className="form-control form-control1"
                      placeholder="Paper Weight"
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form6Example2"
                      className="form-control form-control1"
                      placeholder="Choose Binding "
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form6Example2"
                      className="form-control form-control1"
                      placeholder="Side/Pages"
                    />
                  </div>
                </div>

              </div>


              <div className="form-outline mb-2">
                <textarea
                  className="form-control form-control1"
                  id="form6Example4"
                  rows="4"
                  placeholder="Specification"
                ></textarea>
              </div>
              <div className="text-center">
                <button className="Button11 m-2" style={{
                  margin: "0.5rem!important", backgroundColor: "rgba(21, 85, 95, 0.50)", borderRadius: "5px 5px 5px 5px", padding: "10px 10px 10px 10px", fontFamily: "Poppins", color: "white",
                  fontSize: "16px", fontWeight: "500", border: "none"
                }}>Send Massage</button>
                {/* <button className="btn btn-primary " style={{ backgroundColor: " rgba(21, 85, 95, 0.50)", border: "none", borderRadius: "5px 5px 5px 5px" }}>Send Message</button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
