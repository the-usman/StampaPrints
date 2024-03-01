import React from 'react';
import image from "./Images/1.png";
import image1 from "./Images/2.png";
import image2 from "./Images/3.png";
import image3 from "./Images/4.png";
import "./KraftPackagingBoxesCustom.css";
import Aos from 'aos';


export default function KraftPackagingBoxesCustom(props) {
  const projectDetail = [
    {
      image: image,
      headingbannermid: 'Embossing',
      paragraph: "Form of relief printing in which foil is transferred to a surface at high temperatures.",
    },
    {
      image: image1,
      headingbannermid: ' Silver Foiling',
      paragraph: "Form of relief printing in which foil is transferred to a surface at high temperatures.",
    },
    {
      image: image2,
      headingbannermid: 'Gold Foiling',
      paragraph: "Form of relief printing in which foil is transferred to a surface at high temperatures.",
    },
    {
      image: image3,
      headingbannermid: 'Spot UV',
      paragraph: "Form of relief printing in which foil is transferred to a surface at high temperatures.",
    },
  ];

  return (
    <div className=" KraftPackagingBoxesCustomwhole">
      <div className="row ">
        <div className="col-12">
          <h2 className=" mainHeadingH2" > Our Customization Options for Kraft Packaging Boxes</h2>
          <p className=" ParagraphH2P" > Compared to cardboard packaging, kraft packaging has fewer customization options but kraft stock, when used for packaging, adds aesthetic value to your brand even if the packaging is plain.</p>
        </div>
        {projectDetail.map((val, i) => (
          <div key={i} className="col-12 col-md-6 col-lg-3  bannarmidclass " >
            <div className="card cardrang">
              <img src={val.image} className="card-img-top" alt={val.headingbannermid} />
              <div className="card-body">
                <h3 className="card-title text-center cardhovertext cardtextdown">{val.headingbannermid}</h3>
                <p className='ParagraphH2P KraftPackagingBoxesCustompara'>{val.paragraph}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// data - aos - delay={ i * 200 }
// data - aos="fade-right"