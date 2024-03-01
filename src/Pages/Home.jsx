import React, { Fragment } from "react";
import Navupper from "../Componants/Navupper/Navupper";
import Navbar from "../Componants/Navbar/Navbar";
import Bannertop from "../Componants/Bannertop/Bannertop";
import Whatweoffer from "../Componants/Whatweoffer/Whatweoffer";
import Card from "../Componants/Card/Card";
import Bannarmid from "../Componants/Bannermid/Bannarmid";
import QnA from "../Componants/QnA/QnA";
import HomeBlog from "../Componants/HomeBlog/HomeBlog";
import Footer from "../Componants/Footer/Footer";
import Ideal from "../Componants/Ideal/Ideal";
import Process from "../Componants/Process/Process";
import Design from "../Componants/Design/Design";
import CustomPackage from "../Componants/CustomPackage/CustomPackage";
import Testimonial from "../Componants/Testimonials/Images/Testimonial";
import ProductCard from "../Componants/ProductCard/ProductCard";
import Whatweofferhome from "../Componants/Whatweoffer copy/Whatweoffer";
import Chat from "../Componants/Chat/Chat";
import NavbarSlider from "../Componants/NavbarSlider/NavbarSlider";
import NavbarNew from "../Componants/Navbar/NavbarNew";
import Testimonial1 from "../Componants/Testimonials copy/Images/Testimonial1";
import HomePrintingAll from "../Componants/HomePrintingAll/HomePrintingAll";
// import Testimonialnew from "../Componants/Testimonials/Images/Testimonialnew";
// import ProductCard from "../Componants/ProductCard/ProductCard";


// Fat arrow function
const Home = () => {
  return (
    <Fragment>
      {/* <Navupper></Navupper> */}
      {/* <Navbar></Navbar> */}
      <NavbarNew></NavbarNew>
      <NavbarSlider></NavbarSlider>
      {/* <Bannertop></Bannertop> */}
      <Whatweofferhome heading={"What we Offer"}></Whatweofferhome>
      {/* <Card></Card> */}
      <HomePrintingAll></HomePrintingAll>
      <Bannarmid></Bannarmid>
      <Process></Process>
      <CustomPackage></CustomPackage>
      {/* <Design></Design> */}
      <Ideal></Ideal>
      {/* <Testimonial></Testimonial> */}
      {/* <Testimonialnew></Testimonialnew> */}
      <Testimonial1></Testimonial1>
      <HomeBlog></HomeBlog>
      <QnA></QnA>
      <Chat imageSrc={require("../Componants/Chat/Home Page Bottom Illustration-02.png")}></Chat>
      <Footer></Footer>
      {/* <ProductCard></ProductCard> */}




    </Fragment>
  );
};
export default Home;
