import React from 'react'
import Navbar from '../Componants/Navbar/Navbar'
import ContactUsComponants from '../Componants/ContactUsComponants/ContactUsComponants'
import NavbarNew from '../Componants/Navbar/NavbarNew'
import Process from '../Componants/Process/Process'
import Footer from '../Componants/Footer/Footer'
import ProcessForContactus from '../Componants/ProcessForContactus/ProcessForContactus'
import QnA from '../Componants/QnA/QnA'

const ContactUs = () => {
    return (
        <>

            {/* <Navbar></Navbar> */}
            <NavbarNew></NavbarNew>
            <ContactUsComponants></ContactUsComponants>
            <ProcessForContactus></ProcessForContactus>
            <QnA></QnA>
            <Footer></Footer>
        </>
    )
}

export default ContactUs