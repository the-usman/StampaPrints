import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CustomPackage.css';

function CustomPackage() {

  return (
    <>
      <div className='wholecustomebox'>
        <h2 className='text-center mb-4 cpcolor mainHeadingH2'>Let Us Design & Print Your Custom Packaging Boxes For You!</h2>

        <div className='custom-package'>
          <OwlCarousel
            className='owl-theme'
            loop={false}
            margin={10}
            nav={false}
            responsive={{
              0: {
                items: 1,
              },
              375: {
                items: 1,
              },
              600: {
                items: 2,
              },
              1000: {
                items: 3,
              },
            }}
          >
            {/* Card 1 */}
            <div className='item'>
              <div
                className='card cardcustomhover p-2 text-center m-2 styleforcardcustom'

              >
                <img
                  src={require('./Images/box1h.png')}
                  className='card-img-top mx-auto imageForCustomPage'
                  alt='...'
                  style={{ height: '96px', width: '96px' }}
                />
                <div className='card-body'>
                  <h5 className='card-title mainHeadingH3'>Why Our Printing Services?</h5>
                  <p className='card-text ParagraphH2P' style={{ fontSize: '14px' }}>
                    Stampa Prints turns your packaging box design dreams into reality with free design assistance
                    and limitless customization choices. Elevate your packaging boxes with our expert support for
                    distinctive and standout results.
                  </p>
                </div>

              </div>
            </div>

            {/* Card 2 */}
            <div className='item'>
              <div
                className='card cardcustomhover p-2 text-center m-2'
              >
                <img
                  src={require('./Images/box2.png')}
                  className='card-img-top mx-auto imageForCustomPage'
                  alt='...'
                  style={{ height: '96px', width: '96px' }}
                />
                <div className='card-body'>
                  <h5 className='card-title mainHeadingH3'>Why Our Printing Services?</h5>
                  <p className='card-text ParagraphH2P' style={{ fontSize: '14px' }}>
                    Stampa Prints turns your packaging box design dreams into reality with free design assistance
                    and limitless customization choices. Elevate your packaging boxes with our expert support for
                    distinctive and standout results.
                  </p>
                </div>

              </div>
            </div>

            {/* Card 3 */}
            <div className='item'>
              <div
                className='card cardcustomhover p-2 text-center m-2'

              >
                <img
                  src={require('./Images/box3.png')}
                  className='card-img-top mx-auto imageForCustomPage'
                  alt='...'
                  style={{ height: '96px', width: '96px' }}
                />
                <div className='card-body'>
                  <h5 className='card-title mainHeadingH3'>Why Our Printing Services?</h5>
                  <p className='card-text ParagraphH2P' style={{ fontSize: '14px' }}>
                    Stampa Prints turns your packaging box design dreams into reality with free design assistance
                    and limitless customization choices. Elevate your packaging boxes with our expert support for
                    distinctive and standout results.
                  </p>
                </div>

              </div>
            </div>

            {/* Card 4 */}
            <div className='item'>
              <div
                className='card cardcustomhover p-2 text-center m-2'

              >
                <img
                  src={require('./Images/box4.png')}
                  className='card-img-top mx-auto imageForCustomPage'
                  alt='...'
                  style={{ height: '96px', width: '96px' }}
                />
                <div className='card-body'>
                  <h5 className='card-title mainHeadingH3'>Why Our Printing Services?</h5>
                  <p className='card-text ParagraphH2P' style={{ fontSize: '14px' }}>
                    Stampa Prints turns your packaging box design dreams into reality with free design assistance
                    and limitless customization choices. Elevate your packaging boxes with our expert support for
                    distinctive and standout results.
                  </p>
                </div>

              </div>
            </div>

          </OwlCarousel>
        </div>
      </div>
    </>
  );
}

export default CustomPackage;

