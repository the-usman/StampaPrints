import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import './TabEx.css'

const Tab = styled.button`
  font-size: 20px !important;
  color: white !important;
  padding: 0px 4px !important;
  margin: 10px 10px;
  cursor: pointer;
  opacity: 1;
  background: transparent;
  border: 0;
  outline: 0;

  @media (max-width: 767px) {
    font-size: 12px !important;
    margin: 0px;
  }

  ${({ active }) =>
        active &&
        `
    border-bottom: 2px solid white;
    opacity: 1;
  `}
`;

const types = ['Packaging Material', "Print Options", "Layers and Coverage", "Unique Attributes", "Paper Texture"];


const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: baseline;
  justify-content: center;
  width:227px;
  z-index: 9999999 !important;

  @media (max-width: 500px) {
    margin-top: 0px;
align-items: baseline;
width:137px;
height:200px;
justify-content: space-evenly;
padding:20px 5px;
  }
`;



const TabEx = () => {
    const [active, setActive] = useState(types[0]);

    useEffect(() => {
        types.forEach((type) => {
            let id = type.split(" ")[0]

            const element = document.getElementById(id);
            if (element) {
                element.style.transition = '0.3s'
                element.style.display = active === type ? 'flex' : 'none';
                element.classList.add('content')
                element.classList.add('animationClass')

            }
        });


    }, [active])


    return (

        <>
            <div className="completetabex">
                <div className='tabextext'>
                    <h2 className='mainHeadingH2'>Material and Options for Custom Box Packaging </h2>
                    <p className='ParagraphH3P'>We Provide You The Best Custom Made design We Provide You The Best Custom Made design We Provide You The Best Custom Made design </p>
                </div>
                <div className="containerInTabEx">


                    <div className='maintabexforoption' >
                        <ButtonGroup className='tabexbuttonstyle'>
                            {types.map(type => (
                                <Tab
                                    key={type}
                                    active={active === type}
                                    onClick={() => setActive(type)}

                                >
                                    {type}
                                </Tab>
                            ))}
                        </ButtonGroup>
                    </div>
                    <div className="row centerClassInTabEx">


                        <div id="Packaging" style={{ overflow: "auto" }} >

                            <div className="cardfortabex1 ">

                                <div className="col card_bg m-0 ">
                                    <div className="tabex1image">
                                        <img src={require("./1.jpeg")} alt="" />
                                        <div className="maintext1tabex">
                                            <h4 className="mainHeadingH3 m-0 pt-3 text-center">Kraft Paper</h4>
                                            <p className="ParagraphH3P Paragraphtabex1 text-center px-2 pb-2">
                                                Form of relief printing in which foil is transferred to a surface at high temperatures.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardfortabex1 ">

                                <div className="col card_bg m-0 ">
                                    <div className="tabex1image">
                                        <img src={require("./hello.png")} alt="" />
                                        <div className="maintext1tabex">
                                            <h4 className="mainHeadingH3 m-0 pt-3 text-center">Corrugated Paper</h4>
                                            <p className="ParagraphH3P Paragraphtabex1 text-center px-2 pb-2 m-0">
                                                Form of relief printing in which foil is transferred to a surface at high temperatures.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardfortabex1 ">

                                <div className="col card_bg m-0 ">
                                    <div className="tabex1image">
                                        <img src={require("./3.jpeg")} alt="" />
                                        <div className="maintext1tabex">
                                            <h4 className="mainHeadingH3 m-0 pt-3 text-center">Card Board</h4>
                                            <p className="ParagraphH3P Paragraphtabex1 text-center px-2 pb-2">
                                                Form of relief printing in which foil is transferred to a surface at high temperatures.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="Print">
                            <div className="cardfortabex1 ">
                                <div className="col card_bg m-0 ">
                                    <div className="tabex1image1">
                                        <img src={require("./po1.png")} alt="" />
                                        <div className="maintext1tabex">
                                            <h4 className="mainHeadingH3 m-0 pt-3 text-center">Offset Printing</h4>
                                            <p className="ParagraphH3P Paragraphtabex1 text-center px-2 pb-2">
                                                Form of relief printing in which foil is transferred to a surface at high temperatures.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardfortabex1 ">
                                <div className="col card_bg m-0 ">
                                    <div className="tabex1image1">
                                        <img src={require("./p01.png")} alt="" />
                                        <div className="maintext1tabex">
                                            <h4 className="mainHeadingH3 m-0 pt-3 text-center">UV Printing</h4>
                                            <p className="ParagraphH3P Paragraphtabex1 text-center px-2 pb-2">
                                                Form of relief printing in which foil is transferred to a surface at high temperatures.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardfortabex1 ">
                                <div className="col card_bg m-0 ">
                                    <div className="tabex1image1">
                                        <img src={require("./po3.png")} alt="" />
                                        <div className="maintext1tabex">
                                            <h4 className="mainHeadingH3 m-0 pt-3 text-center">Catalogue Printing </h4>
                                            <p className="ParagraphH3P Paragraphtabex1 text-center px-2 pb-2">
                                                Form of relief printing in which foil is transferred to a surface at high temperatures.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardfortabex1 ">
                                <div className="col card_bg m-0 ">
                                    <div className="tabex1image1">
                                        <img src={require("./p04.png")} alt="" />
                                        <div className="maintext1tabex">
                                            <h4 className="mainHeadingH3 m-0 pt-3 text-center">Flexographic printing </h4>
                                            <p className="ParagraphH3P Paragraphtabex1 text-center px-2 pb-2">
                                                Form of relief printing in which foil is transferred to a surface at high temperatures.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div id="Layers">
                            <div className="cardfortabex1 ">
                                <div className="col card_bg m-0 ">
                                    <div className="tabex1image">
                                        <img src={require("./l1.png")} alt="" />
                                        <div className="maintext1tabex">
                                            <h4 className="mainHeadingH3 m-0 pt-3 text-center">Gloss Lamination</h4>
                                            <p className="ParagraphH3P Paragraphtabex1 text-center px-2 pb-2">
                                                Form of relief printing in which foil is transferred to a surface at high temperatures.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardfortabex1 ">
                                <div className="col card_bg m-0 ">
                                    <div className="tabex1image">
                                        <img src={require("./l2.png")} alt="" />
                                        <div className="maintext1tabex">
                                            <h4 className="mainHeadingH3 m-0 pt-3 text-center">Matte Lamination</h4>
                                            <p className="ParagraphH3P Paragraphtabex1 text-center px-2 pb-2">
                                                Form of relief printing in which foil is transferred to a surface at high temperatures.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardfortabex1 ">
                                <div className="col card_bg m-0 ">
                                    <div className="tabex1image">
                                        <img src={require("./l3.png")} alt="" />
                                        <div className="maintext1tabex">
                                            <h4 className="mainHeadingH3 m-0 pt-3 text-center">Spot UV Varnish</h4>
                                            <p className="ParagraphH3P Paragraphtabex1 text-center px-2 pb-2">
                                                Form of relief printing in which foil is transferred to a surface at high temperatures.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="Unique">
                            <div className="cardfortabex1 ">

                                <div className="col card_bg m-0 ">
                                    <div className="tabex1image">
                                        <img src={require("./u2.png")} alt="" />
                                        <div className="maintext1tabex">
                                            <h4 className="mainHeadingH3 m-0 pt-3 text-center"> Silver Foiling</h4>
                                            <p className="ParagraphH3P Paragraphtabex1 text-center px-2 pb-2">
                                                Form of relief printing in which foil is transferred to a surface at high temperatures.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardfortabex1 ">

                                <div className="col card_bg m-0 ">
                                    <div className="tabex1image">
                                        <img src={require("./u3.png")} alt="" />
                                        <div className="maintext1tabex">
                                            <h4 className="mainHeadingH3 m-0 pt-3 text-center">Gold Foiling
                                            </h4>
                                            <p className="ParagraphH3P Paragraphtabex1 text-center px-2 pb-2">
                                                Form of relief printing in which foil is transferred to a surface at high temperatures.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardfortabex1 ">

                                <div className="col card_bg m-0 ">
                                    <div className="tabex1image">
                                        <img src={require("./u1.png")} alt="" />
                                        <div className="maintext1tabex">
                                            <h4 className="mainHeadingH3 m-0 pt-3 text-center">Embossing</h4>
                                            <p className="ParagraphH3P Paragraphtabex1 text-center px-2 pb-2">
                                                Form of relief printing in which foil is transferred to a surface at high temperatures.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="Paper">
                            <div className="cardfortabex1 ">
                                <div className="col card_bg m-0 ">
                                    <div className="tabex1image">
                                        <img src={require("./p1.png")} alt="" />
                                        <div className="maintext1tabex">
                                            <h4 className="mainHeadingH3 m-0 pt-3 text-center">Gloss</h4>
                                            <p className="ParagraphH3P Paragraphtabex1 text-center px-2 pb-2">
                                                Form of relief printing in which foil is transferred to a surface at high temperatures.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardfortabex1 ">
                                <div className="col card_bg m-0 ">
                                    <div className="tabex1image">
                                        <img src={require("./p2.png")} alt="" />
                                        <div className="maintext1tabex">
                                            <h4 className="mainHeadingH3 m-0 pt-3 text-center">Uncoated </h4>
                                            <p className="ParagraphH3P Paragraphtabex1 text-center px-2 pb-2">
                                                Form of relief printing in which foil is transferred to a surface at high temperatures.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardfortabex1 ">
                                <div className="col card_bg m-0 ">
                                    <div className="tabex1image">
                                        <img src={require("./p3.png")} alt="" />
                                        <div className="maintext1tabex">
                                            <h4 className="mainHeadingH3 m-0 pt-3 text-center">Recycled Uncoated</h4>
                                            <p className="ParagraphH3P Paragraphtabex1 text-center px-2 pb-2">
                                                Form of relief printing in which foil is transferred to a surface at high temperatures.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cardfortabex1 ">
                                <div className="col card_bg m-0 ">
                                    <div className="tabex1image">
                                        <img src={require("./p4.png")} alt="" />
                                        <div className="maintext1tabex">
                                            <h4 className="mainHeadingH3 m-0 pt-3 text-center">Satin </h4>
                                            <p className="ParagraphH3P Paragraphtabex1 text-center px-2 pb-2">
                                                Form of relief printing in which foil is transferred to a surface at high temperatures.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TabEx