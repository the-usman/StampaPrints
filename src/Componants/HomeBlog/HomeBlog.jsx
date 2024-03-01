import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import "aos/dist/aos.css"; // Import AOS CSS
import "./HomeBlog.css";
import AOS from "aos"; // Import AOS

const cardData = [
  {
    image: require("./images 1.png"),
    logo: require("./logo1.jfif"),
    title: "The importance of custom packages for small businesses",
    date: "John Doe | 31 August 2023 | 3Min. To Read",
    description:
      "Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...",
    link: "BlogDetailPage",
  },
  {
    image: require("./images 2.png"),
    logo: require("./logo1.jfif"),
    title: "The importance of custom packages for small businesses",
    date: "John Doe | 31 August 2023 | 3Min. To Read",
    description:
      "Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...",
    link: "BlogDetailPage",
  },

  {
    image: require("./images 3.png"),
    logo: require("./logo1.jfif"),
    title: "The importance of custom packages for small businesses",
    date: "John Doe | 31 August 2023 | 3Min. To Read",
    description:
      "Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...",
    link: "BlogDetailPage",
  },
  {
    image: require("./images 4.png"),
    logo: require("./logo1.jfif"),
    title: "The importance of custom packages for small businesses",
    date: "John Doe | 31 August 2023 | 3Min. To Read",
    description:
      "Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...",
    link: "BlogDetailPage",
  },
  // Add more data for additional cards
];

export default function HomeBlog() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

  return (
    <div className="completehomeblog">
      <div className="container pb-3">
        <div className="text-center pb-3">
          <h2 className="hbcolor mainHeadingH2" data-aos="zoom-in">Get the Expert's Advice on Custom Boxes</h2>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 pb-4 ">
          {cardData.map((data, index) => (
            <div
              className="col paddingforhomeblogmb"
              key={index}
              data-aos="fade-left"
              data-aos-delay={index * 200} // Delay each card animation
            >
              <Card style={{ borderRadius: "5px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                <Card.Img variant="top" src={data.image} />
                <Card.Body >
                  <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                    {data.title}
                  </Card.Title>
                  <Card.Subtitle
                    className="mb-1 text-muted"
                    style={{ fontSize: "9px" }}
                  >
                    <img
                      src={data.logo}
                      alt="Logo"
                      width="20"
                      height="20"
                      style={{ borderRadius: "50%" }}
                    />
                    {data.date}
                  </Card.Subtitle>
                  <Card.Text style={{ fontSize: "9px" }}>
                    {data.description}
                    <a className="font-weight-bold" href={data.link} style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold" }}>
                      Read More
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center pt-2">
          <button
            className="btn btnblog px-3 py-2"
            style={{
              color: "white"
            }}
          >
            <a href="ourblog">Read More Blogs</a>
          </button>
        </div>
      </div>
    </div>
  );
}
