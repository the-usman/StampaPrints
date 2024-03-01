import React from 'react'
import "./SampleFinishingOption.css"

const SampleFinishingOption = () => {
    return (
        <>

            <div className='wholeforsampleoption'>
                <div className=' headingforsampleoption'>
                    <h2 className=' mainHeadingH2 '>Acquisitive Finishing Options for Perfect Looks</h2>
                    <p className=' ParagraphH2P samplefinishingparagraph'>Stampa Prints enhances your comic book printing with top-tier finishing options. Lamination ensures durability and a polished look, while binding choices cater to your style. Our foil stamping and embossing add luxury, making your comic books stand out. Elevate your project with meticulous craftsmanship and a guarantee of excellence.</p>
                </div>
                <div>
                    {/* <div className="changeforimage">
                        <div className="col-2">
                            <div><img src={require("./images/Rectangle 177.png")} alt="" /></div>
                            <div>Glossy Paper</div>
                        </div>
                        <div className='oneimageboxoption'>
                            <div className='oneimageboxoptionimg'><img src={require("./images/Rectangle 177.png")} alt="" /></div>
                            <div>Glossy Paper</div>
                        </div>
                        <div className='oneimageboxoption'>
                            <div className='oneimageboxoptionimg'><img src={require("./images/Rectangle 177.png")} alt="" /></div>
                            <div>Glossy Paper</div>
                        </div>
                        <div className='oneimageboxoption'>
                            <div className='oneimageboxoptionimg'><img src={require("./images/Rectangle 177.png")} alt="" /></div>
                            <div>Glossy Paper</div>
                        </div>
                        <div className='oneimageboxoption'>
                            <div className='oneimageboxoptionimg'><img src={require("./images/Rectangle 177.png")} alt="" /></div>
                            <div>Glossy Paper</div>
                        </div>
                        <div className='oneimageboxoption'>
                            <div className='oneimageboxoptionimg'><img src={require("./images/Rectangle 177.png")} alt="" /></div>
                            <div>Glossy Paper</div>
                        </div>
                        <div className='oneimageboxoption'>
                            <div className='oneimageboxoptionimg'>  <img src={require("./images/Rectangle 177.png")} alt="" /></div>
                            <div>Glossy Paper</div>
                        </div>
                    </div> */}

                </div>

                <div className="row changeforimage1">
                    <div className="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2 col-xxl-2 changeforoption">
                        <div style={{ maxWidth: '100%' }}>
                            <img src={require("./images/Rectangle 177.png")} alt="" style={{ width: '100%', height: '150px' }} />
                        </div>
                        <div className='text-center pt-1' style={{ color: "#15555f" }}>Glossy Paper</div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2 col-xxl-2 changeforoption">
                        <div style={{ maxWidth: '100%' }}>
                            <img src={require("./images/image2.png")} alt="" style={{ width: '100%', height: '150px' }} />
                        </div>
                        <div className='text-center pt-1 ' style={{ color: "#15555f" }}>Matt Paper</div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2 col-xxl-2 changeforoption">
                        <div style={{ maxWidth: '100%' }}>
                            <img src={require("./images/image3.png")} alt="" style={{ width: '100%', height: '150px' }} />
                        </div>
                        <div className='text-center pt-1' style={{ color: "#15555f" }}>Newspaper Print</div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2 col-xxl-2 changeforoption">
                        <div style={{ maxWidth: '100%' }}>
                            <img src={require("./images/image4.png")} alt="" style={{ width: '100%', height: '150px' }} />
                        </div>
                        <div className='text-center pt-1' style={{ color: "#15555f" }}>Coated Paper</div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2 col-xxl-2 changeforoption">
                        <div style={{ maxWidth: '100%' }}>
                            <img src={require("./images/image5.png")} alt="" style={{ width: '100%', height: '150px' }} />
                        </div>
                        <div className='text-center pt-1' style={{ color: "#15555f" }}>Aqueous Coating</div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2 col-xxl-2 changeforoption">
                        <div style={{ maxWidth: '100%' }}>
                            <img src={require("./images/image6.png")} alt="" style={{ width: '100%', height: '150px' }} />
                        </div>
                        <div className='text-center pt-1' style={{ color: "#15555f" }}>Spot UV</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SampleFinishingOption