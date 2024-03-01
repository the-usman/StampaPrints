import React from 'react'
import Navbar from '../Componants/Navbar/Navbar'
import Bannertop from '../Componants/Bannertop/Bannertop'
import QuatationForm from '../Componants/QuatationFrom/QuatationForm'
import Footer from '../Componants/Footer/Footer'
import OurBoxVerity from '../Componants/OurBoxVerity/OurBoxVerity'
import CustomMakeDesign from '../Componants/CustomMakeDesign/CustomMakeDesign'
import QnA from '../Componants/QnA/QnA'
import LetsChat from '../Componants/LetsChat/LetsChat'
import TabEx from '../Componants/TabEx/TabEx'
import ScrollCategory from '../Componants/ScrollCategory/ScrollCategory'
import NavbarNew from '../Componants/Navbar/NavbarNew'
import NavbarSlider from "../Componants/NavbarSlider/NavbarSlider"
import Chat from '../Componants/Chat/Chat'
import BannertopCatagary from '../Componants/BannertopCatagary/BannertopCatagary'
import data from "../Catagory"
import { useParams } from 'react-router-dom'
const Catagory = () => {
  const { product } = useParams();
  const { bannerTop, form, customMake, cardData, scrollCat, lastCom } = data[product];
  return (
    <>
      {/* <Navbar></Navbar> */}
      <NavbarNew></NavbarNew>
      {/* <NavbarSlider></NavbarSlider> */}
      {/* <Bannertop></Bannertop> */}
      <BannertopCatagary data={bannerTop}></BannertopCatagary>
      <QuatationForm data={form}></QuatationForm>
      <CustomMakeDesign data={customMake}></CustomMakeDesign>
      <OurBoxVerity cardData={cardData}></OurBoxVerity>
      <TabEx></TabEx>
      <ScrollCategory data={scrollCat} ></ScrollCategory>
      <QnA></QnA>
      {/* <LetsChat></LetsChat> */}
      <Chat imageSrc={lastCom.image}></Chat>
      <Footer></Footer>

    </>
  )
}

export default Catagory