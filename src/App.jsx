import React, { useState } from 'react';
import './css/App.css';
import { menuData, categories } from './data/menuData';
import CategorySection from './CategorySection';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false); // ✅ Masquable
  const [showConfirmation, setShowConfirmation] = useState(false);

  const filteredCategories = selectedCategory === 'all' 
    ? categories 
    : categories.filter(cat => cat.id === selectedCategory);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setShowCart(true); // Ouvre automatiquement
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const toggleCart = () => {
    setShowCart(!showCart); // ✅ Toggle on/off
  };

  const totalOrder = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  const confirmOrder = () => {
    if(cart.length === 0) {
      alert("Le panier est vide !");
      return;
    }
    setShowConfirmation(true);
  };

  const finalizeOrder = () => {
    console.log("Commande confirmée :", cart);
    alert(`Commande confirmée ! Total: ${totalOrder} FCFA`);
    setCart([]);
    setShowCart(false);
    setShowConfirmation(false);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1 className="restaurant-name">🔥 Sama Restaurant</h1>
        <p className="restaurant-subtitle">Pizzas • Burgers • Tacos • Cuisine Sénégalaise</p>
      </header>

      {/* Bouton panier flottant (TOUJOURS visible) */}
      <button 
        className={`cart-toggle-btn ${cart.length > 0 ? 'has-items' : ''}`}
        onClick={toggleCart}
      >
        🛒 {cart.length}
      </button>

      {/* Filtres de catégories */}
      <nav className="category-nav">
        <button 
          className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('all')}
        >
          Tout voir
        </button>
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.icon} {category.name}
          </button>
        ))}
      </nav>

      {/* Menu */}
      <main className="menu-container">
        {filteredCategories.map(category => (
          <CategorySection 
            key={category.id}
            category={category}
            items={menuData[category.id]}
            addToCart={addToCart}
          />
        ))}
      </main>

      {/* Panier masquable */}
      {showCart && (
        <div className="cart-container">
          <div className="cart-header">
            <h2>🛒 Votre Panier ({cart.length})</h2>
            <button className="close-cart-btn" onClick={toggleCart}>✕</button>
          </div>
          
          {cart.length === 0 ? (
            <p className="empty-cart">Votre panier est vide</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <div>
                    <p><strong>{item.name}</strong></p>
                    <p>{item.quantity} x {item.size}</p>
                    {item.extras.length > 0 && (
                      <p className="extras-text">Extras: {item.extras.map(e => e.name).join(', ')}</p>
                    )}
                  </div>
                  <div className="cart-item-right">
                    <p>{item.totalPrice} FCFA</p>
                    <button className="remove-btn" onClick={() => removeFromCart(index)}>
                      Supprimer
                    </button>
                  </div>
                </div>
              ))}
              <div className="cart-footer">
                <p className="total">Total: <strong>{totalOrder} FCFA</strong></p>
                <button className="confirm-btn" onClick={confirmOrder}>
                  Valider la commande
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Confirmation (inchangée) */}
      {showConfirmation && (
        <div className="confirmation-overlay">
          <div className="confirmation-box">
            <h2>Confirmer votre commande</h2>
            <div className="confirmation-items">
              {cart.map((item, index) => (
                <div key={index} className="confirmation-item">
                  <p><strong>{item.name}</strong> - {item.quantity} x {item.size}</p>
                  {item.extras.length > 0 && <p>Extras: {item.extras.map(e => e.name).join(', ')}</p>}
                  <p>Prix: {item.totalPrice} FCFA</p>
                </div>
              ))}
            </div>
            <p className="total"><strong>Total: {totalOrder} FCFA</strong></p>
            <div className="confirmation-buttons">
              <button className="finalize-btn" onClick={finalizeOrder}>Confirmer</button>
              <button className="cancel-btn" onClick={() => setShowConfirmation(false)}>Annuler</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
