import React, { Fragment } from 'react';
import './Idealaboutpage.css';
import Aos from 'aos';

function Idealaboutpage() {

  // Initialize Aos

  Aos.init({ duration: 1000 });

  return (
    <Fragment>
      <h1 className="ourportfolio mainHeadingHero">Abo<span style={{ textDecoration: "underline" }}>ut us</span> </h1>
      <div className="container">

        <div className="mainidealportfolio">

          <p className='classforidealp ParagraphH2P'>
            We are a passionate packaging solutions provider with thousands of satisfied clients. We endeavor to increase that number by being consistent with our service, trendy with our printing techniques, proactive with our client communications, and delivering personalized and budgetary printing services.with our client communications, and delivering personalized and budgetary printing services.
          </p>
          <div className="row  idealportfoliop1">
            <div className="col-md-7 elemrnt22" data-aos="zoom-in-right">
              <h2 className=" mainHeadingH2" data-aos="zoom-in-right">Who We Are</h2>
              <p className='classforidealp ParagraphH2P'>
                As the CBD industry rapidly expands, so does the competition to create innovative and attractive packaging designs. In order to stand out from the crowd, companies need to design packaging that is both visually appealing and provides essential information about the product.
                <br /><br />
                In order to stand out from the crowd, companies need to design packaging that is both visually appealing and provides essential information about the product that is both visually appealing and provides essential information about the product.
              </p>

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
            <div className="col-md-7 elemrnt2 elemrnt21 " data-aos="zoom-in-left" >
              <h2 className=" mainHeadingH2" data-aos="zoom-in-left">What We Do</h2>
              <p className='classforidealp ParagraphH2P'>
                As the CBD industry rapidly expands, so does the competition to create innovative and attractive packaging designs. In order to stand out from the crowd, companies need to design packaging that is both visually appealing and provides essential information about the product.
                <br /><br />
                In order to stand out from the crowd, companies need to design packaging that is both visually appealing and provides essential information about the product that is both visually appealing and provides essential information about the product.
              </p>

            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Idealaboutpage;
