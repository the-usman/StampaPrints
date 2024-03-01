import React, { useState } from 'react';
import "./NavbarNew.css"
import Headroom from 'react-headroom';
const NavbarNew = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleHamburgerClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const showSide = () => {
        document.getElementsByClassName('sideBarInNavbar')[0].style.marginLeft = "0%"

    }
    const closeSidebar = () => {
        document.getElementsByClassName('sideBarInNavbar')[0].style.marginLeft = "-100%"

    }

    const showDropDown = (event) => {
        const element = event.currentTarget;
        const dropdownData = element.querySelector('.dropDownData');
        const numberLi = dropdownData.getElementsByTagName('li').length;
        console.log(numberLi)
        console.log(dropdownData)
        if (!dropdownData.classList.contains('present')) {
            dropdownData.classList.add("present")
            dropdownData.style.height = `${35 / 0.9 * numberLi}px`
            dropdownData.style.margin = `5px 10px`
        }
        else {
            dropdownData.classList.remove("present")
            dropdownData.style.height = `${0}px`
            dropdownData.style.margin = `0`
        }

    };
    const showDropdown = (e) => {
        const element = e;
        console.log(element);
    }

    return (
        <>
            <Headroom className='headroomclass' style={{ zIndex: "100000", }}>
                <div className="whole_Navbar_desktop">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="upperDiv1">
                            <div className="leftupper">
                                <div className="phone_number">
                                    <i className="fa-solid fa-phone"></i>
                                    <a href="tel:1-877-296-2937">1-877-296-2937</a>
                                </div>

                                <div className="email">
                                    <i className="fa-solid fa-envelope"></i>
                                    <a href="mailto:support@stampaprints.com">support@stampaprints.com</a>
                                </div>
                            </div>
                            <div className="icons">

                                <div className="linkdin icon">
                                    <a href="https://www.linkedin.com/company/stampa-prints/" target="_blank">
                                        <i class="fa-brands fa-linkedin-in"></i>
                                    </a>
                                </div>
                                <div className="linkdin icon">
                                    <a href="https://www.facebook.com/stampaprintsusa/" target="_blank">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </div>

                                <div className="linkdin icon">
                                    <a href="https://twitter.com/StampaPrints" target="_blank">
                                        <i class="fa-brands fa-twitter"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <a href="/">
                                <img className='logoimage' src={require("./logo.png")} alt="" />
                            </a>
                            <button
                                style={{ marginRight: "20px" }}
                                className="navbar-toggler custom-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <img style={{ height: "30px" }} src={require("./Vector.png")} alt="" />
                            </button>
                            <div className="collapse navbar-collapse navformaincssis" id="navbarSupportedContent">

                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 navforcssis">
                                    <li className="nav-item">
                                        <a className="nav-link" href="samplerequest">
                                            Custom Boxes
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            id="navbarDropdown2"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"

                                        >
                                            Packaging Products
                                        </a>
                                        <div className="dropdown-menu dropdown-menu1" aria-labelledby="navbarDropdown" >
                                            <div className="container">
                                                <div className="row my-4">
                                                    <div className="col-md-4 col-lg-4 mb-3 mb-lg-0 mainmenupicturenemu1">
                                                        <div className="list-group list-group-flush navi">
                                                            <div className='mainmenupicturenemubutton'>
                                                                Packaging Products
                                                            </div>
                                                            <ul style={{ listStyle: "none", padding: 0, border: "none" }}>
                                                                <li style={{ border: "none" }}><a href="c/AppearalPackaging" className="list-group-item list-group-item-action" style={{ border: "none" }} >Apparel Packaging<i style={{ marginLeft: "" }} class="fa-solid fa-chevron-down"></i></a>
                                                                    <div className="dropDownInDNavbar">
                                                                        <a href="BeltBoxes">Belt Boxes</a><br />
                                                                        <a href="LuxuryApparelBoxes">Luxury Apparel Boxes</a> <br />
                                                                        <a href="ShirtBoxes">Shirt Boxes</a> <br />
                                                                        <a href="SocksBoxes">Sock Packaging</a> <br />
                                                                        <a href="White Apparel Boxes">White Apparel Boxes</a><br />
                                                                    </div>
                                                                </li>
                                                                <li> <a href="c/RetailPackaging" className="list-group-item list-group-item-action" style={{ border: "none" }}>Retail Packaging <i style={{ marginLeft: "3vw" }} class="fa-solid fa-chevron-down"></i></a>
                                                                    <div className="dropDownInDNavbar">
                                                                        <a href="CardboardBoxes">Cardboard Boxes</a><br />
                                                                        <a href="CorrugatedBoxes">Corrugated Boxes</a><br />
                                                                        <a href="DisplayBoxes">Display Boxes</a> <br />
                                                                        <a href="PlayingCardsBoxes">Playing Cards Boxes</a> <br />
                                                                        <a href="SleeveBoxes">Sleeve Boxes</a> <br />
                                                                    </div>
                                                                </li>
                                                                <li> <a href="c/CosmeticBoxPackaging" className="list-group-item list-group-item-action" style={{ border: "none" }}>Cosmetic Packaging <i style={{ marginLeft: "1vw" }} class="fa-solid fa-chevron-down"></i></a>
                                                                    <div className="dropDownInDNavbar">
                                                                        <a href="pd/Eyelash Boxes">EyelashBoxes</a><br />
                                                                        <a href="HairExtensionBoxes">Hair Extension Boxes</a><br />
                                                                        <a href="HairsprayBoxes">Hairspray Boxes</a><br />
                                                                        <a href="LipBalmBoxes">Lip Balm Boxes</a> <br />
                                                                        <a href="LipGlossBoxes">Lip Gloss Boxes</a><br />

                                                                    </div>
                                                                </li>
                                                                <li> <a href="c/FoodPackaging" className="list-group-item list-group-item-action" style={{ border: "none" }}>Food Packaging <i style={{ marginLeft: "3.2vw" }} class="fa-solid fa-chevron-down"></i></a>
                                                                    <div className="dropDownInDNavbar">
                                                                        <a href="BurgerBoxes">Burger Boxes</a><br />
                                                                        <a href="CakeBoxes">Cake Boxes</a><br />
                                                                        <a href="CerealBoxes">Cereal Boxes</a><br />
                                                                        <a href="PizzaBoxes">Pizza Boxes</a><br />
                                                                        <a href="TruffleBoxes">Truffle Boxes</a>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-lg-4 mb-3 mb-lg-0 mainmenupicturenemu ">
                                                        <div className="list-group list-group-flush navi navia">
                                                            <div className='mainmenupicturenemubutton'>
                                                                Popular Products
                                                            </div>
                                                            <a href="bathbombboxes" className="list-group-item list-group-item-action">Bath Bomb Boxes</a>
                                                            <a href="CBDPackaging" className="list-group-item list-group-item-action">CBD Packaging</a>
                                                            <a href="CigaretteBoxes" className="list-group-item list-group-item-action">Cigarette Boxes</a>
                                                            <a href="kraft" className="list-group-item list-group-item-action">Kraft Boxes</a>
                                                            <a href="MagneticClosureBoxes" className="list-group-item list-group-item-action">Magnetic Closure Boxes</a>
                                                            <a href="MailerBoxes" className="list-group-item list-group-item-action">Mailer Boxes</a>
                                                            <a href="PreRollPackaging" className="list-group-item list-group-item-action">Pre Roll Packaging</a>
                                                            <a href="RigidBoxes" className="list-group-item list-group-item-action">Rigid Boxes</a>
                                                            <a href="SoapBoxes" className="list-group-item list-group-item-action">Soap Boxes</a>
                                                            <a href="TincturePackaging" className="list-group-item list-group-item-action">Tincture Packaging</a>
                                                            <a href="VapeCartilage" className="list-group-item list-group-item-action">Vape Cartilage Packaging</a>
                                                        </div>
                                                    </div>
                                                    <div className="mainmenupicture col-md-4 col-lg-4 mb-3">
                                                        <a href="samplerequest" target="_blank" rel="noopener noreferrer">
                                                            <img src={require("./Dropdownmanu2.png")} alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            id="navbarDropdown1"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Printing Products
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                            <div className='mainmenupicturenemubutton'>
                                                Top Categories
                                            </div>
                                            <li>
                                                <a className="dropdown-item" href="pd2/prodcut1">
                                                    Bottle Neckers
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="pd2/prodcut2">
                                                    Booklet Printing
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Brochure Printing
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Carbonless Forms
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Catalog Printing
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Comic Book Printing
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Door Hangers
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Magazine Printing
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Custom Tote Bags
                                                </a>
                                            </li>

                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" href="ContactUs">
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                                <div>
                                    <form className="d-flex searchis1" >

                                        <input class=" form-control search" type="search" placeholder="Search..." aria-label="Search" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </Headroom>

            <div className="navimagesmall">
                <div className='Navbar_Mobile'>
                    <div>
                        <img
                            className='Icon_Size_Navbar_Hamburger'
                            src={require("./Vector.png")}
                            alt=""
                            onClick={showSide}
                        />
                    </div>
                    <div>
                        <a href="/">
                            <img className='Logo_Navbar' src={require("./logo.png")} alt="" />
                        </a>

                    </div>
                    <div>
                        <img className='me-2 Icon_Size_Navbar' src={require("./search.png")} alt="" onClick={handleHamburgerClick} />
                        <img className='Icon_Size_Navbar' src={require("./chat.png")} alt="" />
                    </div>
                </div>

                {isMenuOpen && (
                    <div>
                        <form className=" searchis1forsmall1 animationClass" >

                            <input class=" form-control search" type="search" placeholder="Search..." aria-label="Search" />
                        </form>
                    </div>
                )}
            </div>
            <div className="sideBarInNavbar">
                <div className="imageInNavbar">

                    <a href=""><img src={require('./logo.png')} alt="" className='imageLogoInNavbar' />
                    </a>
                    <img src={require('./x-icon.png')} className='x-iconInNavbar' alt=""
                        onClick={closeSidebar}
                    />
                </div>
                <div className='Menu_Item_small_Screen'>
                    <ul>
                        <li className="">
                            <a className="" href="samplerequest">
                                Custom Boxes
                            </a>
                        </li>
                        <li className='dropDown'
                            onClick={(e) => showDropDown(e)}
                        >
                            Packaging Products <i class="fa-solid fa-chevron-down"></i>
                            <div className="dropDownData">
                                <li>
                                    <a className="" href="AppearalPackaging">
                                        Apparel Packaging
                                    </a>
                                </li>
                                <li>
                                    <a className="" href="CosmeticBoxPackaging">
                                        Cosmetic Box Packaging
                                    </a>
                                </li>
                                <li>
                                    <a className="" href="RetailPackaging">
                                        Retail Packaging
                                    </a>
                                </li>
                                <li>
                                    <a className="" href="FoodPackaging">
                                        Food Packaging
                                    </a>
                                </li>
                            </div>
                        </li>
                        <li className='dropDown'
                            onClick={(e) => showDropDown(e)}
                        >
                            Printing Products <i class="fa-solid fa-chevron-down"></i>
                            <div className="dropDownData">

                                <li>
                                    <a className="" href="#">
                                        Bottle Neckers
                                    </a>
                                </li>
                                <li>
                                    <a className="" href="#">
                                        Booklet Printing
                                    </a>
                                </li>
                                <li>
                                    <a className="" href="#">
                                        Brochure Printing
                                    </a>
                                </li>
                                <li>
                                    <a className="" href="#">
                                        Carbonless Forms
                                    </a>
                                </li>
                                <li>
                                    <a className="" href="#">
                                        Catalog Printing
                                    </a>
                                </li>
                                <li>
                                    <a className="" href="#">
                                        Comic Book Printing
                                    </a>
                                </li>
                                <li>
                                    <a className="" href="#">
                                        Door Hangers
                                    </a>
                                </li>
                                <li>
                                    <a className="" href="#">
                                        Magazine Printing
                                    </a>
                                </li>
                                <li>
                                    <a className="" href="#">
                                        Custom Tote Bags
                                    </a>
                                </li>

                            </div>
                        </li>
                        <li>
                            <a className="" href="#">
                                Blogs
                            </a>
                        </li>
                        <li>
                            <a className="" href="#">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a className="" href="#">
                                Contact Us
                            </a>
                        </li>

                    </ul>
                </div>
                <div className="navimagesmallafterdropdown">
                    <div>
                        <button className='navimagesmallafterdropdownbutton'>Custom Boxes</button>
                        <h3 className='navimagesmallafterdropdownh3 mainHeadingH3'>GET 10% OFF ON YOUR FIRST
                            ORDER</h3>
                        <p className='navimagesmallafterdropdownp'>Get Free Quote</p>
                    </div>
                    <div>
                        <img src={require("./navboximg.png")} alt="" />
                    </div>
                </div>
                <div className='mainheadinggetintouch'>
                    <h3 className='mainHeadingH3'>Get in Touch</h3>
                    <div className="d-flex justify-content-between">
                        <div className="">
                            <div className="phone_number phone_numbers">
                                <i className="fa-solid fa-phone"></i>
                                <a href="tel:+18772962937">1-877-296-2937</a>
                            </div>
                            <div className="email phone_numbers">
                                <i className="fa-solid fa-envelope"></i>
                                <a href="mailto:support@stampaprints.com">support@stampaprints.com</a>
                            </div>
                        </div>
                        <div className="">

                            <div className='d-flex'>
                                <div className="linkdinsmall iconsmall">
                                    <a href="https://www.linkedin.com/company/stampa-prints/" target="_blank">
                                        <i class="fa-brands fa-linkedin-in"></i>
                                    </a>
                                </div>
                                <div className="linkdinsmall iconsmall">
                                    <a href="https://www.facebook.com/stampaprintsusa/" target="_blank">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </div>

                                <div className="linkdinsmall iconsmall">
                                    <a href="https://twitter.com/StampaPrints" target="_blank">
                                        <i class="fa-brands fa-twitter"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default NavbarNew;
