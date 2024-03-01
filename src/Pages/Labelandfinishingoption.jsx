import React from 'react'
import NavbarNew from '../Componants/Navbar/NavbarNew'
import NavbarSlider from '../Componants/NavbarSlider/NavbarSlider'
import LabelsandStickers from '../Componants/LabelsandStickers/LabelsandStickers'
import FinishingOptions from '../Componants/FinishingOptions/FinishingOptions'
import Footer from '../Componants/Footer/Footer'
import NavbarSliderLable from '../Componants/NavbarSliderLable/NavbarSliderLable'

const Labelandfinishingoption = () => {
    return (
        <>

            <NavbarNew></NavbarNew>
            {/* <NavbarSlider></NavbarSlider> */}
            <NavbarSliderLable></NavbarSliderLable>
            <LabelsandStickers></LabelsandStickers>
            <FinishingOptions></FinishingOptions>
            <Footer></Footer>
        </>
    )
}

export default Labelandfinishingoption