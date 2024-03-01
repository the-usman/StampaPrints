import React from 'react'
import Navbar from '../Componants/Navbar/Navbar'
import Bannertop from '../Componants/Bannertop/Bannertop'
import Whatweoffer from '../Componants/Whatweoffer copy/Whatweoffer'
import NavbarSlider from '../Componants/NavbarSlider/NavbarSlider'
import CustomPrintingAll from '../Componants/CustomPrintingAll/CustomPrintingAll'
import NavbarNew from '../Componants/Navbar/NavbarNew'
import TenYear from '../Componants/TenYear/TenYear'
import CustomerEngagement from '../Componants/CustomerEngagement/CustomerEngagement'
import FinishingOptions from '../Componants/FinishingOptions/FinishingOptions'
import CustomPackage from '../Componants/CustomPackage/CustomPackage'
import Testimonial from '../Componants/Testimonials/Images/Testimonial'
import HomeBlog from '../Componants/HomeBlog/HomeBlog'
import QnA from '../Componants/QnA/QnA'
import LetsChat from "../Componants/LetsChat/LetsChat"
import Footer from '../Componants/Footer/Footer'
import BannertopPrinting from '../Componants/BannertopPrinting/BannertopPrinting'
import Chat from '../Componants/Chat/Chat'
import Testimonial1 from '../Componants/Testimonials copy/Images/Testimonial1'

const ProductDetailHome = () => {
    return (

        <>
            {/* <Navbar></Navbar> */}
            <NavbarNew></NavbarNew>
            {/* <NavbarSlider></NavbarSlider> */}
            <BannertopPrinting></BannertopPrinting>
            <Whatweoffer></Whatweoffer>
            <TenYear></TenYear>
            <CustomPrintingAll></CustomPrintingAll>
            <FinishingOptions></FinishingOptions>
            <CustomPackage></CustomPackage>
            <CustomerEngagement></CustomerEngagement>
            {/* <Testimonial></Testimonial>*/}
            <Testimonial1></Testimonial1>
            <HomeBlog></HomeBlog>
            <QnA></QnA>
            <Chat imageSrc={require("../Componants/Chat/about-blog-catagary.png")}></Chat>
            <Footer></Footer>
        </>
    )
}

export default ProductDetailHome