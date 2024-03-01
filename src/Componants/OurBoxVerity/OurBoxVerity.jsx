import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import AOS from "aos";
import "aos/dist/aos.css";
import "./OurBoxVerity.css";



const OurBoxVerity = ({ cardData }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="container  wholeOurBoxVerity">
        <div className="text-center pb-3">
          <h2 className="mainHeadingH2" data-aos="fade-up">
            Our Box Variety
          </h2>
          <p className="ParagraphH3P paragraphforourbox" data-aos="fade-up">
            We Provide You The Best Custom Made design We Provide You The Best
            Custom Made design We Provide You The Best Custom Made design
          </p>
        </div>
        <div className="row">
          {cardData.map((data, index) => (
            <div className="col-md-4 pb-lg-5 pb-md-5 pb-3" key={index} data-aos="fade-up">
              <Card className="Cardforourbocvrity">
                <a href={data.link} style={{ textDecoration: "none" }}> <Card.Img variant="top" src={data.image} /></a>
                <Card.Body className="Cardbodyverity pt-2">
                  <div>
                    <a href={data.link} style={{ textDecoration: "none" }}><Card.Title className=" mainHeadingH2 text-center ">
                      {data.title}
                    </Card.Title>
                    </a>
                  </div>
                  {/* <div className=" d-flex">

                    <div>
                      <Card.Text className="textforourcustom ParagraphH3P2 col-auto">
                        {data.description}{" "}
                      </Card.Text>
                    </div>
                    <div className="col-auto text-end" style={{ width: "90px" }}>
                      <button
                        className="btn "
                        style={{
                          background: "#9BC194",
                          color: "white",
                          borderRadius: "5px",
                          fontWeight: "500",
                          fontFamily: "poppins",
                          fontSize: "10px",
                          padding: "8px",
                        }}
                      >
                        View Details
                      </button>
                    </div>

                  </div> */}
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurBoxVerity;
