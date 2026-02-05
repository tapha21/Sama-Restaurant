import React from 'react';
import MenuItem from './MenuItem';

function CategorySection({ category, items }) {
  return (
    <section className="category-section" id={category.id}>
      <h2 className="category-title">
        <span className="category-icon">{category.icon}</span>
        {category.name}
      </h2>
      <div className="items-grid">
        {items.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
