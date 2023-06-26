import React from 'react';

import { SubHeading, ServiceItem } from '../../components';
import { data, images } from '../../constants';
import './SServices.css';

const SServices = () => (
  <div className="app__sservices flex__center section__padding" id="services">
    <div className="app__sservices-title">
      <SubHeading title="What we provide" />
      <h1 className="headtext__cormorant">Services</h1>
    </div>

    <div className="app__sservices-service">
      <div className="app__sservices-service_cuts  flex__center">
        <p className="app__sservices-service_heading">Cuts</p>
        <div className="app__sservices_service_items">
          {data.services.map((service, index) => (
            <ServiceItem key={service.title + index} title={service.title} price={service.price} tags={service.comment}/>
          ))}
        </div>
      </div>

      <div className="app__sservices-service_img">
        <img src={images.services} alt="service__img" />
      </div>

      <div className="app__sservices-service_caveats  flex__center">
        <p className="app__sservices-service_heading">Caveats</p>
        <div className="app__sservices_service_items">
          {data.caveats.map((caveat, index) => (
            <ServiceItem key={caveat.title + index} title={caveat.title} price={caveat.price} tags={caveat.comment}/>
          ))}
        </div>
      </div>
    </div>

    {/* <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div> */}
  </div>
);

export default SServices;

// Services + rules that relate to hair