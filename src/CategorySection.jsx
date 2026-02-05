import React from 'react';
import MenuItem from './MenuItem';

function CategorySection({ category, items, addToCart }) {
  return (
    <div className="category-section">
      <h2 className="category-title">
        <span className="category-icon">{category.icon}</span> {category.name}
      </h2>
      <div className="items-grid">
        {items.map(item => (
          <MenuItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default CategorySection;
