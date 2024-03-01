import React from 'react'
import Navbar from '../Componants/Navbar/Navbar'
import ProductCard from '../Componants/ProductCard2/ProductCard2'
import Tabproduct from '../Componants/Tabproduct/Tabproduct'
import FinishingOptions from '../Componants/FinishingOptions/FinishingOptions'
import PrintedBooklet from '../Componants/PrintedBooklet/PrintedBooklet'
import Whatweoffer from '../Componants/Whatweoffer copy/Whatweoffer'
import QnA from '../Componants/QnA/QnA'
import Bannarmid from '../Componants/Bannermid/Bannarmid'
import Footer from '../Componants/Footer/Footer'
import NavbarNew from '../Componants/Navbar/NavbarNew'
import Chatnew from '../Componants/Chatnew/Chatnew'
import data from '../PD2Data'

const ProductDetail2 = () => {
    const { productTab, productcard, qna } = data["prodcut2"];
    const { cards, guidline } = productTab;
    return (

        <>
            {/* <Navbar></Navbar> */}
            <NavbarNew></NavbarNew>
            <ProductCard productcard={productcard}></ProductCard>
            <FinishingOptions></FinishingOptions>
            <Tabproduct cards={cards}></Tabproduct>
            <PrintedBooklet></PrintedBooklet>
            <Whatweoffer></Whatweoffer>
            <QnA qna={qna}></QnA>
            <Bannarmid headingtext=" " heading=" You May Also Like"></Bannarmid>
            <Chatnew></Chatnew>
            <Footer></Footer>


        </>
    )
}

export default ProductDetail2