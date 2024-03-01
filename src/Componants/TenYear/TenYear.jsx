import React from 'react'
import "./TenYear.css"

const TenYear = () => {
    return (
        <>
            <div className="container wholetenyear">
                <div className="row">
                    <div className="col-12  col-sm-6 col-lg-5 tenyearcol1img">
                        <img className='img-fluid' src={require("./image2.png")} alt="" />
                    </div>
                    <div className="col-12 col-sm-6 col-lg-7 tenyearcol2">
                        <h2 className='mainHeadingH2 mainHeadingH2tenyear'>Unleash Boundless Creativity with Our Expert Printing Craftsmanship</h2>
                        <p className='ParagraphH2P ParagraphH2Ptenyear'>Ignite your imagination and explore endless possibilities with our unparalleled printing expertise. we're your partners in turning creative visions into captivating print realities. Step into a realm where creativity knows no bounds. <br /><br />From concept to completion, we infuse each project with passion and precision, ensuring your ideas are not just printed, but elevated into pieces of art that inspire and engage. </p>
                        <img className='' src={require("./image1.png")} alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default TenYear