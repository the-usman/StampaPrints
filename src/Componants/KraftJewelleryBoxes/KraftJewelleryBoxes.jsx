import React from 'react'
import("./KraftJewelleryBoxes.css")

const KraftJewelleryBoxes = () => {
    return (
        <div className='KraftJewelleryBoxesWhole'>
            <div className="row classforpaddindcdc" >
                <div className="col-12 col-sm-6 col-md-7 col-lg-7 classforpaddindcdctext">
                    <div className="d-flex justify-content-center align-items-center ">
                        <div>
                            <h3 className="mainHeadingH2">Kraft Apparel Boxes</h3>
                            <p className="ParagraphH2P Paragraphcbcpara Paragraphcbcpara1">If youre selling CBD tinctures, you want to make sure that the boxes are as appealing as possible to customers.This will help increase sales and encourage customers to come back for more.A great way to do this is by selecting the right box style and focusing on artwork for your tincture packaging.<br /><br />Choosing a box style that complements the elegance of CBD tinctures while emphasizing captivating artwork creates an irresistible package that entices customers and fosters a lasting connection to your brand.Elevating the visual and tactile experience through thoughtful packaging enhances customer satisfaction, making repeat purchases a natural progression</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-5 col-lg-5  text-end " >
                    <img className="img-fluid" src={require("./1.png")} alt="" style={{ height: "400px" }} />
                </div>
            </div>
        </div>
    )
}

export default KraftJewelleryBoxes