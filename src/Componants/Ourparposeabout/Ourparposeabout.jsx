import React from "react";
import "./Ourparposeabout.css";

function Ourparposeabout() {
  return (
    <div className="wholewebelievein">
      <div className="row justify-content-between">


        <div className="col-lg-4 col-md-6 col-sm-12 textinwebleavein text-center">

          <h2 className="mainHeadingH2 pt-4">Mission</h2>
          <p className="ParagraphH2P Paragraphwebelievein ">
            Standing out from the competition is key in any industry, and
            custom CBD packaging is a great way to do that. Generic
            packaging can make it difficult for customers to distinguish
            one product from another, but unique branding and designs will
            help your product stand out. Custom CBD packaging ensures your
            product shines with distinctive branding.
          </p>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 text-center">
          <img src={require("./Frame 81.png")} alt="" className="img-fluid" />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 text-center textinwebleavein">
          <h2 className="mainHeadingH2 pt-4">Vision</h2>
          <p className="ParagraphH2P Paragraphwebelievein">
            Standing out from the competition is key in any industry, and
            custom CBD packaging is a great way to do that. Generic
            packaging can make it difficult for customers to distinguish
            one product from another, but unique branding and designs will
            help your product stand out. Custom CBD packaging ensures your
            product shines with distinctive branding.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ourparposeabout;
