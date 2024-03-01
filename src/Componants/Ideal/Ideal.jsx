import React, { Fragment } from 'react';
import './Ideal.css';

function Ideal() {
  return (
    <Fragment>
      <div className="container">
        <div className="mainideal ">
          <div className="row pb-5">
            <div className="col-md-6 pt-4" data-aos="zoom-in-right">
              <h2 className="mainHeadingH2" data-aos="zoom-in-right">Why is Stampa Prints the ideal Custom Packaging Manufacturer?</h2>
              <p className='classforidealp ParagraphH2P'>
                Your business is unique, and your packaging should be too. That's where Stampa Prints comes in. We specialize in custom printing and custom packaging solutions designed to meet your specific industry and product needs.<br /><br /> We understand that first impressions are everything, so we work tirelessly to create custom packages that will grab attention and make a lasting impression.  In addition, we know that your time is valuable, which is why we offer a quick turnaround time on all of our orders.
              </p>
            </div>

            <div className="col-md-6 text-center imgmbideal " data-aos="zoom-in-right">
              <img
                src={require('./frame1.png')}
                alt=""
              />
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-md-6 text-center imgmbideal elemrnt1" data-aos="zoom-in-left">
              <img
                src={require('./frame2.png')}
                alt=""
              />
            </div>
            <div className="col-md-6 elemrnt2 pt-4" data-aos="zoom-in-left" >
              <h2 className="mainHeadingH2 " data-aos="zoom-in-left">Why is Stampa Prints the ideal Custom Packaging Manufacturer?</h2>
              <p className='classforidealp ParagraphH2P'>
                Your business is unique, and your packaging should be too. That's where Stampa Prints comes in. We specialize in custom printing and custom packaging solutions designed to meet your specific industry and product needs.<br /><br /> We understand that first impressions are everything, so we work tirelessly to create custom packages that will grab attention and make a lasting impression.  In addition, we know that your time is valuable, which is why we offer a quick turnaround time on all of our orders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Ideal;
