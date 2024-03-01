import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import './Tabportfolio.css'

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
    margin:0 5px!important;
    
    
    /* Add any other responsive styles as needed */
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

const types = ['All', 'CBD Packaging', 'Retail Packaging', "Custom Packaging ", "Cosmetic Packaging", "Custom Printing"];



const ButtonGroup = styled.div`
  display: flex;
  
`;



const Tabportfolio = () => {
    const [active, setActive] = useState(types[0]);

    useEffect(() => {
        types.forEach((type) => {
            let id = type.split(" ")[0]
            if (type == "Custom Printing") {
                id = "Printing"
            }

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


        <div className=''>
            <h2 className='mainHeadingH2 text-center mainHeadingtabproduct'>Check Our Recent Work </h2>

            <ButtonGroup style={{
                margin: "0 auto",
                width: "80vw",
                padding: "10px 10px",
                // backgroundColor: "#549376",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-evenly",
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


            <div id="All">
                <div className="alltabportfolioall">
                    <div className='grid-container'>
                        {/* <div className='d-flex pt-4'> */}
                        <div className='item item1'><img src={require("./1.png")} alt="" /></div>
                        <div className=' item item2'><img src={require("./2.png")} alt="" /></div>
                        <div className='item item3'><img src={require("./3.png")} alt="" /></div>
                        {/* </div> */}
                        {/* <div className='text-end d-flex'> */}
                        <div className='item item4'><img src={require("./4.png")} alt="" /></div>
                        <div className='item item5'><img src={require("./5.png")} alt="" /></div>

                        {/* </div> */}
                        {/* <div className=''> */}
                        <div className=' item item6'><img src={require("./6.png")} alt="" /></div>
                        <div className=' item item7'></div>
                        <div className=' item item8'></div>
                        <div className=' item item9'></div>
                        {/* </div> */}
                    </div>
                </div>
                <div className="alltabportfolioall1">
                    <div className='grid-container1'>
                        {/* <div className='d-flex pt-4'> */}
                        <div className=' item item6 mb-2'><img src={require("./6.png")} alt="" /></div>
                        <div className='d-flex'>
                            <div>
                                <div className=' item item2 me-2 mb-2'><img src={require("./2.png")} alt="" /></div>
                                <div className='item item3 me-2 mb-2'><img src={require("./3.png")} alt="" /></div>
                                <div className='item item4 me-2 mb-2'><img src={require("./4.png")} alt="" /></div>
                            </div>
                            <div>
                                <div className='item item5 mb-2'><img src={require("./5.png")} alt="" /></div>
                                <div className='item item1 '><img src={require("./1.png")} alt="" /></div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
            <div id="CBD">
                <div className="Tabproductfirst pt-4">
                    <h3>CBD</h3>
                </div>
            </div>
            <div id="Retail">
                <div className='Tabproductsec'>
                    <h2>Retail</h2>
                </div>
            </div>
            <div id="Custom">
                <div className="Tabproductthird ">
                    Custom
                </div>

            </div>
            <div id="Cosmetic">
                <div className="Tabproductfourth ">
                    Cosmetic
                </div>
            </div>
            <div id="Printing">
                <div className="Tabproductfifth ">
                    Custom Printing
                </div>
            </div>

        </div>
    )
}

export default Tabportfolio