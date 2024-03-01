import React from 'react'
import './ContactUsComponants.css'
const ContactUsComponants = () => {
    return (
        <>
            <div className="contantforbidscreenrabta">
                <div className="contactusmainhead ">
                    <div className="row ">
                        <div className=" col-12 col-sm-12 col-md-6 col-lg-6 maincuntactustext">
                            <h2 className="headingcontactus">Lets Have A Chat</h2>
                            <div className="headingcontactp"> Connect with Stampa Prints for Exceptional Custom Packaging and Printing Solutions Tailored to Your Needs. Elevate your brand presence with Stampa Prints, where innovation meets craftsmanship. </div>
                        </div>
                        <div className="col-6  col-12 col-sm-12 col-md-6 col-lg-6">
                            <form className='formforordercu'>
                                <h2 className="text-center headingcontactus">Share A Thought</h2>
                                <div className="row mb-4">
                                    <div className="col">
                                        <div className="form-outline">
                                            <input
                                                type="text"
                                                id="form6Example1"
                                                className="form-control"
                                                placeholder="Full Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-outline">
                                            <input
                                                type="text"
                                                id="form6Example2"
                                                className="form-control"
                                                placeholder="Email"
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-outline">
                                            <input
                                                type="text"
                                                id="form6Example2"
                                                className="form-control"
                                                placeholder="Contact"
                                            />
                                        </div>
                                    </div>

                                </div>
                                <div className="row mb-4">
                                    <div className="col">
                                        <div className="form-outline">
                                            <input
                                                type="tel"
                                                id="form6Example3"
                                                className="form-control"
                                                placeholder="Company Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-outline">
                                            <input
                                                type="text"
                                                id="form6Example2"
                                                className="form-control"
                                                placeholder="Website"
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-outline">
                                            <input
                                                type="text"
                                                id="form6Example2"
                                                className="form-control"
                                                placeholder="Country"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-outline mb-4">
                                    <textarea
                                        className="form-control"
                                        id="form6Example4"
                                        rows="4"
                                        placeholder="Specification"
                                    ></textarea>
                                </div>
                                <div class="col d-flex justify-content-center align-items-center">
                                    <button class="btn btn-primary px-3 py-2" style={{ backgroundColor: " rgba(21, 85, 95, 0.50)", border: "none", borderRadius: "5px 5px 5px 5px" }}>Send Massage</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contactusmainheadsmallscreen ">

                <div className="  maincuntactustextsmall">
                    <h2 className="headingcontactussm">Contact Us</h2>
                    <p className="headingcontactpsm"> Connect with Stampa Prints for Exceptional Custom Packaging and Printing Solutions Tailored to Your Needs. Elevate your brand presence with Stampa Prints, where innovation meets craftsmanship. </p>
                </div>
                <div className="">
                    <form className='formforordercusm'>
                        <h2 className="text-center headingcontactus">Share A Thought</h2>
                        <div className="row mb-4">
                            <div className="col">
                                <div className="form-outline">
                                    <input
                                        type="text"
                                        id="form6Example1"
                                        className="form-control"
                                        placeholder="Full Name"
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline">
                                    <input
                                        type="text"
                                        id="form6Example2"
                                        className="form-control"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>


                        </div>
                        <div className="row mb-4">
                            <div className="col">
                                <div className="form-outline">
                                    <input
                                        type="text"
                                        id="form6Example2"
                                        className="form-control"
                                        placeholder="Contact"
                                    />
                                </div>
                            </div>

                            <div className="col">
                                <div className="form-outline">
                                    <input
                                        type="tel"
                                        id="form6Example3"
                                        className="form-control"
                                        placeholder="Company Name"
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="row mb-4">

                            <div className="col">
                                <div className="form-outline">
                                    <input
                                        type="text"
                                        id="form6Example2"
                                        className="form-control"
                                        placeholder="Website"
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline">
                                    <input
                                        type="text"
                                        id="form6Example2"
                                        className="form-control"
                                        placeholder="Country"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-outline mb-4">
                            <textarea
                                className="form-control"
                                id="form6Example4"
                                rows="4"
                                placeholder="Specification"
                            ></textarea>
                        </div>
                        <div class="col d-flex justify-content-center align-items-center">
                            <button class="btn btn-primary px-3 py-2" style={{ backgroundColor: " rgba(21, 85, 95, 0.50)", border: "none", borderRadius: "5px 5px 5px 5px" }}>Send Massage</button>
                        </div>
                    </form>
                </div>
            </div>




        </>
    )
}

export default ContactUsComponants