import React from 'react'
import "./CustomerEngagement.css"
const CustomerEngagement = () => {
    return (
        <>
            <div className="pt-5">
                <div className="mainidealengagment ">
                    <div className="row ">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 headingforengamrntall" >
                            <h2 className="headingforbooklet mainHeadingH2" >Grow Your Business with Custom Printed Booklets</h2>
                            <p className='heading1forcardonlybooklet ParagraphH2P' >
                                Stampa Prints is the right place for ordering high-quality printed booklets. We have readymade booklet templates available at reasonable price for your ease. We also offer custom booklet printing services for businesses who want to get the most out of their printed booklets.We have an in-house printing facility available. <br /><br /> This helps us meet and exceed in ongoing customization requirements of our clients.Businesses can choose any printing style for their printed booklets. Whether its offset printing or CMYK printing, our in-house printing facility is here to assist you.
                            </p>
                        </div>


                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 text-end imgheightprintengagment" >
                            <img className='img-fluid'
                                src={require('./Group 1000003911.png')}
                                alt=""
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CustomerEngagement