import { useState, useEffect } from 'react';
import { DUMMY_PRODUCTS, DUMMY_INGREDIENTS } from '../data';
import Input from '../components/Input';
import Button from '../components/Button';

export default function Products({ role, cartItems, setCartItems }) {
  const [products, setProducts] = useState(DUMMY_PRODUCTS);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIngredientFilter, setSelectedIngredientFilter] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(DUMMY_PRODUCTS);

  // useEffect za filtriranje proizvoda na osnovu searchTerm i selectedIngredientFilter
  useEffect(() => {
    let filtered = products;

    // Filter po tipu sastojka
    if (selectedIngredientFilter) {
      filtered = filtered.filter(
        p => p.ingredientType === selectedIngredientFilter
      );
    }

    // Filter po terminu pretrage
    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.ingredientType.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedIngredientFilter, products]);

  // Handle search input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Dodaj proizvod u korpu
  const handleAddProductToCart = (product) => {
    if (role !== 'user') {
      alert('Samo registrovani korisnici mogu dodati proizvode u korpu!');
      return;
    }

    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      // Ažuriraj količinu ako proizvod već postoji
      const updatedCart = cartItems.map(item =>
        item.id === product.id
          ? { ...item, totalQuantity: (item.totalQuantity || 1) + 1 }
          : item
      );
      setCartItems(updatedCart);
    } else {
      // Dodaj novi proizvod u korpu
      setCartItems([...cartItems, {
        ...product,
        totalQuantity: 1
      }]);
    }

    alert(`${product.name} je dodat u korpu!`);
  };

  // Prikaz kartice proizvoda
  const ProductCard = ({ product }) => {
    return (
      <div className="product-card">
        <div className="product-image">{product.image}</div>
        <div className="product-info">
          <h3>{product.name}</h3>
          <p className="product-ingredient">
            <strong>Tip:</strong> {product.ingredientType}
          </p>
          <p className="product-package">
            <strong>Paket:</strong> {product.packageAmount}
          </p>
          <p className="product-price">{product.price.toFixed(2)} RSD</p>
          {role === 'user' && (
            <Button
              label="Dodaj u Korpu"
              onClick={() => handleAddProductToCart(product)}
              variant="success"
              className="add-to-cart-btn"
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="products-page">
      <div className="products-header">
        <h2>Katalog proizvoda</h2>
        <p>Pregledajte naše dostupne proizvode</p>
      </div>

      {/* Pretraga i filtriranje */}
      <div className="products-search">
        <Input
          label="Pretraži proizvode"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Unesite naziv ili tip..."
          name="search"
        />

        <div className="filter-section">
          <label htmlFor="ingredient-filter">Filtriraj po tipu:</label>
          <select
            id="ingredient-filter"
            value={selectedIngredientFilter}
            onChange={(e) => setSelectedIngredientFilter(e.target.value)}
            className="input-field"
          >
            <option value="">-- Svi proizvodi --</option>
            {DUMMY_INGREDIENTS.map((ingredient) => (
              <option key={ingredient} value={ingredient}>
                {ingredient}
              </option>
            ))}
          </select>
        </div>

        <p className="search-results">
          Pronađeno {filteredProducts.length} proizvod{filteredProducts.length !== 1 ? 'a' : ''}
        </p>
      </div>

      {/* Mreža proizvoda */}
      <div className="products-container">
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="no-products">
            <p>Nema pronađenih proizvoda sa vašim kriterijumima pretrage</p>
            {searchTerm && (
              <Button
                label="Očisti pretragu"
                onClick={() => setSearchTerm('')}
                variant="secondary"
              />
            )}
            {selectedIngredientFilter && (
              <Button
                label="Očisti filter"
                onClick={() => setSelectedIngredientFilter('')}
                variant="secondary"
              />
            )}
          </div>
        )}

       
      </div>
    </div>
  );
}
