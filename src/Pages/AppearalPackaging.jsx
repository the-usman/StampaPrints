import React from 'react'
import Navupper from '../Componants/Navupper/Navupper'
import Navbar from '../Componants/Navbar/Navbar'
import Bannertop from '../Componants/Bannertop/Bannertop'
import Footer from '../Componants/Footer/Footer'
import QuatationForm from '../Componants/QuatationFrom/QuatationForm'
import CBCPackingIdeal from '../Componants/CBCPackingIdeal/CBCPackingIdeal'
import WeBelieveIn from '../Componants/WeBelieveIn/WeBelieveIn'
import LetsChat from '../Componants/LetsChat/LetsChat'
import CBCAllservices from '../Componants/CBCAllservices/CBCAllservices'
import Whatweoffer from '../Componants/Whatweoffer/Whatweoffer'
import QnA from '../Componants/QnA/QnA'
import Chatandcall from '../Componants/Chatandcall/Chatandcall'
import Whatweofferhome from "../Componants/Whatweoffer copy/Whatweoffer";
import Testimonial from '../Componants/Testimonials/Images/Testimonial'
import Bannarmid from '../Componants/Bannermid/Bannarmid'
import NavbarNew from '../Componants/Navbar/NavbarNew'
import NavbarSlider from "../Componants/NavbarSlider/NavbarSlider"
import Testimonial1 from "../Componants/Testimonials copy/Images/Testimonial1"

function AppearalPackaging() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <NavbarNew></NavbarNew>
      <Bannertop></Bannertop>
      {/* <NavbarSlider></NavbarSlider> */}
      <QuatationForm ></QuatationForm>
      <CBCPackingIdeal></CBCPackingIdeal>
      <WeBelieveIn></WeBelieveIn>
      <LetsChat></LetsChat>
      <CBCAllservices></CBCAllservices>
      {/* <Whatweoffer heading="See Why Customers Love Stampa Prints" heading2="Rated 4.6 out of 5 based on 25 reviews on " /> */}
      <Chatandcall></Chatandcall>
      <QnA></QnA>
      <Testimonial1></Testimonial1>
      <Bannarmid heading="You May Also Like"></Bannarmid>
      <Footer ></Footer>

    </>
  )
}

export default AppearalPackaging