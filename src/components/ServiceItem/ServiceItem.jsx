import React from 'react';

import './ServiceItem.css';

const ServiceItem = ({ title, price, tags }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: '#FFF' }}>{title}</p>
      </div>
      {/* <div className="app__menuitem-dash" /> */}
      <div className="app__menuitem-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    <div className="app__menuitem-sub">
      <p className="p__opensans-small" style={{ color: 'var(--color-accent)' }}>{tags}</p>
    </div>
  </div>
);

export default ServiceItem;