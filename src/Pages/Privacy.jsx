import React, { Fragment } from 'react';
import Navbar from '../Componants/Navbar/Navbar';
import Navupper from '../Componants/Navupper/Navupper';
import PrivacyPolicy from '../Componants/PrivacyPolicy/PrivacyPolicy';
import Footer from '../Componants/Footer/Footer';
import LetsChat from '../Componants/LetsChat/LetsChat';
import NavbarNew from '../Componants/Navbar/NavbarNew';
import Chatnew from '../Componants/Chatnew/Chatnew';


function Privacy() {
  return (
    <Fragment>
      {/* <Navupper></Navupper> */}
      {/* <Navbar></Navbar> */}
      <NavbarNew></NavbarNew>
      <PrivacyPolicy></PrivacyPolicy>
      {/* <LetsChat></LetsChat> */}
      <Chatnew></Chatnew>
      <Footer></Footer>
    </Fragment>
  );
}

export default Privacy;
