import React from 'react'
import NavbarNew from '../Componants/Navbar/NavbarNew'
import NavbarSlider from '../Componants/NavbarSlider/NavbarSlider'
import NavbarSliderSampling from '../Componants/NavbarSliderSampling/NavbarSliderSampling'
import ProductCardSample from '../Componants/ProductCardSample/ProductCardSample'
import TenYear from '../Componants/TenYear/TenYear'
import MatterYourBrand from '../Componants/MatterYourBrand/MatterYourBrand'
import MoreforBusiness from '../Componants/MoreforBusiness/MoreforBusiness'
import SampleFinishingOption from '../Componants/SampleFinishingOption/SampleFinishingOption'
import WorkProcess from '../Componants/WorkProcess/WorkProcess'
import WeProudlyServe from '../Componants/WeProudlyServe/WeProudlyServe'
import Testimonial from '../Componants/Testimonials/Images/Testimonial'
import Testimonial1 from "../Componants/Testimonials copy/Images/Testimonial1";

import QnA from "../Componants/QnA/QnA"
import Footer from '../Componants/Footer/Footer'



const SampleRequest = () => {
    return (
        <>
            <NavbarNew></NavbarNew>
            {/* <NavbarSliderSampling></NavbarSliderSampling> */}
            <ProductCardSample></ProductCardSample>
            <TenYear></TenYear>
            <MatterYourBrand></MatterYourBrand>
            <MoreforBusiness></MoreforBusiness>
            <SampleFinishingOption></SampleFinishingOption>
            <WorkProcess></WorkProcess>
            <WeProudlyServe></WeProudlyServe>
            <Testimonial1></Testimonial1>
            <QnA></QnA>
            <Footer></Footer>

        </>
    )
}

export default SampleRequest