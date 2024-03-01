import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import "./Tabcom.css"


const Tab = styled.button`
  font-size: 20px;
  color: #CACAAF !important;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 1;
  background: transparent;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    color: #15555F !important;
    border-bottom: 3px solid #15555F;
    opacity: 1;
  `}
`;



const ButtonGroup = styled.div`
  display: flex;
`;

const types = ['Description', 'Specification'];


const Tabcom = ({ tabcom }) => {
  const [active, setActive] = useState(types[0]);
  const { desc, specification } = tabcom;


  useEffect(() => {
    types.forEach((type) => {
      const element = document.getElementById(type);
      if (element) {
        element.style.display = active === type ? 'block' : 'none';
      }
    });

  }, [active])


  useEffect(() => {
    types.forEach((type) => {
      const element = document.getElementById(type + '1');
      if (element) {
        element.style.display = active === type ? 'block' : 'none';
      }
    });

  }, [active])

  const [colapase, setcolapase] = useState(false)


  return (
    <>
      <div className="forbigscreentabcom">
        <ButtonGroup style={{
          borderBottom: "1px solid rgba(0, 0, 0, 0.40)",
          marginTop: "4%",
          marginLeft: "4%",
          marginBottom: "1.7%",
          width: '55vw',
        }}>
          {types.map(type => (
            <Tab
              key={type}
              active={active === type}
              onClick={() => setActive(type)}
              style={{ padding: "0px", marginRight: "15px", fontSize: "28px", fontWeight: "500px", color: "rgba(21,85,95,1)" }}
            >
              {type}
            </Tab>
          ))}
        </ButtonGroup>
        <div className='tabcomdisc' id="Description" >
          <div className="custom-padding">
            <div className="row">
              <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 custom-padding1 styleforparagraphtab ">
                <h2 className=' pb-3 tabdataheading' >{desc.heading1}
                </h2>
                <p className='tabdataheadingtext'>{desc.para_1_0}. <br />
                  <br />{desc.para_1_1}</p>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 imgfortabcom text-start"> <img src={desc.imageUrl} alt="" /></div>
            </div>
            <div className="col-12 styleforparagraphtab" >
              <h2 className=' pb-3 tabdataheading'>{desc.heading2}

              </h2>
              <p className='tabdataheadingtext'>{desc.para_2_0}
                <br />
                <br />
                {desc.para_2_1}
                <br />
                <br />
                {desc.para_2_2}</p>
            </div>
            <div className="col-12 styleforparagraphtab" >
              <h2 className=' pb-3 tabdataheading' >{desc.heading3}

              </h2>
              <p className='tabdataheadingtext'>{desc.para_3_0}

                <br />
                <br />
                {desc.para_3_1}
                <br />
                <br />
                {desc.para_3_2}</p>
            </div>
            <div className="col-12 styleforparagraphtab " >
              <h2 className=' pb-3 tabdataheading' >{desc.heading4}

              </h2>
              <p className='tabdataheadingtext'>{desc.para_4_0}
                <br />
                <br />
                {desc.para_4_1}
                <br />
                <br />
                {desc.para_4_2}</p>
            </div>
            <div className="col-12 styleforparagraphtab" >
              <h2 className=' pb-3 tabdataheading'>{desc.heading5}

              </h2>
              <p className='tabdataheadingtext'>{desc.para_5_0}
                <br />
                <br />
                {desc.para_5_1}
                <br />
                <br />
                {desc.para_5_2}</p>
            </div>
            <div className="col-12 styleforparagraphtab " >
              <h2 className=' pb-3 tabdataheading' >{desc.heading6}

              </h2>
              <p className='tabdataheadingtext'>{desc.para_6_0}
                <br />
                <br />
                {desc.para_6_1}
                <br />
                <br />
                {desc.para_6_2}</p>
            </div>
          </div>

        </div>
        <div id="Specification">
          <div className="px-5">
            <div className="row">
              <div className="col-8 " style={{ padding: "0px 70px 10px 15px" }}>


                {
                  specification.map((data, index) =>
                    <div className=' spacificationtabledata1' style={{ width: "100%", backgroundColor: index % 2 === 0 ? "#D7E6D4" : "#f6f6f6" }}>
                      <div className="row" style={{ width: "100%" }}>
                        <div className='col-4'>{data.key}</div>
                        <div className='col-8'>{data.content}</div>
                      </div>
                    </div>
                  )
                }


              </div>
              <div className="col-4  imgfortabcom text-start"> <img src={require("./Rectangle 105.png")} alt="" /></div>
            </div>
          </div>
        </div>
      </div>

      <div className="forsmallscreentabcom">
        <ButtonGroup style={{
          borderBottom: "1px solid rgba(0, 0, 0, 0.40)",
          marginTop: "4%",
          marginLeft: "4%",
          marginBottom: "1.7%",
          width: '60.8vw',

        }}>
          {types.map(type => (
            <Tab
              key={type}
              active={active === type}
              onClick={() => setActive(type)}
              style={{ padding: "0px", marginRight: "10px", fontSize: "20px", fontWeight: "500px", color: "rgba(21,85,95,1)" }}
            >
              {type}
            </Tab>
          ))}
        </ButtonGroup>
        <div id="Description1" className='tabcomdisc'>
          <div className="custom-padding">
            <div className="row">
              <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 custom-padding1 styleforparagraphtab ">
                <h2 className=' pb-2 tabdataheading' >Lure Customers with Distinctive Graphic Design
                </h2>
                <p className='tabdataheadingtext'>What goes on the outside of a box is just as important to designers and consumers alike. Graphic designers know that it is not enough for an item to be well-designed, but also how this design looks from every angle when seen in person or through pictures online. <br />
                  <br />The best way to catch a customer's attention is by using a design that propels an idea of the company and its values. Incorporating these elements into packaging graphics will help customers understand what the product stands for and how it can benefit them.will help customers understand what the product stands for and how it can benefit them.</p>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 imgfortabcom text-center"> <img src={require("./Rectangle 105.png")} alt="" /></div>
            </div>
            <div className="col-12 styleforparagraphtab" >
              <h2 className=' pb-2 tabdataheading'>Make Your Presence Felt with Unique Designs

              </h2>
              <p className='tabdataheadingtext'>We now have to ponder on the design limitations of the packaging. Packaging’s foremost role is to keep the product protected. Consider all the limitations and design something blasting within those limits.Designers often look to their competitors in the marketplace for inspiration and ideas. With competition always on the rise, it is important that you try your best at all times.
                <span className={`longtext ${colapase ? "expanded" : ""}`}> <br />
                  <br />
                  Looking into how other designers are approaching packaging design can be helpful when starting out because they have already found a winning formula with which others may not compete well against them any time soon.
                  <br />
                  <br />
                  The most important thing is that your packaging should actually be able to exist. You can have the craziest design ideas out there, but if you are not sure how it is going to happen or what materials are needed, just use standard paper carton packaging and innovate from there.</span> <button className='readmoredesign' onClick={() => setcolapase(prev => !prev)}>Read more</button></p>
            </div>
            <div className="col-12 styleforparagraphtab" >
              <h2 className=' pb-2 tabdataheading' >Make Your Presence Felt with Unique Designs

              </h2>
              <p className='tabdataheadingtext'>We now have to ponder on the design limitations of the packaging. Packaging’s foremost role is to keep the product protected. Consider all the limitations and design something blasting within those limits.Designers often look to their competitors in the marketplace for inspiration and ideas. With competition always on the rise, it is important that you try your best at all times.
                <span className={`longtext ${colapase ? "expanded" : ""}`}> <br />
                  <br />
                  Looking into how other designers are approaching packaging design can be helpful when starting out because they have already found a winning formula with which others may not compete well against them any time soon.
                  <br />
                  <br />
                  The most important thing is that your packaging should actually be able to exist. You can have the craziest design ideas out there, but if you are not sure how it is going to happen or what materials are needed, just use standard paper carton packaging and innovate from there.</span> <button className='readmoredesign' onClick={() => setcolapase(prev => !prev)}>Read more</button></p>
            </div>
            <div className="col-12 styleforparagraphtab " >
              <h2 className=' pb-2 tabdataheading' >Make Your Presence Felt with Unique Designs

              </h2>
              <p className='tabdataheadingtext'>We now have to ponder on the design limitations of the packaging. Packaging’s foremost role is to keep the product protected. Consider all the limitations and design something blasting within those limits.Designers often look to their competitors in the marketplace for inspiration and ideas. With competition always on the rise, it is important that you try your best at all times.
                <span className={`longtext ${colapase ? "expanded" : ""}`}> <br />
                  <br />
                  Looking into how other designers are approaching packaging design can be helpful when starting out because they have already found a winning formula with which others may not compete well against them any time soon.
                  <br />
                  <br />
                  The most important thing is that your packaging should actually be able to exist. You can have the craziest design ideas out there, but if you are not sure how it is going to happen or what materials are needed, just use standard paper carton packaging and innovate from there.</span> <button className='readmoredesign' onClick={() => setcolapase(prev => !prev)}>Read more</button></p>
            </div>
            <div className="col-12 styleforparagraphtab" >
              <h2 className=' pb-2 tabdataheading'>Make Your Presence Felt with Unique Designs

              </h2>
              <p className='tabdataheadingtext'>We now have to ponder on the design limitations of the packaging. Packaging’s foremost role is to keep the product protected. Consider all the limitations and design something blasting within those limits.Designers often look to their competitors in the marketplace for inspiration and ideas. With competition always on the rise, it is important that you try your best at all times.
                <span className={`longtext ${colapase ? "expanded" : ""}`}> <br />
                  <br />
                  Looking into how other designers are approaching packaging design can be helpful when starting out because they have already found a winning formula with which others may not compete well against them any time soon.
                  <br />
                  <br />
                  The most important thing is that your packaging should actually be able to exist. You can have the craziest design ideas out there, but if you are not sure how it is going to happen or what materials are needed, just use standard paper carton packaging and innovate from there.</span> <button className='readmoredesign' onClick={() => setcolapase(prev => !prev)}>Read more</button></p>
            </div>
            <div className="col-12 styleforparagraphtab " >
              <h2 className=' pb-2 tabdataheading' >Make Your Presence Felt with Unique Designs

              </h2>
              <p className='tabdataheadingtext'>We now have to ponder on the design limitations of the packaging. Packaging’s foremost role is to keep the product protected. Consider all the limitations and design something blasting within those limits.Designers often look to their competitors in the marketplace for inspiration and ideas. With competition always on the rise, it is important that you try your best at all times.
                <span className={`longtext ${colapase ? "expanded" : ""}`}> <br />
                  <br />
                  Looking into how other designers are approaching packaging design can be helpful when starting out because they have already found a winning formula with which others may not compete well against them any time soon.
                  <br />
                  <br />
                  The most important thing is that your packaging should actually be able to exist. You can have the craziest design ideas out there, but if you are not sure how it is going to happen or what materials are needed, just use standard paper carton packaging and innovate from there.</span> <button className='readmoredesign' onClick={() => setcolapase(prev => !prev)}>Read more</button></p>
            </div>
          </div>

        </div>
        <div id="Specification1">
          <div className="">
            <div className="row">
              <div className=" col-sm-12 col-md-8 col-lg-8 col-xl-8   imgfortabcom text-center pb-3 pt-3 "> <img src={require("./Rectangle 105.png")} alt="" /></div>
              <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8  " style={{ padding: "0px 0px 0px 0px" }}>

                <div className=' spacificationtabledata1'>
                  <div className="row" style={{ width: "100%" }}>
                    <div className='col-4'>Dimensions:</div>
                    <div className='col-8'>Custom Size $ Shape</div>
                  </div>
                </div>
                <div className=' spacificationtabledata'>
                  <div className="row" style={{ width: "100%" }}>
                    <div className='col-4'>Printing:</div>
                    <div className='col-8'>Custom Size $ Shape</div>
                  </div>
                </div>
                <div className=' spacificationtabledata1'>
                  <div className="row" style={{ width: "100%" }}>
                    <div className='col-4'>Quantity:</div>
                    <div className='col-8'>Custom Size $ Shape</div>
                  </div>
                </div>
                <div className=' spacificationtabledata'>
                  <div className="row" style={{ width: "100%" }}>
                    <div className='col-4'>Finishing Option:</div>
                    <div className='col-8'>Gloss, Matte Lamination, Spot UV, Foiling, etc.
                    </div>
                  </div>
                </div>
                <div className=' spacificationtabledata1'>
                  <div className="row" style={{ width: "100%" }}>
                    <div className='col-4'>Shipping:</div>
                    <div className='col-8'>Standard Free Shipping Turnaround Time is 10-12 Business Days, 4-6 Business Days Rush Services also Available.</div>
                  </div>
                </div>
                <div className=' spacificationtabledata'>
                  <div className="row" style={{ width: "100%" }}>
                    <div className='col-4'>Dimensions:</div>
                    <div className='col-8'>Custom Size $ Shape</div>
                  </div>
                </div>


              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tabcom;

