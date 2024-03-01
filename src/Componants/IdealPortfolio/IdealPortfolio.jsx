import React, { Fragment } from 'react';
import './IdealPortfolio.css';
import Aos from 'aos';

function IdealPortfolio() {

  // Initialize Aos
  Aos.init();

  return (
    <Fragment>
      <h1 className="ourportfolio mainHeadingHero">Our Por<span style={{ textDecoration: "underline" }}>tfolio</span> </h1>
      <div className="container">

        <div className="mainidealportfolio">

          <p className='classforidealp ParagraphH2P'>
            Welcome to Stampa Prints, where we redefine the art of packaging and printing. With a steadfast commitment to excellence, innovation, and client satisfaction, we bring your visions to life through our bespoke solutions.At the core of our identity is a passion for quality craftsmanship and a relentless pursuit of innovation. <br /> <br />

            We understand that each project is unique, and our dedication to meeting and exceeding your expectations is unwavering. Explore a world of personalized packaging and printing that reflects the essence of your brand.
          </p>
          <div className="row  idealportfoliop1">
            <div className="col-md-7 pt-4 elemrnt22" data-aos="zoom-in-right">
              <h2 className=" mainHeadingH2" data-aos="zoom-in-right">CBD Packaging: Artistic Designs, Essential Info: A case study</h2>
              <p className='classforidealp ParagraphH2P'>
                As the CBD industry rapidly expands, so does the competition to create innovative and attractive packaging designs. In order to stand out from the crowd, companies need to design packaging that is both visually appealing and provides essential information about the product.
              </p>
              <button className="Button_1p buttonforcolorport " style={{ margin: "0.5rem!important" }}>Read In Detail</button>
            </div>

            <div className="col-md-5 text-center imgmbideal1p " data-aos="zoom-in-right">
              <img className='img-fluid'
                src={require('./frame1.png')}
                alt=""
              />
            </div>
          </div>
          <div className="row idealportfoliop1">
            <div className="col-md-5 text-center imgmbideal1p elemrnt1" data-aos="zoom-in-left">
              <img
                className='img-fluid'
                src={require('./frame2.png')}
                alt=""
              />
            </div>
            <div className="col-md-7 elemrnt2 elemrnt21 pt-4" data-aos="zoom-in-left" >
              <h2 className=" mainHeadingH2" data-aos="zoom-in-left">CBD Packaging: Artistic Designs, Essential Info: A case study</h2>
              <p className='classforidealp ParagraphH2P'>
                As the CBD industry rapidly expands, so does the competition to create innovative and attractive packaging designs. In order to stand out from the crowd, companies need to design packaging that is both visually appealing and provides essential information about the product.
              </p>
              <button className="Button_1p buttonforcolorport " style={{ margin: "0.5rem!important" }}>Read In Detail</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default IdealPortfolio;
