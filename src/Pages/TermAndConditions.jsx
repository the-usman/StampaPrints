import React, { Fragment } from 'react'
import Navupper from '../Componants/Navupper/Navupper'
import Navbar from '../Componants/Navbar/Navbar';
import TermConditions from '../Componants/TermCon/TermConditions';
import Footer from '../Componants/Footer/Footer';
import LetsChat from '../Componants/LetsChat/LetsChat';
import NavbarNew from '../Componants/Navbar/NavbarNew';
import Chatnew from '../Componants/Chatnew/Chatnew';

const TremAndCondition = () => {
    return (
        <Fragment>
            {/* <Navupper></Navupper> */}
            {/* <Navbar></Navbar> */}
            <NavbarNew></NavbarNew>
            <TermConditions></TermConditions>
            {/* <LetsChat></LetsChat> */}
            <Chatnew></Chatnew>
            <Footer heading="Footer Term and con" color="red"></Footer>
        </Fragment>
    );
}
export default TremAndCondition;