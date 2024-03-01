import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navupper.css';

export default function Navupper() {
  return (
    <Carousel fade={true} controls={false} indicators={false} interval={5000}>
      <Carousel.Item>
        <p className="text_top_nav">Fast & Free Shipping On All Orders!</p>
      </Carousel.Item>
      <Carousel.Item>
        <p className="text_top_nav">Get 10% Off On Your First Order</p>
      </Carousel.Item>
    </Carousel>
  );
}
