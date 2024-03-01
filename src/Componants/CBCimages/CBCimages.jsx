import React from 'react'

const CBCimages = () => {
    return (
        <>
            <div className="">
                <div className="d-flex justify-content-center">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="row1image">
                            <div className="imgagediv1 mt-3">
                                <img src={require("./div1.png")} alt="" />
                            </div>
                            <div className="imgagediv12 mt-3">
                                <img src={require("./div11.png")} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row2image">
                        <div className="imgagediv2 m-3">
                            <img src={require("./div2.png")} alt="" />
                        </div>
                        <div className="imgagediv22 m-3">
                            <img src={require("./div22.png")} alt="" />
                        </div>
                        <div className="imgagediv23 m-3">
                            <img src={require("./div23.png")} alt="" />
                        </div>
                    </div>
                    <div className="row3image">
                        <div className="imgagediv3 mt-3">
                            <img src={require("./div3.png")} alt="" />
                        </div>
                        <div className="imgagediv32 mt-3">
                            <img src={require("./div32.png")} alt="" />
                        </div>
                        <div className="imgagediv33 mt-3">
                            <img src={require("./div33.png")} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CBCimages