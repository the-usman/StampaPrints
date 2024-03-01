import React from 'react'
import Navbar from '../Componants/Navbar/Navbar'
import NavbarNew from '../Componants/Navbar/NavbarNew'
import NavbarSlider from '../Componants/NavbarSlider/NavbarSlider'
import Ideal from '../Componants/Ideal/Ideal'
import IdealPortfolio from '../Componants/IdealPortfolio/IdealPortfolio'
import Tabportfolioio from '../Componants/TabPortfolio/Tabportfolio'
import Testimonial from '../Componants/Testimonials/Images/Testimonial'
import GetinTouch from '../Componants/GetinTouch/GetinTouch'
import Footer from '../Componants/Footer/Footer'
import Testimonial1 from '../Componants/Testimonials copy/Images/Testimonial1'


const Pertfolio = () => {
    return (
        <>
            <NavbarNew></NavbarNew>
            {/* <NavbarSlider></NavbarSlider> */}
            <IdealPortfolio></IdealPortfolio>
            <Tabportfolioio></Tabportfolioio>
            <Testimonial1></Testimonial1>
            <GetinTouch></GetinTouch>
            <Footer></Footer>
        </>
    )
}

export default Pertfolio