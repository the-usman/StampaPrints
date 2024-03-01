import React from 'react'
import "./MatterYourBrand.css"

const MatterYourBrand = () => {
    return (
        <>
            <div className="WholeMatterYourBrand">
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-sm-6 col-md-7 col-lg-7 matteryourtext">
                            <h2 className='mainHeadingH2'>Why Custom Printed Boxes Matter for Your Brand.</h2>
                            <div className="matteryourtext1">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-lg-6 col-lg-6">
                                        <h5 className='mainHeadingH3'>Increase Brand Appeal</h5>
                                        <p className='ParagraphH2P'>Personalized packaging adds a unique touch, capturing customer attention and boosting brand recognition.</p>
                                    </div>
                                    <div className="col-12 col-sm-12 col-lg-6 col-lg-6">
                                        <h5 className='mainHeadingH3'>Unique Marketing Materials</h5>
                                        <p className='ParagraphH2P'>Create distinctive marketing materials that represent your business effectively.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="matteryourtext2">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-lg-6 col-lg-6">
                                        <h5 className='mainHeadingH3'>Unique Appeal: Personalized Touch</h5>
                                        <p className='ParagraphH2P'>Custom packaging adds a personal touch, making customers more likely to engage with your product.</p>
                                    </div>
                                    <div className="col-12 col-sm-12 col-lg-6 col-lg-6">
                                        <h5 className='mainHeadingH3'>Strategic Branding</h5>
                                        <p className='ParagraphH2P'>Acknowledge branding's pivotal role and align all activities for consistent brand identity.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-sm-6 col-md-5 col-lg-5 text-end"> <img src={require("./Group 1000003936.png")} alt="" className='img-fluid' /></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MatterYourBrand