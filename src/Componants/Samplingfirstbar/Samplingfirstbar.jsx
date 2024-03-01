import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import { useSnapCarousel } from 'react-snap-carousel';
import AOS from 'aos';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Samplingfirstbar.css';

const Samplingfirstbar = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    // Sample card data
    const cardData = [
        { Image: require("./1.png") },
        { Image: require("./2.png") },
        { Image: require("./3.png") },
        { Image: require("./4.png") },
        { Image: require("./5.png") },
        { Image: require("./6.png") },
    ];

    const AdvancedCarousel = () => {
        const { scrollRef, pages, activePageIndex, goTo } = useSnapCarousel();

        // Slick slider settings
        const slickSettings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        margin: 10,
                    },
                },
            ],
            margin: 10,
        };

        return (
            <>
                <div className="wholeSamplingfirstbar container-fluid">
                    <div className="col-12">
                        <h2 className='mainHeadingH2' data-aos="fade-up">Custom Kraft Boxes</h2>
                        <p className='ParagraphH2P' data-aos="fade-up" data-aos-delay="200">
                            CBD packaging is an important aspect of any CBD brand. Unique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.CBD packaging is an important aspect of any CBD brand. Unique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.CBD packaging is an important aspect of any CBD brand. Unique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <Slider {...slickSettings}>
                                {cardData.map((card, i) => (
                                    <div key={i} data-aos="fade-up" data-aos-delay={`${i * 100}`}>
                                        <div className="cardforSamplingfirstbar">
                                            <img src={card.Image} alt={`Card ${i + 1}`} />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 d-flex justify-content-center mt-3">
                            {pages.map((_, i) => (
                                <div key={i} className="mx-2">
                                    <button
                                        className={`pagination-button ${i === activePageIndex ? 'active' : ''}`}
                                        onClick={() => goTo(i)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        );
    };

    return <AdvancedCarousel />;
};

export default Samplingfirstbar;
