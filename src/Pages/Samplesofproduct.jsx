import React from 'react'
import Navbar from '../Componants/Navbar/Navbar'
import NavbarNew from '../Componants/Navbar/NavbarNew'
import NavbarSlider from '../Componants/NavbarSlider/NavbarSlider'
import SamplesandPrototypes from '../Componants/SamplesandPrototypes/SamplesandPrototypes'
import TabEx from '../Componants/TabEx/TabEx'
import Chat from '../Componants/Chat/Chat'
import Footer from '../Componants/Footer/Footer'

const Samplesofproduct = () => {
    return (
        <>
            <NavbarNew></NavbarNew>
            <NavbarSlider></NavbarSlider>
            <SamplesandPrototypes></SamplesandPrototypes>
            <TabEx></TabEx>
            <Chat></Chat>
            <Footer></Footer>
        </>
    )
}

export default Samplesofproduct