import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import './TabBlog.css'
import Card from 'react-bootstrap/Card';


const Tab = styled.button`
  font-size: 16px !important;
  color: #3A776C !important;
  padding: 5px 8px !important;
  margin: 0px 10px;
  cursor: pointer;
  opacity: 1;
  background: transparent;
  border: 1px solid #3A776C;
  border-radius: 5px;
  outline: 0;
  @media (max-width: 500px) {
    /* Adjust styles for smaller screens */
    font-size: 14px !important;
    margin:0px 5px !important;

  }
  ${({ active }) =>
        active &&
        `

    border: 1px solid #9BC194;
  background-color: #549376;
  color: #f6f6f6 !important;
    opacity: 1;
  `}
`;

const types = ['All', 'CBD Packaging', "Retail Packaging", "Custom Packaging", "Cosmetic Packaging", "Custom Printing"];



const ButtonGroup = styled.div`
  display: flex;
`;



const TabBlog = () => {
    const [active, setActive] = useState(types[0]);

    useEffect(() => {
        types.forEach((type) => {
            let id = type.split(" ")[0]
            if (type == "Custom Printing") {
                id = "Printing"
            }

            const element = document.getElementById(id);
            if (element) {
                element.style.transition = '0.3s'
                element.style.display = active === type ? 'block' : 'none';
                if (active === type)
                    element.classList.add('animationClass')


            }
        });

    }, [active])

    return (
        <div>
            <ButtonGroup style={{
                margin: "0 auto",
                width: "85vw",
                // padding: "15px 30px",
                backgroundColor: "",
                borderRadius: "10px",
                justifyContent: "center",
                scrollbarColor: "transparent transparent",
            }} className='ButtonGroupblog'>
                {types.map(type => (
                    <Tab
                        key={type}
                        active={active === type}
                        onClick={() => setActive(type)}
                        style={{ padding: "0px", marginRight: "", fontSize: "30px", fontWeight: "600px", color: "rgba(21,85,95,1)" }}
                        className='scrollbarhidden'
                    >
                        {type.split(" ")[0]}&nbsp;{type.split(" ")[1]}
                    </Tab>
                ))}
            </ButtonGroup>
            <div id="All">
                <div className="tabblogforall">
                    <div className="tabblogforallforrow">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 1.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 2.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 3.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tabblogforallforrow">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 4.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./image 5.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 6.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tabblogforallforrow">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 7.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 8.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 9.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div id="CBD">
                <div className="tabblogforall">
                    <div className="tabblogforallforrow">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 1.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 2.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 3.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tabblogforallforrow">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 4.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./image 5.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 6.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tabblogforallforrow">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 7.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 8.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 9.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div id="Retail">
                <div className="tabblogforall">
                    <div className="tabblogforallforrow">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 1.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 2.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 3.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tabblogforallforrow">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 4.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./image 5.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 6.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tabblogforallforrow">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 7.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 8.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 9.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div id="Custom">
                <div className="tabblogforall">
                    <div className="tabblogforallforrow">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 1.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 2.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 3.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tabblogforallforrow">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 4.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./image 5.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 6.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tabblogforallforrow">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 7.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 8.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 9.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div id="Cosmetic">
                <div className="tabblogforall">
                    <div className="tabblogforallforrow">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 1.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 2.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 3.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tabblogforallforrow">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 4.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./image 5.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 6.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tabblogforallforrow">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 7.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 8.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 9.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div id="Printing">
                <div className="tabblogforall">
                    <div className="tabblogforallforrow">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 1.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 2.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 3.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tabblogforallforrow">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 4.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./image 5.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 6.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tabblogforallforrow">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 7.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 8.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="col paddingforhomeblogmb">
                                    <Card style={{ borderRadius: "15px", backgroundColor: "#F6F6F6", marginBottom: "4px", padding: "0px" }}>
                                        <Card.Img variant="top" src={require("./images 9.png")} />
                                        <Card.Body >
                                            <Card.Title style={{ fontSize: "15px", paddingBottom: "5px", color: "#38483E" }}>
                                                The importance of custom packages for small businesses
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./logo.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023 | 3Min.To Read
                                            </Card.Subtitle>
                                            <Card.Text style={{ fontSize: "9px" }}>
                                                Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...
                                                <a href="BlogDetailPage" className="font-weight-bold" style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold", cursor: "pointer" }}>
                                                    Read More
                                                </a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TabBlog