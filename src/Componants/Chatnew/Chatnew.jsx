import React, { useEffect } from "react";
import './Chatnew.css';
import Aos from "aos";
import "aos/dist/aos.css";


function Chatnew(props) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="row wholechatnew">
      <div className="wholechatcomponantnew  mx-auto col-md-5 col-sm-12">
        <div data-aos="fade-left" ><h4 className='wholechatnewh4'>Explore Endless Possibilities with Our Design Options</h4></div>
        <div data-aos="fade-left">
          <p className='wholechatnewhp'>More Than Just Boxes: Crafting Your Brand's Visual Language to Evoke Emotion, Tell a Story, and Leave a Lasting Impression on Every Customer Interaction.</p>
        </div>

        <div className="buttonsearchnewchat" data-aos="fade-left">
          <input className='textboxchatnew' type="text" placeholder='Enter your email address' />
          <button className='letsnewchatbutton'>Subscribe Now </button>
        </div>
      </div>

    </div>
  );
}

export default Chatnew;
