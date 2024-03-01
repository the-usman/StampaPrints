import React from 'react'
import './GetinTouch.css'
const GetinTouch = () => {
    return (
        <>


            <div className='wholegetintouch'>
                <div className="container containeriswhole">
                    <form className='formfororder1get p-3 '>
                        <h2 className="formfororder1h2 text-center " >Get In Touch</h2>
                        <div className="row mb-3">
                            <div className="col-md-6 col-sm-12">
                                <div className="form-outline">
                                    <input
                                        type="text"
                                        id="form6Example1"
                                        className="form-control  formforinputget formforinputget1"

                                        placeholder="Full Name"
                                    />
                                </div>
                            </div>
                            <div className="col-6 col-md-6 col-sm-12">
                                <div className="form-outline ">
                                    <input
                                        type="text"
                                        id="form6Example2"
                                        className="form-control formforinputget"

                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-outline mb-3">
                            <textarea
                                className="form-control formforinputget"
                                id="form6Example4 "
                                rows="2"

                                placeholder="Your Massage"
                            ></textarea>

                        </div>
                        <div class="col d-flex justify-content-center align-items-center">
                            <button class="btn btn-primary px-3 py-2" style={{ backgroundColor: " #578A79", border: "none", borderRadius: "5px 5px 5px 5px", fontSize: "16px", fontFamily: "Poppins" }}>Send Massage</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default GetinTouch