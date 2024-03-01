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
import("./CustomPrintingAll.css")

const CustomPrintingAll = (props) => {
    const projectDetail = [
        {
            image: image,
            headingbannermid: 'Brochure Printing',
        },
        {
            image: image1,
            headingbannermid: 'Carbonless Forms',
        },
        {
            image: image2,
            headingbannermid: 'Catalog Printing',
        },
        {
            image: image3,
            headingbannermid: 'Comic Book Printing',
        },
        {
            image: image4,
            headingbannermid: 'Bottle Neckers',
        },
        {
            image: image5,
            headingbannermid: 'Booklet Printing ',
        },
        {
            image: image6,
            headingbannermid: 'Door Hangers',
        },
        {
            image: image7,
            headingbannermid: 'Magazine Printing',
        },
        {
            image: image8,
            headingbannermid: 'Custom Tote Bags',
        }
    ];
    return (
        <>
            <div className="container wholecustompall">
                <div className="row pb-3">
                    <div className="col-12">
                        <h2 className="text-center mainHeadingH2" data-aos="zoom-in"> {props.heading ? (props.heading) : "Empower Your Brand With Our Custom Printing Solutions"}</h2>
                        <p className="ParagraphH3P text-center" data-aos="zoom-in"> {props.headingtext ? (props.headingtext) : "Elevate your brand with our custom printing: quality, innovation, and attention to detail."}</p>
                    </div>

                    {projectDetail.map((val, i) => (
                        <div key={i} className="col-12 col-sm-6 col-md-6 col-lg-4 mb-3 bannarmidclass1" data-aos="fade-right" data-aos-delay={i * 200}>
                            <div className="card cardrangforcpa">
                                <img src={val.image} className="card-img-top" alt={val.headingbannermid} />
                                <div className="card-body">
                                    <h3 className="card-title text-center cardhovertext cardtextdown mainHeadingH2">{val.headingbannermid}</h3>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default CustomPrintingAll