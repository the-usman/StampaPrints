import React from 'react'
import NavbarNew from '../Componants/Navbar/NavbarNew'

import Samplingfirstbar from '../Componants/Samplingfirstbar/Samplingfirstbar'
import SampleFinishingOption from '../Componants/SampleFinishingOption/SampleFinishingOption'
import Samplepadetextandform from '../Componants/Samplepadetextandform/Samplepadetextandform'
import IndustryUsagesSampling from '../Componants/IndustryUsagesSampling/IndustryUsagesSampling'
import KraftPackagingBoxesCustom from '../Componants/KraftPackagingBoxesCustom/KraftPackagingBoxesCustom'
import KraftJewelleryBoxes from '../Componants/KraftJewelleryBoxes/KraftJewelleryBoxes'
import FAQsKraftPackaging from '../Componants/FAQsKraftPackaging/FAQsKraftPackaging'
import Bannarmid from '../Componants/Bannermid/Bannarmid'
import Testimonial from '../Componants/Testimonials/Images/Testimonial'
import Footer from '../Componants/Footer/Footer'
import LetsChat from '../Componants/LetsChat/LetsChat'
import Chat from '../Componants/Chat/Chat'
import Chatnew from '../Componants/Chatnew/Chatnew'
import Testimonial1 from '../Componants/Testimonials copy/Images/Testimonial1'



const Sampling = () => {
    return (
        <>
            <NavbarNew></NavbarNew>
            <Samplingfirstbar></Samplingfirstbar>
            <Samplepadetextandform></Samplepadetextandform>
            <IndustryUsagesSampling></IndustryUsagesSampling>
            <KraftPackagingBoxesCustom></KraftPackagingBoxesCustom>
            <KraftJewelleryBoxes></KraftJewelleryBoxes>
            <FAQsKraftPackaging></FAQsKraftPackaging>
            {/* <Testimonial></Testimonial> */}
            <Testimonial1></Testimonial1>
            <Bannarmid></Bannarmid>
            <Chat imageSrc={require("../Componants/Chat/sampling.png")}></Chat>
            {/* <Chatnew></Chatnew> */}
            <Footer></Footer>
        </>
    )
}

export default Sampling