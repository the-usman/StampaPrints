import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from 'react-bootstrap/Card';
import './Testimonials1.css';

const cardData = [
  { title: 'Card 1', description: 'Description for Card 1' },
  { title: 'Card 2', description: 'Description for Card 2' },
  { title: 'Card 3', description: 'Description for Card 3' },
  { title: 'Card 4', description: 'Description for Card 4' },
  { title: 'Card 5', description: 'Description for Card 5' },
  { title: 'Card 6', description: 'Description for Card 6' },
  // Add more card data as needed
];

const CarouselItem = ({ title, description }) => (
  <div className='wholetestimonial1_1'>
    <Card style={{ width: '18rem', backgroundColor: "#F6F6F6", border: "none" }}>
      <Card.Body>
        <div className='d-flex justify-content-between'>
          <div><img style={{ height: "20px" }} src={require('./Starssmall.png')} alt="" /></div>
          <div className='ParagraphH2P ' style={{ fontSize: "12px", alignSelf: "center" }}>2 days ago</div>
        </div>


        <Card.Text className=' mainHeadingH2  mt-2 mb-1' style={{ fontSize: "18px" }}>
          Best on the market
        </Card.Text>
        <p className='ParagraphH2P mb-1' style={{ fontSize: "14px" }}>I love this product because the support is great. Please ...</p>
        <hr className='mb-2 mt-2' style={{ border: "1px solid #3A776c", width: "50px" }} />
        <p className='m-0 mainHeadingH2'>Worldtraveler</p>
      </Card.Body>
    </Card>
  </div>
);

const AdvancedCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="wholetestimonial1">
      <div className="container text-center ">
        <h2 className='tectcolortestimonial1 mainHeadingH2' data-aos="zoom-in">See Why Customers Love Stampa Prints</h2>
        <h5 className='tectcolortestimonialh4 pb-4 ParagraphH2P' data-aos="zoom-in">Rated 4.6 out of 5 based on 25 reviews on <span><a href="https://www.trustpilot.com">Trustpilot</a></span></h5>
      </div>
      <div className="row wholetestimonial1_1">
        <div className="col-12 col-md-3 col-lg-3 d-none d-md-block">
          {/* Display only on medium and larger screens */}
          <Card style={{ width: '18rem', backgroundColor: "#F6F6F6", border: "none" }}>
            <Card.Body>

              <Card.Title className='text-center mainHeadingH2'>Excellent</Card.Title>
              <Card.Img variant="top" src={require("./Stars x2.png")} />
              <Card.Text className='text-center m-0 mt-2 ParagraphH2P'>
                Based on 456 reviews
              </Card.Text>
              <div className='imagetrustpiolot'>
                <Card.Img className='' src={require("./star1.png")} />
                <p className='m-0'>Trustpilot</p>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-9 col-lg-9">
          {/* Adjust the number of slides to show based on screen size */}

          <Slider {...settings} slidesToShow={3} responsive={[
            {
              breakpoint: 768, // medium screens
              settings: {
                slidesToShow: 1,
                dots: true,
                arrows: true,

              }
            },
            {
              breakpoint: 992, // large screens
              settings: {
                slidesToShow: 3,
              }
            }
          ]}>
            {cardData.map((card, i) => (
              <CarouselItem key={i} {...card} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AdvancedCarousel;



// import React from 'react';
// import { useSnapCarousel } from 'react-snap-carousel';

// // Sample card data
// const cardData = [
//   { title: 'Card 1', description: 'Description for Card 1' },
//   { title: 'Card 2', description: 'Description for Card 2' },
//   { title: 'Card 3', description: 'Description for Card 3' },
//   { title: 'Card 3', description: 'Description for Card 3' },
//   { title: 'Card 3', description: 'Description for Card 3' },
//   { title: 'Card 3', description: 'Description for Card 3' },
//   { title: 'Card 3', description: 'Description for Card 3' },
//   { title: 'Card 3', description: 'Description for Card 3' },
//   // Add more card data as needed
// ];

// const AdvancedCarousel = () => {
//   const { scrollRef, pages, activePageIndex, goTo } = useSnapCarousel();

//   return (
//     <>
//       <div className="row">
//         <div className="col-12">
//           <ul
//             ref={scrollRef}
//             style={{
//               display: 'flex',
//               overflow: 'auto',
//               scrollSnapType: 'x mandatory'
//             }}
//           >
//             {cardData.map((card, i) => (
//               <li
//                 key={i}
//                 style={{
//                   backgroundColor: 'aqua',
//                   width: '250px',
//                   flexShrink: 0,
//                   margin: '10px'
//                 }}
//               >
//                 <div>
//                   <h3>{card.title}</h3>
//                   <p>{card.description}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
//             <ol style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
//               {pages.map((_, i) => (
//                 <li key={i} style={{ margin: '0 5px' }}>
//                   <button
//                     style={{
//                       fontSize: '16px',
//                       padding: '4px',
//                       backgroundColor: i === activePageIndex ? '#007BFF' : '#fff',
//                       color: i === activePageIndex ? '#fff' : '#007BFF',
//                       border: '1px solid #007BFF',
//                       borderRadius: '50%',
//                       cursor: 'pointer'
//                     }}
//                     onClick={() => goTo(i)}
//                   />
//                 </li>
//               ))}
//             </ol>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdvancedCarousel;
