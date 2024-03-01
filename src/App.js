import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Privacy from "./Pages/Privacy";
import About from "./Pages/About";
import TremAndCondition from "./Pages/TermAndConditions"
import Productdetailpage from "./Pages/Productdetailpage";
import AppearalPackaging from "./Pages/AppearalPackaging";
import Catagory from "./Pages/Catagory";
import OurBlogs from "./Pages/OurBlogs";
import Specification from "./Pages/Specification";
import ContactUs from "./Pages/ContactUs";
import "./App.css"
import ProductDetail2 from "./Pages/ProductDetail2";
import ProductDetailHome from "./Pages/ProductDetailHome";
import FAQSample from "./Pages/FAQSample";
import Pertfolio from "./Pages/Pertfolio";
import SampleRequest from "./Pages/SampleRequest";
import Sampling from "./Pages/Sampling";
import SamplesandPrototypes from "./Pages/Samplesofproduct";
import Samplesofproduct from "./Pages/Samplesofproduct";
import Labelandfinishingoption from "./Pages/Labelandfinishingoption";
import BackToTop from "./Componants/BackToTop";
function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="about" element={<About />} />
          <Route path="t" element={<TremAndCondition />} />
          <Route path="/:index" element={<Productdetailpage />} />
          <Route path="CBDPackaging" element={<AppearalPackaging></AppearalPackaging>} />
          <Route path="c/:product" element={<Catagory></Catagory>} />
          <Route path="ourblog" element={<OurBlogs></OurBlogs>} />
          <Route path="BlogDetailPage" element={<Specification></Specification>} />
          <Route path="ContactUs" element={<ContactUs></ContactUs>} />
          <Route path="pd2/:index" element={<ProductDetail2></ProductDetail2>} />
          <Route path="pdh" element={<ProductDetailHome></ProductDetailHome>} />
          <Route path="FAQs" element={<FAQSample></FAQSample>} />
          <Route path="Portfolio" element={<Pertfolio></Pertfolio>} />
          <Route path="samplerequest" element={<SampleRequest></SampleRequest>} />
          <Route path="kraft" element={<Sampling></Sampling>} />
          <Route path="psp" element={<Samplesofproduct></Samplesofproduct>} />
          <Route path="lfo" element={<Labelandfinishingoption></Labelandfinishingoption>} />


        </Routes>
        <BackToTop></BackToTop>
      </BrowserRouter>
    </>
  );

}

export default App;
