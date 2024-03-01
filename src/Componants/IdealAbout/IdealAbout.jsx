import React, { Fragment } from 'react';
import './IdealAbout.css';

function IdealAbout() {
  return (
    <Fragment>
      <div className="container">
        <div className="mainideal pt-5 pb-3">
          <div className="row pb-5">
            <div className="col-md-6 " >
              <h2 className="textcolorideal">Who we are</h2>
              <p className='classforidealp'>
                Your business is unique, and your packaging should be too. That's where Stampa Prints comes in. We specialize in custom printing and custom packaging solutions designed to meet your specific industry and product needs.<br /><br /> We understand that first impressions are everything, so we work tirelessly to create custom packages that will grab attention and make a lasting impression.  In addition, we know that your time is valuable, which is why we offer a quick turnaround time on all of our orders.
              </p>
              <button className="Button_1p buttonforcolorport " style={{ margin: "0.5rem!important" }}>Read In Detail</button>
            </div>

            <div className="col-md-6 text-center imgmbideal " >
              <img
                src={require('./frame1.png')}
                alt=""
              />
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-md-6 text-center imgmbideal elemrnt1" >
              <img
                src={require('./frame2.png')}
                alt=""
              />
            </div>
            <div className="col-md-6 elemrnt2 " >
              <h2 className="textcolorideal " >What We Do</h2>
              <p className='classforidealp'>
                Your business is unique, and your packaging should be too. That's where Stampa Prints comes in. We specialize in custom printing and custom packaging solutions designed to meet your specific industry and product needs.<br /><br /> We understand that first impressions are everything, so we work tirelessly to create custom packages that will grab attention and make a lasting impression.  In addition, we know that your time is valuable, which is why we offer a quick turnaround time on all of our orders.
              </p>
              <button className="Button_1p buttonforcolorport " style={{ margin: "0.5rem!important" }}>Read In Detail</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default IdealAbout;
