import React, { useState, useEffect } from 'react';
import "./QuatatiomForm.css";
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';

const countryOptions = [
  { value: 'us', label: 'United States (+1)' },
  { value: 'ca', label: 'Canada (+1)' },
  { value: 'uk', label: 'United Kingdom (+44)' },
  // Add more country options as needed
];

function QuatationForm({ data }) {
  // const { placeholder } = data;
  useEffect(() => {
    const input = document.querySelector('input[type="tel"]');
    intlTelInput(input, {
      utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js',
    });
  }, []);
  return (

    <>
      <div className="qutationfromwhole d-flex justify-content-center align-items-center">
        <div className="formforall">
          <h2 className="text-center mainHeadingH2 ">
            Get an Instant Quote Now
          </h2>
          <form class="" action='https://formspree.io/f/mdoqnlko'
            method="post" enctype="multipart/form-data">
            <div className="row">
              <div className="col-sm-6 col-6 col-md-3 col-lg-3">
                <input
                  type="text"
                  className="form-control inputstyle inputstyletop"
                  name='First Name'
                  placeholder="First Name"
                />
              </div>
              <div className="col-sm-6 col-6 col-md-3 col-lg-3">
                <input
                  type="text"
                  className="form-control inputstyle inputstyletop"
                  name='Last Name'
                  placeholder="Last Name"
                />
              </div>
              <div className="col-sm-6 col-6 col-md-3 col-lg-3">
                <input
                  type="email"
                  className="form-control inputstyle inputstyletop"
                  name='Email'
                  placeholder="Email"

                />
              </div>


              <div className="col-sm-6 col-6 col-md-3 col-lg-3 " style={{ marginTop: "10px" }}>

                <input
                  type="tel"
                  id=""
                  className="form-control inputstyle inputstyletop"
                  name='Contact No.'
                  placeholder="Phone"
                />

              </div>


            </div>
            <div className="row formmid">

              <div className="col-sm-6 col-6 col-md-2 col-lg-2 meduiminput">
                <input
                  type="text"
                  className="form-control inputstyle"
                  placeholder="CBD Packaging"
                  name='CBD'
                // value={placeholder} readonly
                />
              </div>
              <div className="col-sm-6 col-6 col-md-2 col-lg-2 smallinput ">
                <input
                  type="text"
                  className="form-control inputstyle"
                  placeholder="Unit"
                  name='Unit'

                />
              </div>

              <div className="col-sm-6 col-6 col-md-2 col-lg-2 smallinput ">
                <input
                  type="text"
                  className="form-control inputstyle"
                  placeholder="Length"
                  name='Lenght'

                />
              </div>
              <div className=" col-sm-6 col-6 col-md-2 col-lg-2 ssmallinput">
                <input
                  type="text"
                  className="form-control inputstyle"
                  placeholder="Width"
                  name='Width'
                />
              </div>
              <div className="col-sm-6 col-6 col-md-2 col-lg-2 meduiminput1">
                <input
                  type="text"
                  className="form-control inputstyle"
                  placeholder="Height"
                  name='Height'
                />
              </div>
              <div className="col-sm-6 col-6 col-md-2 col-lg-2 meduiminput1">
                <input
                  type="text"
                  className="form-control inputstyle"
                  placeholder="Quantity"
                  name='Quantity'
                />
              </div>
              {/* <div className="col-sm-6 col-6 col-md-2 col-lg-2">
                <input
                  type="text"
                  className="form-control inputstyle"
                  placeholder="Select Stock"

                />
              </div> */}


            </div>

            <div className="col-md-12 ">
              <textarea
                className="form-control inputstyle"
                placeholder="Specification"
                name='Specification'
                rows="3" // You can adjust the number of rows as needed
              ></textarea>

            </div>
            <div className='uploadfilequtation'>
              <p className=''>Upload Sample design If Any</p>
              <form action="/action_page.php"
                style={{
                  color: "#15555F",
                  fontFamily: "poppins",
                  fontSize: "18px"
                }}>
                <input type="file" id="myFile" name="filename" />
              </form>
            </div>
            {/* <div className="col-md-12  inputstyle1">
              <p>Upload Sample design if any</p>
              <button
                className="btn btn-primary px-2 py-1 mx-1"
                style={{
                  backgroundColor: " #578A79",
                  border: "none",
                  borderRadius: "5px 5px 5px 5px",
                  fontFamily: "Poppins"
                }}
              >
                + Upload
              </button>
              <button
                className="btn btn-primary px-2 py-1 "
                style={{
                  color: "#3A776C",
                  backgroundColor: " #E1E1E1",
                  border: "none",
                  borderRadius: "5px 5px 5px 5px",
                  fontFamily: "Poppins"
                }}
              >
                x Cancel
              </button>

            </div> */}


            <div className="col d-flex justify-content-center align-items-center Button-QuatationFrom">
              <button
                type='submit'
                value="send"
                className="btn btn-primary px-3 py-2"
                style={{
                  backgroundColor: " #578A79",
                  border: "none",
                  borderRadius: "5px 5px 5px 5px",
                }}
              >
                Submit Quote
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="qutationfromwholesmall d-flex justify-content-center align-items-center">
        <div className="formforall text-center">
          <h2 className="text-center mainHeadingH2 ">
            Get an Instant Quote Now
          </h2>
          <form class="" action='https://formspree.io/f/mdoqnlko'
            method="post">
            <div className="row">
              <div className="col-sm-6 col-6 col-md-3 col-lg-3">
                <input
                  type="text"
                  className="form-control inputstyle"

                  placeholder="Name"
                />
              </div>
              {/* <div className="col-sm-6 col-6 col-md-3 col-lg-3">
                <input
                  type="text"
                  className="form-control inputstyle"

                  placeholder="Last Name"
                />
              </div> */}
              <div className="col-sm-6 col-6 col-md-3 col-lg-3 ps-0 ">
                <input
                  type="email"
                  className="form-control inputstyle"
                  placeholder="Email"

                />
              </div>



              <div className="col-sm-6 col-6 col-md-3 col-lg-3 ">

                <input
                  type="tel"
                  id=""
                  className="form-control inputstyle"
                  placeholder="Phone"
                />

              </div>

              <div className="col-sm-6 col-6 col-md-3 col-lg-3 ps-0">
                <input
                  type="text"
                  className="form-control inputstyle "
                  placeholder="CBD Packaging"
                />
              </div>
            </div>
            <div className="row formmid">

              {/* <div className="col-sm-3 col-4 col-md-2 col-lg-2 me-2">
                <input
                  type="text"
                  className="form-control inputstyle smallinput"
                  placeholder="CBD Packaging"
                />
              </div> */}
              <div className="col-sm-2 col-4 col-md-2 col-lg-2 ps-1 pe-1 smallinput1">
                <input
                  type="text"
                  className="form-control inputstyle"
                  placeholder="Unit"
                />
              </div>

              <div className="col-sm-2 col-4 col-md-2 col-lg-2 meduiminput ps-0 pe-1">
                <input
                  type="text"
                  className="form-control inputstyle"
                  placeholder="Length"

                />
              </div>
              <div className="col-sm-2 col-4 col-md-2 col-lg-2 ssmallinput ps-0 pe-1">
                <input
                  type="text"
                  className="form-control inputstyle"
                  placeholder="Width"

                />
              </div>

              <div className="col-sm-2 col-4 col-md-2 col-lg-2  meduiminput ps-0 pe-1">
                <input
                  type="text"
                  className="form-control inputstyle"
                  placeholder="Height"

                />
              </div>
              <div className="col-sm-2 col-4 col-md-2 col-lg-2 smallinput ps-0 pe-1">
                <input
                  type="text"
                  className="form-control inputstyle"
                  placeholder="Quantity"
                />
              </div>
              {/* <div className="col-sm-3 col-4 col-md-2 col-lg-2">
                <input
                  type="text"
                  className="form-control inputstyle"
                  placeholder="Select Stock"

                />
              </div> */}


            </div>

            <div className="col-md-12 ">
              <textarea
                className="form-control inputstyle"
                placeholder="Specification"
                rows="2"
              ></textarea>

            </div>
            <div className='uploadfilequtation row '>
              <p className='col-6 pe-0'>Upload Sample design If Any</p>
              <form action="/action_page.php" className='UploadSample col-5 m-0 p-0'
              >
                <input type="file" id="myFile" name="filename" />
              </form>
            </div>


            <div className="col d-flex justify-content-center align-items-center Button-QuatationFrom">
              <button
                className="btn btn-primary btn-sm px-3 py-2 px-sm-2 py-sm-1"
                style={{
                  backgroundColor: " #578A79",
                  border: "none",
                  borderRadius: "5px 5px 5px 5px",
                }}
              >
                Submit Quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default QuatationForm;
