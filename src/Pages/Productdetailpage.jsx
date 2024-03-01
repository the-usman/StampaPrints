import React, { Fragment } from 'react'
import Navupper from '../Componants/Navupper/Navupper'
import Navbar from '../Componants/Navbar/Navbar'
import ProductCard from '../Componants/ProductCard/ProductCard'
// import Whatweoffer from '../Componants/Whatweoffer/Whatweoffer'
import Footer from '../Componants/Footer/Footer'
import Tabcom from '../Componants/Tabcom/Tabcom'
import Whatweoffer from '../Componants/Whatweoffer copy/Whatweoffer'
import QnA from '../Componants/QnA/QnA'
import Bannarmid from '../Componants/Bannermid/Bannarmid'
import NavbarNew from '../Componants/Navbar/NavbarNew'
import ProductData from '../ProductData'
import { useParams } from 'react-router-dom'

function Productdetailpage() {
  const { index } = useParams()
  const { productcard, tabcom } = ProductData[index];
  const { imageUrls, detail, title, placeholder } = productcard;

  // console.log(data)
  return (
    <Fragment>
      {/* <Navupper></Navupper> */}
      {/* <Navbar></Navbar> */}
      <NavbarNew></NavbarNew>
      <ProductCard imageUrls={imageUrls} detail={detail} title={title} placeholder={placeholder} />
      <Whatweoffer ></Whatweoffer>
      <Tabcom tabcom={tabcom} ></Tabcom>
      <QnA></QnA>
      <Bannarmid headingtext=" " heading=" You May Also Like"></Bannarmid>
      <Footer></Footer>

    </Fragment>
  )
}

export default Productdetailpage