import React, { useState } from 'react';
import './css/MenuItem.css';

function MenuItem({ item, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(item.sizes[0]);
  const [extras, setExtras] = useState([]);

  const toggleExtra = (extra, price) => {
    if (extras.find(e => e.name === extra)) {
      setExtras(extras.filter(e => e.name !== extra));
    } else {
      setExtras([...extras, { name: extra, price }]);
    }
  };

  const totalPrice = selectedSize.price * quantity + extras.reduce((acc, e) => acc + e.price, 0);

  return (
    <div className="menu-item">
      <div className="item-image">
        <img src={item.image} alt={item.name} />
      </div>
      
      <h3 className="item-name">{item.name}</h3>
      <p className="item-description">{item.description}</p>

      {/* Options (Taille + Quantité) */}
      <div className="item-options">
        <select 
          className="item-select"
          value={selectedSize.name} 
          onChange={(e) => {
            const size = item.sizes.find(s => s.name === e.target.value);
            setSelectedSize(size);
          }}
        >
          {item.sizes.map(size => (
            <option key={size.name} value={size.name}>
              {size.name} {/* UNIQUEMENT la taille */}
            </option>
          ))}
        </select>

        <input 
          type="number" 
          className="item-quantity"
          value={quantity} 
          min={1}
          onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
        />
      </div>

      {/* Suppléments */}
      <div className="extras">
  {item.extras && item.extras.map((extra, idx) => (
    <div key={idx}>
      <input 
        type="checkbox"
        id={`extra-${extra.name}-${item.id}`}
        onChange={() => toggleExtra(extra.name, extra.price)}
      />
      <label htmlFor={`extra-${extra.name}-${item.id}`}>
        {extra.name} (+{extra.price} FCFA)
      </label>
    </div>
  ))}
</div>


      <p className="item-price">Prix : {totalPrice} FCFA</p>

      <button 
        className="add-to-cart-btn" 
        onClick={() => addToCart({
          ...item, 
          quantity, 
          size: selectedSize.name, 
          extras, 
          totalPrice
        })}
      >
        Ajouter au panier
      </button>
    </div>
  );
}

export default MenuItem;
