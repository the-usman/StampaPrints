import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./LetsChat.css";

function LetsChat() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust the duration of the animation
      once: true, // Set to true if you want the animation to occur only once
    });
  }, []);

  return (
    <>
      <div className="LetsChatwhole">
        <div className="container ">
          <div className="row pb-4 ">
            <div className="col-12 col-sm-6 col-md-7 col-lg-7">
              <div className="pt-2" data-aos="fade-up">
                <h2 className="mainHeadingH2 mainHeadingH2letschat">
                  Are you looking for a new way to package your CBD products? Use
                  our form to receive a quote!
                </h2>
                <p className="ParagraphH2P Paragraphletschat" data-aos="fade-up" data-aos-delay="200">
                  For a free consultation and a quick price estimate, get in touch
                  with a bespoke packaging expert right away..
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-5 col-lg-5 chatborder" data-aos="fade-left">
              <div className=" mainHeadingH2">
                <h2 className="textforchat">Have any queries? No Problem</h2>
              </div>
              <div>
                <div className="col d-flex justify-content-center align-items-center">
                  <button
                    className="btn btn-primary px-3 py-2"
                    style={{
                      backgroundColor: "#9BC194",
                      border: "none",
                      borderRadius: "5px 5px 5px 5px",
                    }}
                  >
                    Let's Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LetsChat;
