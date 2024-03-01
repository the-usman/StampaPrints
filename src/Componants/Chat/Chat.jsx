import React, { useEffect } from "react";
import './Chat.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Chat({ imageSrc }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust the duration of the animation
      once: true, // Set to true if you want the animation to occur only once
    });
  }, []);
  const image = imageSrc || require('../Chat/Home Page Bottom Illustration-02.png')
  return (
    <div className="row wholechathome">
      {/* <div className="col-md-1"></div> */}
      <div className="col-md-6 col-sm-6 col-lg-6 col-12 text-center" data-aos="fade-right">
        <img className="imgesizechatchat" src={image} alt="" />
      </div>
      <div className="wholechatcomponant col-md-6 col-sm-12">
        <div data-aos="fade-left" ><h4 style={{ color: "#15555f", fontFamily: "anek gurmukhi" }}>Are you willing to think creatively? Start the process now!</h4></div>
        <div data-aos="fade-left">
          <p style={{ color: "#7b7b7b" }}>For a free consultation and a quick price estimate, get in touch with a bespoke packaging expert right away.</p>
        </div>

        <div className="buttonsearch" data-aos="fade-left">
          <input className='textbox' type="text" placeholder='Let’s Have A Chat' />
          <button className='letschatbutton'>Lets Chat</button>
        </div>
      </div>
      {/* <div className="col-md-1"></div> */}
    </div>
  );
}

export default Chat;
