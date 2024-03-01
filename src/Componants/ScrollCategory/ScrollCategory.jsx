import React from 'react';
import './ScrollCategory.css';

const ScrollCategory = ({ data }) => {
    const { heading, image, desc } = data;
    return (
        <div className='Mainscrollcatagory'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-5 col-lg-5 scrollimgforcata">
                        <img className='img-fluid' src={image} alt="" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-7 col-lg-7">
                        <div className="mainscrolltext">
                            <div>
                                <h2 className='MainscrollcatagoryHeading' >{heading}</h2>
                            </div>
                            <div>
                                <p className='overflow-scroll MainscrollcatagoryPara'>
                                    {
                                        desc.map((des, index) =>
                                            <>
                                                {des}
                                                {index !== desc.length - 1 &&
                                                    <>
                                                        <br /><br />
                                                    </>
                                                }

                                            </>
                                        )
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ScrollCategory;
