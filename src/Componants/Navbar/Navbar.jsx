import React from 'react';
import './Navbar.css';
import logo from './logo.png';

export default function Navbar(props) {

  const removeLogo = () => {
    const element = document.body.getElementsByClassName("navbar-toggler")[0];
    console.log(element)
    if (!element.classList.contains("collapsed")) {
      document.getElementsByClassName('logo')[0].style.display = "none"
    }
    else {
      document.getElementsByClassName('logo')[0].style.display = "block"
    }

  }
  return (
    <div className="return">

      <div className="Navbar">
        <div className="upperDiv">
          <div className="leftupper">
            <div className="phone_number">
              <i class="fa-solid fa-phone"></i> 1-877-296-2937
            </div>
            <div className="email">
              <i class="fa-solid fa-envelope"></i> support@stampaprints.com
            </div>
          </div>
          <div className="icons">
            <div className="linkdin icon">
              <i class="fa-brands fa-linkedin-in"></i>
            </div>
            <div className="linkdin icon">
              <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div className="linkdin icon">
              <i class="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>

        {/* A Real Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light navformobile">

          <div>
            <a className="navbar-brand logo px-5 py-3" href="/">
              <img src={logo} alt="" />
            </a>
          </div>

          <div className="container-fluid  forcenter1">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={removeLogo}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse mt-3 stylefora" id="navbarSupportedContent" style={{ marginLeft: "0%" }} >
              <div style={{ width: "100%" }} >
                <ul className="navbar-nav  mb-2 mb-lg-0  gap-2" style={{ marginLeft: '45px' }}>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
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
                    <div className="dropdown-menu dropdown-menu1 mt-4" aria-labelledby="navbarDropdown" >
                      <div className="container">
                        <div className="row my-4">
                          <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
                            <div className="list-group list-group-flush">
                              <a href="#" className="list-group-item list-group-item-action">Apparel Packaging</a>
                              <a href="#" className="list-group-item list-group-item-action">Belt Boxes</a>
                              <a href="#" className="list-group-item list-group-item-action">Luxury Apparel Boxes</a>
                              <a href="#" className="list-group-item list-group-item-action">Shirt Boxes</a>
                              <a href="#" className="list-group-item list-group-item-action">Sock Packaging</a>
                              <a href="#" className="list-group-item list-group-item-action">White Apparel Boxes</a>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
                            <div className="list-group list-group-flush">
                              <a href="#" className="list-group-item list-group-item-action">Retail Packaging</a>
                              <a href="#" className="list-group-item list-group-item-action">Cardboard Boxes</a>
                              <a href="#" className="list-group-item list-group-item-action">Corrugated Boxes</a>
                              <a href="#" className="list-group-item list-group-item-action">Display Boxes</a>
                              <a href="#" className="list-group-item list-group-item-action">Playing Cards Boxes</a>
                              <a href="#" className="list-group-item list-group-item-action">Sleeve Boxes</a>
                            </div>
                          </div>

                          <div className="col-md-6 col-lg-3 mb-3 mb-md-0">
                            <div className="list-group list-group-flush">
                              <a href="#" className="list-group-item list-group-item-action">Retail Packaging</a>
                              <a href="#" className="list-group-item list-group-item-action">Cardboard Boxes</a>
                              <a href="#" className="list-group-item list-group-item-action">Corrugated Boxes</a>
                              <a href="#" className="list-group-item list-group-item-action">Display Boxes</a>
                              <a href="#" className="list-group-item list-group-item-action">Playing Cards Boxes</a>
                              <a href="#" className="list-group-item list-group-item-action">Sleeve Boxes</a>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-3">
                            <div className="list-group list-group-flush">
                              <a href="#" className="list-group-item list-group-item-action">Retail Packaging</a>
                              <a href="#" className="list-group-item list-group-item-action">Cardboard Boxes</a>
                              <a href="#" className="list-group-item list-group-item-action">Corrugated Boxes</a>
                              <a href="#" className="list-group-item list-group-item-action">Display Boxes</a>
                              <a href="#" className="list-group-item list-group-item-action">Playing Cards Boxes</a>
                              <a href="#" className="list-group-item list-group-item-action">Sleeve Boxes</a>
                            </div>
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
                      <li>
                        <a className="dropdown-item" href="#">
                          Bottle Neckers
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
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
                    <a className="nav-link" href="#">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <form className="d-flex searchis">

                  <input class="search" type="search" placeholder="Search..." />


                </form>
              </div>

            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
