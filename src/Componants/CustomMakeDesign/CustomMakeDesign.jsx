import React, { useEffect } from 'react';
import './CustomMakeDesign.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CustomMakeDesign = ({ data }) => {
  const { heading, desc, image, image1, image2, image0 } = data;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="mainidealcustom" data-aos="fade-up" data-aos-duration="1000">
        <div className="row py-3">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 custommakedesigntext">
            <div>
              <h2 className='mainHeadingH2 customheadingdesign' data-aos="fade-left" data-aos-duration="1000">
                {heading}
              </h2>
              <p className='ParagraphH2P customparagrahpdesign' data-aos="fade-right" data-aos-duration="1000">
                {
                  desc.map((des, index) =>
                    <>
                      {des}
                      {index !== desc.length - 1 &&
                        <>
                          <br /><br />
                        </>
                      }
                    </>
                  )
                }
              </p>
              <div className="col mt-3">
                <button
                  className="btn btn-primary px-3 py-2"
                  style={{
                    backgroundColor: " #9BC194",
                    border: "none",
                    borderRadius: "5px 5px 5px 5px",
                  }}
                  data-aos="fade-up" data-aos-duration="1000"
                >
                  View Categories
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-end threeimagessmd0">
            <div className='custommakedesignimg0'>
              <img
                className="custommakedesignimg00 img-fluid"
                src={image0}
                alt=""
                data-aos="zoom-in" data-aos-duration="1500"
              />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-end threeimagessmd">
            <div className='custommakedesignimg11'>
              <img
                className="custommakedesignimg1 img-fluid"
                src={image}
                alt=""
                data-aos="zoom-in" data-aos-duration="1500"
              />
            </div>
            <div className='custommakedesignimg22'>
              <img
                className="custommakedesignimg2 img-fluid"
                src={image1}
                alt=""
                data-aos="zoom-in" data-aos-duration="1500"
              />
              <img
                className="custommakedesignimg3 img-fluid"
                src={image2}
                alt=""
                data-aos="zoom-in" data-aos-duration="1500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomMakeDesign;
