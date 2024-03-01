import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import "aos/dist/aos.css"; // Import AOS CSS
import "./MoreforBusiness.css";
import AOS from "aos"; // Import AOS

const cardData = [
  {
    image: require("./images 1.png"),
    title: "Tuck Boxes",
    description:
      "nique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers impression on consumers",
  },
  {
    image: require("./images 2.png"),
    title: "Mailer Box",
    description:
      "nique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers impression on consumers",
  },

  {
    image: require("./images 3.png"),
    title: "Sleeve Box",
    description:
      "nique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers impression on consumers",
  },
  {
    image: require("./images 4.png"),
    title: "Magnetic Closure Box",
    description:
      "nique and eye-catching CBD packaging is one way to set your brand apart and create a lasting impression on consumers impression on consumers",
  },
  // Add more data for additional cards
];

export default function MoreforBusiness() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

  return (
    <div className="wholeMoreforBusiness">
      <div className="container">
        <div className=" pb-3">
          <h2 className="mainHeadingH2" data-aos="zoom-in">Explore Box Styles, Stock, and More for Your Business.
          </h2>
          <p className="ParagraphH2P ParagraphMoreforBusiness">Custom boxes provide a unique packaging solution tailored to your business style and product needs. However, not all custom packaging is the same. Selecting the right box involves considering factors like product nature and intended use. For example, the box style for shipping differs from in-store display, emphasizing the need for a strategic packaging approach.</p>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 moreforbussnisecard ">
          {cardData.map((data, index) => (
            <div
              className="col paddingforhomeblogmb"
              key={index}
              data-aos="fade-left"
              data-aos-delay={index * 200} // Delay each card animation
            >
              <Card style={{ borderRadius: "5px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "10px" }}>
                <Card.Img variant="top" src={data.image} />
                <Card.Body className='p-0 pt-2 text-center'>
                  <Card.Title style={{ fontSize: "15px", paddingBottom: "0px", color: "#15555F" }}>
                    {data.title}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "10px" }}>
                    {data.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center pt-2">
          <button
            className="btn btnblog px-4 py-2"
            style={{
              color: "white"

            }}
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
}
