import React from 'react'
import "./PrintedBooklet.css"
const PrintedBooklet = () => {
    return (
        <>
            <div className="">
                <div className="mainideal pt-5">
                    <div className="row ">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7 pt-3 headingforbookletall" >
                            <h2 className="headingforbooklet  mainHeadingH2" >Grow Your Business with Custom Printed Booklets</h2>
                            <p className='heading1forcardonlybooklet ParagraphH2P' >
                                Stampa Prints is the right place for ordering high-quality printed booklets. We have readymade booklet templates available at reasonable price for your ease. We also offer custom booklet printing services for businesses who want to get the most out of their printed booklets. <br /> <br />We have an in-house printing facility available. This helps us meet and exceed in ongoing customization requirements of our clients.Businesses can choose any printing style for their printed booklets.
                            </p>
                        </div>


                        <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 text-center imgheightprintvooklet1" >
                            <img
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

export default PrintedBooklet