import React, { useEffect } from "react";
import "./Card.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Card() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
    console.log("AOS initialized");
    AOS.refresh();
  }, []);


  return (
    <>
      <section>
        <div className="cardforsmallscreen">
          <div className="container-fluid">
            <h2 className="headingforcard mainHeadingH2" data-aos="zoom-in">
              Explore Our Custom Packaging Solutions Design
            </h2>
            <p className="heading1forcardonly ParagraphH2P" data-aos="zoom-in">
              Start designing unique boxes with different styles, sizes, and choices. Custom Rigid boxes or Kraft boxes for retail products and many more? We can help. Custom printing and packaging ideas abound.
            </p>
            <div className="row m-2 d-flex justify-content-center ">
              <div className="col card_bg m-3 row2" data-aos="flip-down">
                <div className="main_card maincardmb">
                  <div className="align-items-center fordflexcard">
                    <img className="" src={require("./cbd.webp")} alt="" />
                    <div className="d-flex flex-column justify-content-center px-2 pt-3">
                      <h4 className="changetext1head changetext1 mainHeadingH2">CBD Packaging</h4>
                      <p className="changetext2 ParagraphH2P">
                        Unique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.nique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col  card_bg m-3 row2" data-aos="flip-down">
                <div className="main_card maincardmb">
                  <div className="align-items-center fordflexcard">
                    <img src={require("./_ARF4172a.webp")} alt="" />
                    <div className="d-flex flex-column justify-content-center ps-2 pt-3">
                      <h4 className="changetext1 changetext1head mainHeadingH2">Kraft Boxes</h4>
                      <p className="changetext2 ParagraphH2P">
                        Unique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.nique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col  card_bg m-3 row2" data-aos="flip-down">
                <div className="main_card maincardmb">
                  <div className="d-flex align-items-center fordflexcard">
                    <img src={require("./_ARF3796.webp")} alt="" />
                    <div className="d-flex flex-column justify-content-center ps-2 pt-3">
                      <h4 className="changetext1 changetext1head mainHeadingH2">Tincture Packaging</h4>
                      <p className="changetext2 ParagraphH2P">
                        Unique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.nique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row m-2">
              <div className="col  card_bg m-3 row2" data-aos="flip-down">
                <div className="main_card maincardmb">
                  <div className="d-flex align-items-center fordflexcard">
                    <img src={require("./_ARF4174.webp")} alt="" />
                    <div className="d-flex flex-column justify-content-center ps-2 pt-3">
                      <h4 className="changetext1 changetext1head mainHeadingH2">Bath Bomb Boxes</h4>
                      <p className="changetext2 ParagraphH2P">
                        Unique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.nique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col  card_bg m-3 row2" data-aos="flip-down">
                <div className="main_card maincardmb">
                  <div className="d-flex align-items-center fordflexcard">
                    <img src={require("./dfd.webp")} alt="" />
                    <div className="d-flex flex-column justify-content-center ps-2 pt-3">
                      <h4 className="changetext1 changetext1head mainHeadingH2">Vape Cartridge</h4>
                      <p className="changetext2 ParagraphH2P">
                        Unique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.nique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col  card_bg m-3 row2" data-aos="flip-down">
                <div className="main_card maincardmb">
                  <div className="d-flex align-items-center fordflexcard">
                    <img src={require("./nmnm.webp")} alt="" />
                    <div className="d-flex flex-column justify-content-center ps-2 pt-3">
                      <h4 className="changetext1 changetext1head mainHeadingH2">Display Boxes</h4>
                      <p className="changetext2 ParagraphH2P">
                        Unique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.nique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row m-2 justify-content-center ">
                <div className="col-md-4 col-sm-6 card_bg m-3 " data-aos="flip-down">
                  <div className="main_card maincardmb row2">
                    <div className="d-flex align-items-center fordflexcard">
                      <img src={require("./efer.webp")} alt="" />
                      <div className="d-flex flex-column justify-content-center ps-2 pt-3">
                        <h4 className="changetext1 changetext1head mainHeadingH2">Pre-Roll Packaging</h4>
                        <p className="changetext2 ParagraphH2P">
                          Unique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.nique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 card_bg m-3 " data-aos="flip-down">
                  <div className="main_card maincardmb row2">
                    <div className="d-flex align-items-center fordflexcard">
                      <img src={require("./sdds.webp")} alt="" />
                      <div className="d-flex flex-column justify-content-center ps-2 pt-3">
                        <h4 className="changetext1 changetext1head mainHeadingH2">Custom Mailer Boxes</h4>
                        <p className="changetext2 ParagraphH2P">
                          Unique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.nique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cardforbigscreen">
          <div className="container">
            <h2 className="headingforcard mainHeadingH2" data-aos="zoom-in">
              Explore Our Custom Packaging Solutions Design
            </h2>
            <p className="heading1forcardonly ParagraphH3P" data-aos="zoom-in">
              Start designing unique boxes with different styles, sizes, and
              choices. Custom Rigid boxes or Kraft boxes for retail products and
              many more?We can help. Custom printing and packaging ideas abound.
            </p>
            <div class="row row-cols-1 row-cols-md-2">
              <div class="col- mb-4 my-custom-card " data-aos="fade-right">
                <div class="card" style={{ margin: "10px 15px 10px 15px", backgroundColor: "#ededed", boxShadow: "0px 4px 10px 0px rgba(58, 119, 108, 0.35)", height: "546px" }}>
                  <img src={require("./Images/image.png")} class="card-img-top" alt="..." />
                  <div class="card-body text-center">
                    <h3 class="card-title mainHeadingH3">CBD Packaging</h3>
                    <p class="card-text ParagraphH3P">As the popularity of CBD products increases, so does the need for great custom packaging. As a startup or brand, it's important to invest in customized CBD packaging that not only looks good but also protects your product. Here are some reasons why custom CBD boxes are crucial for your business. <br /> <br /> </p>
                  </div>
                </div>
              </div>
              <div class="col mb-4 my-custom-card " data-aos="fade-left">
                <div class="card" style={{ margin: "10px 15px 10px 15px", backgroundColor: "#ededed", boxShadow: "0px 4px 10px 0px rgba(58, 119, 108, 0.35) ", height: "546px" }}>
                  <img src={require("./Images/image1.png")} class="card-img-top" alt="..." />
                  <div class="card-body text-center">
                    <h3 class="card-title mainHeadingH3">Kraft Boxes</h3>
                    <p class="card-text ParagraphH3P">Kraft boxes are sturdy and recyclable, making them perfect for shipping your products. In addition, Kraft boxes come in various sizes so that you can find the perfect box for your needs.
                      Their eco-friendly properties make them the ideal stock for food packaging. You will see shipping boxes made from kraft stock because of their strength and durability. </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row-cols-1 row-cols-md-2 ">
              <div class="col- mb-4 my-custom-card " data-aos="fade-right">
                <div class="card" style={{ margin: "10px 15px 10px 15px", backgroundColor: "#ededed", boxShadow: "0px 4px 10px 0px rgba(58, 119, 108, 0.35) ", height: "546px" }}>
                  <img style={{
                    height: "315px", borderRadius: "10px",
                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                  }} src={require("./Images/Tincture Packaging 427 x 315.webp")} class="card-img-top" alt="..." />
                  <div class="card-body text-center">
                    <h3 class="card-title mainHeadingH3">Tincture Packaging</h3>
                    <p class="card-text ParagraphH3P">Tincture packaging is a must if you're a retailer or a startup interested in creating your line of tinctures. Custom Tincture Boxes must protect the product while also attractively displaying its contents. When it comes to designing and packaging tinctures, you want to make sure that you create a functional and attractive product.</p>
                  </div>
                </div>
              </div>
              <div class="col mb-4 my-custom-card " data-aos="fade-left">
                <div class="card" style={{ margin: "10px 15px 10px 15px", backgroundColor: "#ededed", boxShadow: "0px 4px 10px 0px rgba(58, 119, 108, 0.35) ", height: "546px" }}>
                  <img src={require("./Images/b.png")} class="card-img-top" alt="..." />
                  <div class="card-body text-center">
                    <h3 class="card-title mainHeadingH3">Bath Bomb Boxes</h3>
                    <p class="card-text ParagraphH3P">Bath bomb boxes not only add a captivating appeal to your products but also aid you with safe storage, handling, and delivery of the items. You can astutely utilize the custom packaging for promoting new and bundled offers and creating affinity for your brand especially if you have recently started selling bath bombs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row-cols-1 row-cols-md-2 ">
              <div class="col- mb-4 my-custom-card " data-aos="fade-right">
                <div class="card" style={{ margin: "10px 15px 10px 15px", backgroundColor: "#ededed", boxShadow: "0px 4px 10px 0px rgba(58, 119, 108, 0.35) ", height: "546px" }}>
                  <img src={require("./Images/v.png")} class="card-img-top" alt="..." />
                  <div class="card-body text-center">
                    <h3 class="card-title mainHeadingH3">Vape Cartilage</h3>
                    <p class="card-text ParagraphH3P">Our premium vape cartridge packaging is designed to protect your cartridges and vape pens during transit while showcasing your brand in the best possible light. Available in a range of colors and styles, our high-quality custom boxes are suitable for brands looking to stand out. When it comes to your brand, Stampa Prints ensures it always looks its best! </p>
                  </div>
                </div>
              </div>
              <div class="col mb-4 my-custom-card " data-aos="fade-left">
                <div class="card" style={{ margin: "10px 15px 10px 15px", backgroundColor: "#ededed", boxShadow: "0px 4px 10px 0px rgba(58, 119, 108, 0.35) ", height: "546px" }}>
                  <img src={require("./Images/d.png")} class="card-img-top" alt="..." />
                  <div class="card-body text-center">
                    <h3 class="card-title mainHeadingH3">Display Boxes</h3>
                    <p class="card-text ParagraphH3P">The way you display your products can be a prime factor influencing the purchase decision of customers. Custom display boxes can be astutely utilized for pitching, promoting, and presenting retail, food, CBD, and other products. <br /><br /> <br /></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row-cols-1 row-cols-md-2 ">
              <div class="col  my-custom-card " data-aos="fade-right">
                <div class="card" style={{ margin: "10px 15px 10px 15px", backgroundColor: "#ededed", boxShadow: "0px 4px 10px 0px rgba(58, 119, 108, 0.35) ", height: "546px", }}>
                  <img src={require("./Images/pr.png")} class="card-img-top" alt="..." />
                  <div class="card-body text-center">
                    <h3 class="card-title mainHeadingH3">Pre - Roll Packaging</h3>
                    <p class="card-text ParagraphH3P">Pre-roll packaging is designed to keep your freshly rolled bud safe from harm and as fresh the day it was harvested. Making custom packaging for your pre-roll joints is not only an excellent way to make them stand out, but it can also be helpful in marketing and branding your business.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col  my-custom-card " data-aos="fade-left">
                <div class="card" style={{ margin: "10px 15px 10px 15px", backgroundColor: "#ededed", boxShadow: "0px 4px 10px 0px rgba(58, 119, 108, 0.35) ", height: "546px" }}>
                  <img src={require("./Images/cm.png")} class="card-img-top" alt="..." />
                  <div class="card-body text-center">
                    <h3 class="card-title mainHeadingH3">Custom Mailer Boxes</h3>
                    <p class="card-text ParagraphH3P ">Customized mailer boxes can play a significant role in making your brand name and logo memorable for the customers. Packaging printed with intriguing details about your other offerings will aid you with upselling and cross-selling. Make the best out of these custom boxes for getting repeat shoppers and building a distinctive brand identity. <br /><br />    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>
    </>
  );
}
