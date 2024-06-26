import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 500;
    } else {
      current.scrollLeft += 500;
    }
  };

  return (
    <div className="app__gallery flex__center" id='photos'>
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ margin: '2rem 0 1rem 0' }}>Indulge your senses in a visual feast of impeccable styles. Browse our exquisite haircut gallery for a glimpse of possibilities. Let your imagination cook and discover your perfect royal look.</p>
        <a href="https://www.instagram.com/blurryvision.kk/" target='_blank' type="button" className="custom__button">View More</a>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.gallery1, images.gallery2, images.gallery3, images.gallery4, images.gallery5, images.gallery6, images.gallery7, images.gallery8, images.gallery9].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;