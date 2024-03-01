import React, { Fragment } from 'react'
import Navupper from '../Componants/Navupper/Navupper';
import Navbar from '../Componants/Navbar/Navbar';
import AboutCom from '../Componants/About/AboutCom';
import Tabcom from '../Componants/Tabcom/Tabcom';
import ProductCard from '../Componants/ProductCard/ProductCard';
import QuatationForm from '../Componants/QuatationFrom/QuatationForm';
import Footer from '../Componants/Footer/Footer';
import TabEx from '../Componants/TabEx/TabEx';
import NavbarNew from '../Componants/Navbar/NavbarNew';
// import OurpurposeAbout from '../Componants/OurpurposeAbout/OurpurposeAbout';
import IdealAbout from '../Componants/IdealAbout/IdealAbout';
import Chatandcall from '../Componants/Chatandcall/Chatandcall';
import Testimonial from '../Componants/Testimonials/Images/Testimonial';
import QnA from "../Componants/QnA/QnA"
import Ourparposeabout from '../Componants/Ourparposeabout/Ourparposeabout';
import Idealaboutpage from '../Componants/Idealaboutpage/Idealaboutpage';
// import Idealabouttop from '../Componants/Idealabouttop/Idealabouttop';
import Testimonial1 from '../Componants/Testimonials copy/Images/Testimonial1'
import Chat from '../Componants/Chat/Chat';

function About() {
    return (
        <Fragment>

            {/* <Navupper></Navupper> */}
            {/* <Navbar></Navbar> */}
            <NavbarNew></NavbarNew>
            <Idealaboutpage></Idealaboutpage>
            <Ourparposeabout></Ourparposeabout>
            {/* <Idealabouttop></Idealabouttop> */}
            {/* <IdealAbout></IdealAbout> */}
            {/* <OurpurposeAbout></OurpurposeAbout> */}
            {/* <OurpurposeAbout></OurpurposeAbout> */}
            {/* <Testimonial></Testimonial> */}
            <Testimonial1></Testimonial1>
            <Chatandcall></Chatandcall>
            <QnA></QnA>
            <Chat imageSrc={require("../Componants/Chat/about-blog-catagary.png")}></Chat>

            <Footer></Footer>
        </Fragment>
    );

}
export default About;