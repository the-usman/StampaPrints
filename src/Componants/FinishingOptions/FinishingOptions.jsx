import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./FinishingOptions.css";

// Import your images using ES6 import syntax
import image1 from "./images/gloss.webp";
import image2 from "./images/matt.webp";
import image3 from "./images/Rectangle 181.webp";
import image4 from "./images/cp.webp";
import image5 from "./images/ac.webp";
import image6 from "./images/spot uv.webp";

const FinishingOptions = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <>
            <div>
                <div className='text-center headingforoptioncomplete'>
                    <h2 className='headingforoption mainHeadingH2' data-aos="zoom-in-up">Acquisitive Finishing Options for Perfect Looks</h2>
                    <p className='heading1forcardonlyoption ParagraphH2P' data-aos="zoom-in-up">Stampa Prints offers comic book finishing options including lamination, binding, foil stamping, and embossing for enhanced durability and luxury aesthetics.</p>
                </div>
                <div className="row changeforimage1">
                    {[
                        { imgSrc: image1, alt: "Glossy Paper", label: "Glossy Paper" },
                        { imgSrc: image2, alt: "Matt Paper", label: "Matt Paper" },
                        { imgSrc: image3, alt: "Newspaper Print", label: "Newspaper Print" },
                        { imgSrc: image4, alt: "Coated Paper", label: "Coated Paper" },
                        { imgSrc: image5, alt: "Aqueous Coating", label: "Aqueous Coating" },
                        { imgSrc: image6, alt: "Spot UV", label: "Spot UV" },
                    ].map((card, index) => (
                        <div
                            key={index}
                            className="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2 col-xxl-2 changeforoption"
                            data-aos="fade-right"
                            data-aos-offset="200"
                            data-aos-delay={200 * index} // Adjust the delay as needed
                        >
                            <div style={{ maxWidth: '100%' }}>
                                <img src={card.imgSrc} alt={card.alt} style={{ width: '100%', height: '150px' }} />
                            </div>
                            <div className='text-center pt-1' style={{ color: "#15555f" }}>{card.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FinishingOptions;
