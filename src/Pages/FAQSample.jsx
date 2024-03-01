import React from 'react'
import NavbarNew from '../Componants/Navbar/NavbarNew'
import NavbarSlider from '../Componants/NavbarSlider/NavbarSlider'
import FAQqnatab from '../Componants/FAQqnatab/FAQqnatab'
import TabFAQ from '../Componants/TabFAQ/TabFAQ'
import LetsChat from '../Componants/LetsChat/LetsChat'
import Footer from '../Componants/Footer/Footer'
import Chat from '../Componants/Chat/Chat'

const FAQSample = () => {
    return (
        <>
            <NavbarNew></NavbarNew>
            {/* <NavbarSlider></NavbarSlider> */}
            <TabFAQ></TabFAQ>
            {/* <LetsChat></LetsChat> */}
            <Chat imageSrc={require("../Componants/Chat/chatfaqs.png")}></Chat>
            <Footer></Footer>
        </>
    )
}

export default FAQSample