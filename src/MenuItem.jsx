import React from 'react';

function MenuItem({ item }) {
  return (
    <div className="menu-item">
<div className="item-image">
  <img src={item.image} alt={item.name} />
</div>      <div className="item-content">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-description">{item.description}</p>
        <p className="item-price">{item.price}</p>
      </div>
    </div>
  );
}

export default MenuItem;
