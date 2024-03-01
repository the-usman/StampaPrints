import React from 'react'
import image from "./image1.png"
import image1 from "./image2.png"
import image2 from "./image3.png"
import image3 from "./image4.png"
import image4 from "./image5.png"
import image5 from "./image6.png"
import image6 from "./image7.png"
import image7 from "./image8.png"
import image8 from "./image9.png"
import("./HomePrintingAll.css")

const HomePrintingAll = (props) => {
    const projectDetail = [
        {
            image: image,
            headingbannermid: 'CBD Boxes',
            overlaytext: " Unique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.nique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.",
            link: "pd/CBDBoxes"

        },
        {
            image: image1,
            headingbannermid: 'Kraft Boxes',
            overlaytext: " Unique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.nique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.",
            link: "pd/KraftBoxes"
        },
        {
            image: image2,
            headingbannermid: 'Tincture Packaging',
            overlaytext: " Unique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.nique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.",
            link: "pd/TincturePackaging"
        },
        {
            image: image3,
            headingbannermid: 'Sleeve Boxes',
            overlaytext: " Unique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.nique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.",
            link: "pd/SleeveBoxes"
        },
        {
            image: image4,
            headingbannermid: 'Bath Bomb Boxes',
            overlaytext: " Unique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.nique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.",
            link: "pd/BathBombBoxes"
        },
        {
            image: image5,
            headingbannermid: 'Vape Cartilage',
            overlaytext: " Unique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.nique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.",
            link: "pd/VapeCartilage"
        },
        {
            image: image6,
            headingbannermid: 'Pre- Roll Packaging ',
            overlaytext: " Unique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.nique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.",
            link: "pd/PreRollPackaging "
        },
        {
            image: image7,
            headingbannermid: 'Custom Mailer Boxes',
            overlaytext: " Unique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.nique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.",
            link: "pd/CustomMailerBoxes"
        },

        {
            image: image8,
            headingbannermid: 'Display Boxes',
            overlaytext: " Unique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.nique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.",
            link: "pd/DisplayBoxes"
        }
    ];
    return (
        <>
            <div className=" wholecustompall">
                <div className="row pb-3">
                    <div className="col-12">
                        <h2 className="text-center mainHeadingH2" data-aos="zoom-in"> {props.heading ? (props.heading) : "Explore Our Custom Packaging Solutions Design"}</h2>
                        <p className="heading1formid" data-aos="zoom-in"> {props.headingtext ? (props.headingtext) : "Start designing unique boxes with different styles, sizes, and choices. Custom Rigid boxes or Kraft boxes for retail products and many more?We can help. Custom printing and packaging ideas abound."}</p>
                    </div>

                    {projectDetail.map((val, i) => (
                        <div key={i} className="col-12 col-sm-6 col-md-6 col-lg-4 mb-3 bannarmidclasspsl" data-aos="fade-right" data-aos-delay={i * 200}>
                            <div className="card cardrangforcpahpl">
                                <img src={val.image} className="card-img-top" alt={val.headingbannermid} />
                                <div className="card-body cardhovertexthpa1">
                                    <h4 className="card-title text-center cardhovertexthpa cardtextdownhpa mainHeadingH2"><a href="pd">{val.headingbannermid}</a></h4>
                                </div>
                                <div class="overlayhomeprintingall">
                                    <div class="texthomeprintingall"><h4 className='mainHeadingH2'>{val.headingbannermid} </h4>
                                        <div className='ParagraphH2P '>{val.overlaytext}</div>
                                        <div className="d-flex justify-content-center pt-2">
                                            <a
                                                href={val.link}
                                                className="btn btnblog px-2 py-1"
                                                style={{
                                                    color: "white"
                                                }}
                                            >
                                                View Details
                                            </a>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default HomePrintingAll