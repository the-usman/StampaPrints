import React from 'react';
import { Card } from 'react-bootstrap'; // Assuming you are using Bootstrap
import "./RecentBlogs.css"
const cardData = [
    {
        type: "CBD Packaging",
        image: require("./1.png"),
        logo: require("./Ellipse 322.png"),
        title: "The importance of custom packages for small businesses",
        date: "John Doe | 31 August 2023 | 3Min.To Read",
        description: "Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...",
        link: "BlogDetailPage",
    },
    {
        type: "CBD Packaging",
        image: require("./2.png"),
        logo: require("./Ellipse 322.png"),
        title: "The importance of custom packages for small businesses",
        date: "John Doe | 31 August 2023 | 3Min. To Read",
        description: "Look no further than Stampa Prints for affordable comic book printing services! We specialize in delivering top-notch printing...",
        link: "BlogDetailPage",
    },
    // Add more data as needed
];


const RecentBlogs = () => {
    return (
        <>
            <div className="wholeclassname">
                <div className='row' >
                    <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                        <h2 className='mainHeadingH2 mainHeadingblog'>Recent Blogs</h2>
                        <div className=" pb-3">

                            {cardData.map((data, index) => (
                                <div className="col paddingforhomeblogmb" key={index}>
                                    <div class="card cardforrecentblogwhole">
                                        <div class="row g-0">
                                            <div class="col-md-5 cardforrecentblog">
                                                <img src={data.image} class="img-fluid rounded-start" alt="" />
                                            </div>
                                            <div class="col-md-7 cardtextwholeblog1">
                                                <div class="card-body cardtextwholeblog">
                                                    <h6 class="card-title" style={{ backgroundColor: "#E9FFE5", width: "130px", borderRadius: "5px", padding: "5px" }}>{data.type}</h6>
                                                    <h4 class="card-title mainHeadingH3">{data.title}</h4>
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
                                                    <p class="card-text fontsizepararecent ParagraphH2P">{data.description}
                                                        <a className="font-weight-bold" href={data.link} style={{ color: "#28354c", textDecoration: "none", fontWeight: "bold" }}>
                                                            Read More
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-4 mainforrecentblog"> <h2 className='mainHeadingH2'>Top News</h2>
                        <div className="col paddingforhomeblogmb">
                            <div class="card cardforrecentblogwhole">
                                <div class="row g-0">
                                    <div class="col-md-4 cardforrecentblog1">
                                        <img src={require("./s1.png")} class="img-fluid rounded-start" alt="" />
                                    </div>
                                    <div class="col-md-8 cardtextwholeblog1">
                                        <div class="card-body cardtextwholeblog2">
                                            <h6 class="card-title" style={{ backgroundColor: "#E9FFE5", width: "133px", borderRadius: "5px", padding: "5px", fontSize: "10px" }}>Retail Packaging</h6>
                                            <h4 class="card-title mainHeadingH3">The importance of custom packages for small businesses</h4>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./Ellipse 322.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023
                                            </Card.Subtitle>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col paddingforhomeblogmb">
                            <div class="card cardforrecentblogwhole">
                                <div class="row g-0">
                                    <div class="col-md-4 cardforrecentblog1">
                                        <img src={require("./s2.png")} class="img-fluid rounded-start" alt="" />
                                    </div>
                                    <div class="col-md-8 cardtextwholeblog1">
                                        <div class="card-body cardtextwholeblog2">
                                            <h6 class="card-title" style={{ backgroundColor: "#E9FFE5", width: "133px", borderRadius: "5px", padding: "5px", fontSize: "10px" }}>Retail Packaging</h6>
                                            <h4 class="card-title mainHeadingH3">The importance of custom packages for small businesses</h4>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./Ellipse 322.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023
                                            </Card.Subtitle>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col paddingforhomeblogmb">
                            <div class="card cardforrecentblogwhole">
                                <div class="row g-0">
                                    <div class="col-md-4 cardforrecentblog1">
                                        <img src={require("./s3.png")} class="img-fluid rounded-start" alt="" />
                                    </div>
                                    <div class="col-md-8 cardtextwholeblog1">
                                        <div class="card-body cardtextwholeblog2">
                                            <h6 class="card-title" style={{ backgroundColor: "#E9FFE5", width: "133px", borderRadius: "5px", padding: "5px", fontSize: "10px" }}>Retail Packaging</h6>
                                            <h4 class="card-title mainHeadingH3">The importance of custom packages for small businesses</h4>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./Ellipse 322.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023
                                            </Card.Subtitle>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col paddingforhomeblogmb">
                            <div class="card cardforrecentblogwhole">
                                <div class="row g-0">
                                    <div class="col-md-4 cardforrecentblog1">
                                        <img src={require("./s4.png")} class="img-fluid rounded-start" alt="" />
                                    </div>
                                    <div class="col-md-8 cardtextwholeblog1">
                                        <div class="card-body cardtextwholeblog2">
                                            <h6 class="card-title" style={{ backgroundColor: "#E9FFE5", width: "133px", borderRadius: "5px", padding: "5px", fontSize: "10px" }}>Retail Packaging</h6>
                                            <h4 class="card-title mainHeadingH3">The importance of custom packages for small businesses</h4>
                                            <Card.Subtitle
                                                className="mb-1 text-muted"
                                                style={{ fontSize: "9px" }}
                                            >
                                                <img
                                                    src={require("./Ellipse 322.png")}
                                                    alt="Logo"
                                                    width="20"
                                                    height="20"
                                                    style={{ borderRadius: "50%" }}
                                                />
                                                John Doe | 31 August 2023
                                            </Card.Subtitle>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default RecentBlogs;
