import React, { useState } from 'react';
import './App.css';
import { menuData, categories } from './menuData';
import CategorySection from './CategorySection';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories = selectedCategory === 'all' 
    ? categories 
    : categories.filter(cat => cat.id === selectedCategory);

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1 className="restaurant-name">🔥 Sama Restaurant</h1>
        <p className="restaurant-subtitle">Pizzas • Burgers • Tacos • Cuisine Sénégalaise</p>
      </header>

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
          />
        ))}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>📱 Scannez le QR code pour voir notre menu</p>
        <p className="footer-note">Bon appétit ! 🍴</p>
      </footer>
    </div>
  );
}

export default App;
