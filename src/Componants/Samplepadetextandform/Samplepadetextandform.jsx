import React from 'react'
import("./Samplepadetextandform.css")



const Samplepadetextandform = () => {
    return (

        <div className="" >
            <div className="single-product1 Samplepadetextandformall row">
                <div className="rowforthis2 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div className="col2rec">
                        <h2 className='mainHeadingH2 mainHeadingH2pcs' data-aos="zoom-in-down">Natural Custom Printed Kraft Box Packaging</h2>
                        <p className='ParagraphH2P ParagraphH2P12' data-aos="zoom-in">Custom kraft boxes are gaining popularity among brands and start-ups because they are environmentally friendly and recyclable. Advancements made in the past decade by printing and packaging companies have made the use of kraft boxes affordable, and now you can customize them according to your needs.
                            <br /><br />
                            Before that, you could only print one or two colors on kraft stock, but with the latest printing technologies like UVs and LED UV inks, you can now print full-color jobs or Pantone color print jobs as well.
                            <br /><br />
                            Before that, you could only print one or two colors on kraft stock, but with the latest printing technologies like UVs and LED UV inks, you can now print full-color jobs or Pantone color print jobs as well.
                        </p>
                    </div>

                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mainHeadingH2 mainforpad1 mb-0">
                    <div>
                        {/* <h2 className='ParagraphH2P12'>Custom Brochure Printing
            </h2>
            <p className='ParagraphH2P ParagraphH2P11'>
              Improve Your Business Bottom Line or Showcase to the World What Your Business Has Got for Them! Avail our custom booklet printing services to inform, engage, and convert your audience.
            </p> */}


                        <form className='formfororder1'>
                            <h2 className="text-center mainHeadingH2 mainHeadingH2sizee" style={{ color: "white", fontSize: "26px" }}>Get an instant Quote</h2>
                            <div className="row mb-3">
                                <div className="col">
                                    <div className="form-outline">
                                        <input
                                            type="text"
                                            id="form6Example1"
                                            className="form-control form-control2"
                                            placeholder="Name"
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-outline">
                                        <input
                                            type="text"
                                            id="form6Example2"
                                            className="form-control form-control2"
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <div className="form-outline ">
                                        <input
                                            type="tel"
                                            id="form6Example3"
                                            className="form-control form-control2"
                                            placeholder="Phone"
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-outline">
                                        <input
                                            type="text"
                                            id="form6Example2"
                                            className="form-control form-control2"
                                            placeholder="Custom Booklet Printing"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-3 col-md-3 col-lg-3 col-sm-6">
                                    <div className="form-outline ">
                                        <input
                                            type="number" id="quantity" name="quantity" min="1" max="5"
                                            className="form-control form-control2"
                                            placeholder="Quantity"
                                        />
                                    </div>
                                </div>
                                <div className="col-3 col-md-3 col-lg-3 col-sm-6">
                                    <div className="form-outline">
                                        <input
                                            type="text"
                                            id="form6Example2"
                                            className="form-control form-control2"
                                            placeholder="Color"
                                        />
                                    </div>
                                </div>
                                <div className="col-3 col-md-3 col-lg-3 col-sm-6">
                                    <div className="form-outline">
                                        <input
                                            type="text"
                                            id="form6Example2"
                                            className="form-control form-control2"
                                            placeholder="Orientation"
                                        />
                                    </div>
                                </div>
                                <div className="col-3 col-md-3 col-lg-3 col-sm-6">
                                    <div className="form-outline">
                                        <input
                                            type="text"
                                            id="form6Example2"
                                            className="form-control form-control2"
                                            placeholder="Paper Type"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-outline mb-2">
                                <textarea
                                    className="form-control form-control2"
                                    id="form6Example4"
                                    rows="4"
                                    placeholder="Specification"
                                ></textarea>
                            </div>
                            <div className='uploadsample'>
                                <p className='uploadsampletext'>Upload Sample design If Any</p>
                                <button className="Button11 m-2" style={{
                                    margin: "0.5rem!important", backgroundColor: "rgba(21, 85, 95, 0.50)", borderRadius: "5px 5px 5px 5px", padding: "5px 15px 5px 15px", fontFamily: "Poppins", color: "white",
                                    fontSize: "14px", fontWeight: "400", border: "none"
                                }}>+ Upload</button>
                            </div>
                            <div className="text-center">
                                <button className="Button11 m-2" style={{
                                    margin: "0.5rem!important", backgroundColor: "rgba(21, 85, 95, 0.50)", borderRadius: "5px 5px 5px 5px", padding: "10px 10px 10px 10px", fontFamily: "Poppins", color: "white",
                                    fontSize: "16px", fontWeight: "400", border: "none"
                                }}>Send Message</button>
                                {/* <button className="btn btn-primary " style={{ backgroundColor: " rgba(21, 85, 95, 0.50)", border: "none", borderRadius: "5px 5px 5px 5px" }}>Send Message</button> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Samplepadetextandform