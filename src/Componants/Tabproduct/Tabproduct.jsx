import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import './Tabproduct.css'

const Tab = styled.button`
  font-size: 18px !important;
color: #3A776C !important;
  padding: 5px 8px !important;
  margin: 0px 10px;
  cursor: pointer;
  opacity: 1;
  background: transparent;
  border: 1px solid #3A776C;
  border-radius: 5px;
  outline: 0;
  
  @media (max-width: 500px) {
    /* Adjust styles for smaller screens */
    font-size: 14px !important;
    margin:0px 5px !important;
    

  }
  ${({ active }) =>
        active &&
        `
    border: 1px solid #9BC194;
  background-color: #549376;
  color: #f6f6f6 !important;
    opacity: 1;

  `}
`;

const types = ['By Industry', 'Print Guidelines', "Available Sizes", "Paper Types", "Binding Options"];



const ButtonGroup = styled.div`
  display: flex;
  
`;



const Tabproduct = ({ cards }) => {
    const [active, setActive] = useState(types[0]);

    useEffect(() => {
        types.forEach((type) => {
            let id = type.split(" ")[0]
            // if (type == "Custom Printing") {
            //     id = "Printing"
            // }

            const element = document.getElementById(id);
            if (element) {
                element.style.transition = '0.3s'
                element.style.display = active === type ? 'block' : 'none';
                if (active === type)
                    element.classList.add('animationClass')


            }
        });

    }, [active])

    return (

        <div className='mt-5 scrollable-container'>
            <h2 className='mainHeadingtabproduct'>Check Out the Detail Guideline </h2>

            <ButtonGroup style={{
                margin: "0 auto",
                width: "78vw",
                padding: "15px 30px",
                // backgroundColor: "#549376",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                scrollbarColor: "transparent transparent",



            }} className='ButtonGroup'>

                {types.map(type => (
                    <Tab
                        key={type}
                        active={active === type}
                        onClick={() => setActive(type)}
                        style={{ padding: "0px", marginRight: "15px", fontSize: "30px", fontWeight: "500px", color: "rgba(21,85,95,1)" }}

                    >
                        {type.split(" ")[0]}&nbsp;{type.split(" ")[1]}
                    </Tab>
                ))}
            </ButtonGroup>
            <div id="By">
                <div className="Tabproductfirst pt-4">
                    <div className="row Tabproductfirstrow">
                        <div className="col-4  completecoltabproduct completecoltabproduct1" >
                            <img src={cards[0].image} alt="" />
                            <h3 className='Tabproductfirstheading mainHeadingH3'>{cards[0].heading}</h3>
                            <p className='Tabproductfirstparagraph'>{cards[0].desc}</p>
                        </div>
                        <div className="col-4  completecoltabproduct completecoltabproduct1" >
                            <img src={require("./image2.png")} alt="" />
                            <h2 className='Tabproductfirstheading mainHeadingH3'>Educational Institutes</h2>
                            <p className='Tabproductfirstparagraph'>With saddle stitched printed booklets, educational institutes (such as Schools, colleges, universities, etc.) Can print course outlines, textbooks, and other such materials in the form of a saddle-stitched booklet.Can print course outlines, textbooks, and other such materials in the form of a saddle-stitched booklet.Can print.</p>
                        </div>
                        <div className="col-4 completecoltabproduct" >
                            <img src={cards[2].image} alt="" />
                            <h2 className='Tabproductfirstheading mainHeadingH3'>Automobile Companies
                            </h2>
                            <p className='Tabproductfirstparagraph'>Printed saddle stitched booklets let automotive companies inform, educate, and convert their target audience. That's because booklets are great promotional elements that allow the automotive company to provide detailed information about its vehicles, such as specifications and pricing.detailed information about it
                            </p>
                        </div>




                    </div>
                </div>
                <div className="Tabproductfirst pt-4">
                    <div className="row Tabproductfirstrow">
                        <div className="col-4 completecoltabproduct completecoltabproduct1" >
                            <img src={require("./image1.png")} alt="" />
                            <h3 className='Tabproductfirstheading mainHeadingH3'>Travel and Tourism Business
                            </h3>
                            <p className='Tabproductfirstparagraph'>Even for travel and tourism businesses, these saddle stitched booklets offer an attractive and organized method of essential important information in a user-friendly way.Even for travel and tourism businesses, these saddle stitched booklets offer an attractive and organized method of essential important information in a user-friendly way.</p>
                        </div>
                        <div className="col-4 completecoltabproduct completecoltabproduct1" >
                            <img src={require("./image4.png")} alt="" />
                            <h2 className='Tabproductfirstheading mainHeadingH3'>Healthcare Service Providers
                            </h2>
                            <p className='Tabproductfirstparagraph'>Booklet printing services are invaluable to healthcare service providers in many ways. For example, hospitals can use these booklets to publish informational materials that can be used to educate patients on a variety of health-related topics.booklets to publish informational materials that can be used to educate patients on a variety of health-related topics.</p>
                        </div>
                        <div className="col-4 completecoltabproduct" >
                            <img src={require("./image5.png")} alt="" />
                            <h2 className='Tabproductfirstheading mainHeadingH3'>Glossy Paper
                            </h2>
                            <p className='Tabproductfirstparagraph'>The fashion industry also heavily relies on printed booklets. These booklets are mainly used by designers to showcase their unique dresses.The fashion industry also heavily relies on printed booklets. These booklets are mainly used by designers to showcase their unique dresses.The fashion industry also heavily relies on printed booklets.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="Print">
                <div className='Tabproductsec'>
                    <p className='Tabproductsecparagraph pt-4'> <span>Size:</span> You can choose any size for bulk custom printed booklets. The right size depends on your personal requirements. Stampa Prints lets you choose from various size options for custom booklets wholesale.</p>

                    <p className='Tabproductsecparagraph'> <span>Bleed and margins:</span>  Bleed is the extra area or space around all edges of a booklet. You can choose the bleed and margins of your choice. An average of 2-3 mm inches margin would be just enough.</p>

                    <p className='Tabproductsecparagraph'> <span>Color mode:</span>  For full-color mode, you can choose CMYK printing. Whereas, for white and black, you have to choose the grayscale color mode.</p>

                    <p className='Tabproductsecparagraph'> <span>Images:</span> We recommend using high-quality images with a resolution of 300 dpi or higher. Then, embed or link the images to the document and make sure they are in the correct file format (JPEG or PNG).
                    </p>

                    <p className='Tabproductsecparagraph'> <span>Fonts:</span>  An easy to read font would be ideal for small text. So, you should Use font sizes that are large enough to be readable. Limit the number of fonts used to create a cohesive look.
                    </p>

                    <p className='Tabproductsecparagraph'> <span>Proofread:</span>  Before submitting the file for printing, review the product page for any errors or typos. Then, proofread the content to avoid any mistakes that can affect the impact of your catalog.</p>

                    <p className='Tabproductsecparagraph'> <span>Available Sizes:</span> You name it; we have it. Stampa Prints allows its clients to choose from a wide range of sizes option for custom printed booklets.</p>
                    <p className='Tabproductsecparagraph'> <span>Paper Options:</span>  Matte,Gloss</p>
                </div>
            </div>
            <div id="Available">
                <div className="Tabproductthird ">
                    <div className='Tabproductthirdparagraph'>
                        <p className='mb-0' >7.44" x 9.69"</p>
                        <i class="fa-regular fa-circle-check"></i>
                    </div>
                    <div className='Tabproductthirdparagraph1'>
                        <p className='mb-0' >4.25" x 11"</p>
                        <i class="fa-regular fa-circle-check"></i>
                    </div>
                    <div className='Tabproductthirdparagraph'>
                        <p className='mb-0' >6" x 6"</p>
                        <i class="fa-regular fa-circle-check"></i>
                    </div>
                    <div className='Tabproductthirdparagraph1'>
                        <p className='mb-0' >5.25" x 8"</p>
                        <i class="fa-regular fa-circle-check"></i>
                    </div>
                    <div className='Tabproductthirdparagraph'>
                        <p className='mb-0' >5" x 7"</p>
                        <i class="fa-regular fa-circle-check"></i>
                    </div>
                    <div className='Tabproductthirdparagraph1'>
                        <p className='mb-0' >US Trade (6" x 9")</p>
                        <i class="fa-regular fa-circle-check"></i>
                    </div>
                    <div className='Tabproductthirdparagraph'>
                        <p className='mb-0' >US Standard (6.69" x 10.24")</p>
                        <i class="fa-regular fa-circle-check"></i>
                    </div>
                    <div className='Tabproductthirdparagraph1'>
                        <p className='mb-0' >7.5" x 9.25"</p>
                        <i class="fa-regular fa-circle-check"></i>
                    </div>
                    <div className='Tabproductthirdparagraph'>
                        <p className='mb-0' >5.38" x 8.38"</p>
                        <i class="fa-regular fa-circle-check"></i>
                    </div>
                    <div className='Tabproductthirdparagraph1'>
                        <p className='mb-0' >7" x 9"</p>
                        <i class="fa-regular fa-circle-check"></i>
                    </div>
                    <div className='Tabproductthirdparagraph'>
                        <p className='mb-0' >6" x 8.25"</p>
                        <i class="fa-regular fa-circle-check"></i>
                    </div>
                </div>

            </div>
            <div id="Paper">
                <div className="Tabproductfourth ">
                    <div className='Tabproductthirdparagraph'>
                        <p className='mb-0 Tabproductfourthheading' >Gloss</p>
                        <i class="fa-regular fa-circle-check"></i>
                    </div>
                    <div className='Tabproductthirdparagraph1'>
                        <p className='mb-0 Tabproductfourthheading' >Recycled Uncoated</p>
                        <i class="fa-regular fa-circle-check"></i>
                    </div>
                    <div className='Tabproductthirdparagraph'>
                        <p className='mb-0 Tabproductfourthheading' >Uncoated</p>
                        <i class="fa-regular fa-circle-check"></i>
                    </div>
                    <div className='Tabproductthirdparagraph1'>
                        <p className='mb-0 Tabproductfourthheading' >Satin</p>
                        <i class="fa-regular fa-circle-check"></i>
                    </div>



                </div>
            </div>
            <div id="Binding">
                <div className="Tabproductfifth ">
                    <div className="row changeforimage11 ">
                        <div className="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2 col-xxl-2 Tabproductfifthtext1 ">Weight </div>
                        <div className="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2 col-xxl-2 changeforoptionprint">
                            <div style={{ maxWidth: '100%' }}>
                                <img src={require("./image1.1.png")} alt="" style={{ width: '100%', height: '150px' }} />
                            </div>
                            <div className='text-center pt-1' style={{ color: "#15555f" }}>Perfect Bind</div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2 col-xxl-2 changeforoptionprint">
                            <div style={{ maxWidth: '100%' }}>
                                <img src={require("./image1.2.png")} alt="" style={{ width: '100%', height: '150px' }} />
                            </div>
                            <div className='text-center pt-1 ' style={{ color: "#15555f" }}>Saddle Stitch</div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2 col-xxl-2 changeforoptionprint">
                            <div style={{ maxWidth: '100%' }}>
                                <img src={require("./image1.3.png")} alt="" style={{ width: '100%', height: '150px' }} />
                            </div>
                            <div className='text-center pt-1' style={{ color: "#15555f" }}>Spiral Coil</div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2 col-xxl-2 changeforoptionprint">
                            <div style={{ maxWidth: '100%' }}>
                                <img src={require("./image1.4.png")} alt="" style={{ width: '100%', height: '150px' }} />
                            </div>
                            <div className='text-center pt-1' style={{ color: "#15555f" }}>Wire Coil Booklets</div>
                        </div>

                    </div>
                    <div className='forscrolltabproduct'>
                        <div>
                            <div className=" Tabproductfifthheadingtext11">Satin Paper</div>
                            <div className=''>
                                <div className="row Tabproductfifthcols">
                                    <div className="col-2 Tabproductfifthcols2">70 lb. Text </div>
                                    <div className="col-2 Tabproductfifthcols2">4 - 88 pages</div>
                                    <div className="col-2 Tabproductfifthcols2">20 - 840 pages</div>
                                    <div className="col-2 Tabproductfifthcols2">4 - 200 pages </div>
                                    <div className="col-2 Tabproductfifthcols2"> 4 - 200 pages</div>
                                </div>
                            </div>
                            <div className=''>
                                <div className="row Tabproductfifthcols1">
                                    <div className="col-2 Tabproductfifthcols2">80 lb. Text </div>
                                    <div className="col-2 Tabproductfifthcols2">4 - 88 pages</div>
                                    <div className="col-2 Tabproductfifthcols2">20 - 840 pages</div>
                                    <div className="col-2 Tabproductfifthcols2">4 - 200 pages </div>
                                    <div className="col-2 Tabproductfifthcols2"> 4 - 200 pages</div>
                                </div>
                            </div>
                            <div className=''>
                                <div className="row Tabproductfifthcols">
                                    <div className="col-2 Tabproductfifthcols2">90 lb. Text </div>
                                    <div className="col-2 Tabproductfifthcols2">4 - 88 pages</div>
                                    <div className="col-2 Tabproductfifthcols2">20 - 840 pages</div>
                                    <div className="col-2 Tabproductfifthcols2">4 - 200 pages </div>
                                    <div className="col-2 Tabproductfifthcols2"> 4 - 200 pages</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className=" Tabproductfifthheadingtext11">Gloss Paper</div>
                            <div className=''>
                                <div className="row Tabproductfifthcols">
                                    <div className="col-2 Tabproductfifthcols2">70 lb. Text </div>
                                    <div className="col-2 Tabproductfifthcols2">4 - 88 pages</div>
                                    <div className="col-2 Tabproductfifthcols2">20 - 840 pages</div>
                                    <div className="col-2 Tabproductfifthcols2">4 - 200 pages </div>
                                    <div className="col-2 Tabproductfifthcols2"> 4 - 200 pages</div>
                                </div>
                            </div>
                            <div className=''>
                                <div className="row Tabproductfifthcols1">
                                    <div className="col-2 Tabproductfifthcols2">80 lb. Text </div>
                                    <div className="col-2 Tabproductfifthcols2">4 - 88 pages</div>
                                    <div className="col-2 Tabproductfifthcols2">20 - 840 pages</div>
                                    <div className="col-2 Tabproductfifthcols2">4 - 200 pages </div>
                                    <div className="col-2 Tabproductfifthcols2"> 4 - 200 pages</div>
                                </div>
                            </div>
                            <div className=''>
                                <div className="row Tabproductfifthcols">
                                    <div className="col-2 Tabproductfifthcols2">90 lb. Text </div>
                                    <div className="col-2 Tabproductfifthcols2">4 - 88 pages</div>
                                    <div className="col-2 Tabproductfifthcols2">20 - 840 pages</div>
                                    <div className="col-2 Tabproductfifthcols2">4 - 200 pages </div>
                                    <div className="col-2 Tabproductfifthcols2"> 4 - 200 pages</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className=" Tabproductfifthheadingtext11">Gloss Paper</div>
                            <div className=''>
                                <div className="row Tabproductfifthcols">
                                    <div className="col-2 Tabproductfifthcols2">70 lb. Text </div>
                                    <div className="col-2 Tabproductfifthcols2">4 - 88 pages</div>
                                    <div className="col-2 Tabproductfifthcols2">20 - 840 pages</div>
                                    <div className="col-2 Tabproductfifthcols2">4 - 200 pages </div>
                                    <div className="col-2 Tabproductfifthcols2"> 4 - 200 pages</div>
                                </div>
                            </div>
                            <div className=''>
                                <div className="row Tabproductfifthcols1">
                                    <div className="col-2 Tabproductfifthcols2">80 lb. Text </div>
                                    <div className="col-2 Tabproductfifthcols2">4 - 88 pages</div>
                                    <div className="col-2 Tabproductfifthcols2">20 - 840 pages</div>
                                    <div className="col-2 Tabproductfifthcols2">4 - 200 pages </div>
                                    <div className="col-2 Tabproductfifthcols2"> 4 - 200 pages</div>
                                </div>
                            </div>
                            <div className=''>
                                <div className="row Tabproductfifthcols">
                                    <div className="col-2 Tabproductfifthcols2">70 lb. Text </div>
                                    <div className="col-2 Tabproductfifthcols2">4 - 88 pages</div>
                                    <div className="col-2 Tabproductfifthcols2">20 - 840 pages</div>
                                    <div className="col-2 Tabproductfifthcols2">4 - 200 pages </div>
                                    <div className="col-2 Tabproductfifthcols2"> 4 - 200 pages</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className=" Tabproductfifthheadingtext11">Satin Paper</div>
                            <div className=''>
                                <div className="row Tabproductfifthcols">
                                    <div className="col-2 Tabproductfifthcols2">70 lb. Text </div>
                                    <div className="col-2 Tabproductfifthcols2">4 - 88 pages</div>
                                    <div className="col-2 Tabproductfifthcols2">20 - 840 pages</div>
                                    <div className="col-2 Tabproductfifthcols2">4 - 200 pages </div>
                                    <div className="col-2 Tabproductfifthcols2"> 4 - 200 pages</div>
                                </div>
                            </div>
                            <div className=''>
                                <div className="row Tabproductfifthcols1">
                                    <div className="col-2 Tabproductfifthcols2">80 lb. Text </div>
                                    <div className="col-2 Tabproductfifthcols2">4 - 88 pages</div>
                                    <div className="col-2 Tabproductfifthcols2">20 - 840 pages</div>
                                    <div className="col-2 Tabproductfifthcols2">4 - 200 pages </div>
                                    <div className="col-2 Tabproductfifthcols2"> 4 - 200 pages</div>
                                </div>
                            </div>
                            <div className=''>
                                <div className="row Tabproductfifthcols">
                                    <div className="col-2 Tabproductfifthcols2">90 lb. Text </div>
                                    <div className="col-2 Tabproductfifthcols2">4 - 88 pages</div>
                                    <div className="col-2 Tabproductfifthcols2">20 - 840 pages</div>
                                    <div className="col-2 Tabproductfifthcols2">4 - 200 pages </div>
                                    <div className="col-2 Tabproductfifthcols2"> 4 - 200 pages</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className=" Tabproductfifthheadingtext11">Satin Paper</div>
                            <div className=''>
                                <div className="row Tabproductfifthcols">
                                    <div className="col-2 Tabproductfifthcols2">70 lb. Text </div>
                                    <div className="col-2 Tabproductfifthcols2">4 - 88 pages</div>
                                    <div className="col-2 Tabproductfifthcols2">20 - 840 pages</div>
                                    <div className="col-2 Tabproductfifthcols2">4 - 200 pages </div>
                                    <div className="col-2 Tabproductfifthcols2"> 4 - 200 pages</div>
                                </div>
                            </div>
                            <div className=''>
                                <div className="row Tabproductfifthcols1">
                                    <div className="col-2 Tabproductfifthcols2">80 lb. Text </div>
                                    <div className="col-2 Tabproductfifthcols2">4 - 88 pages</div>
                                    <div className="col-2 Tabproductfifthcols2">20 - 840 pages</div>
                                    <div className="col-2 Tabproductfifthcols2">4 - 200 pages </div>
                                    <div className="col-2 Tabproductfifthcols2"> 4 - 200 pages</div>
                                </div>
                            </div>
                            <div className=''>
                                <div className="row Tabproductfifthcols">
                                    <div className="col-2 Tabproductfifthcols2">90 lb. Text </div>
                                    <div className="col-2 Tabproductfifthcols2">4 - 88 pages</div>
                                    <div className="col-2 Tabproductfifthcols2">20 - 840 pages</div>
                                    <div className="col-2 Tabproductfifthcols2">4 - 200 pages </div>
                                    <div className="col-2 Tabproductfifthcols2"> 4 - 200 pages</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Tabproduct