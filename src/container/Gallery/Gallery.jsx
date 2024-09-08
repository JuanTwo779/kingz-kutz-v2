import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';
import { Carousel } from 'react-bootstrap';

const Gallery = () => {

  return (
    <div className="app__bg app__wrapper section__padding" id='photos'>

      <div className="app__wrapper_info">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ margin: '2rem 0 1rem 0' }}>Indulge your senses in a visual feast of impeccable styles. Browse our exquisite haircut gallery for a glimpse of possibilities. Let your imagination cook and discover your perfect royal look.</p>
        <a href="https://www.instagram.com/blurryvision.kk/" target='_blank' type="button" className="custom__button" style={{ textDecoration: 'none' }}>View More</a>
      </div>
      
      <div className="app__wrapper_img app__wrapper_img">
          <Carousel className='app__carousel'>
            {[images.gallery1, images.gallery2, images.gallery3, images.gallery4, images.gallery5, images.gallery6, images.gallery7, images.gallery8, images.gallery9].map((image) => (
              <Carousel.Item>
                <img src={image} alt='First slide' className='d-block w-100 app_carousel-img' />
              </Carousel.Item>
            ))}
          </Carousel>
      </div>
    
    </div>
  );
};

export default Gallery;