import { useState, useEffect } from 'react';
import { DUMMY_RECIPES, DUMMY_PRODUCTS, findMissingIngredients, countMissingIngredients, groupRecipesByMissing, getProductsForIngredient } from '../data';
import Input from '../components/Input';
import Button from '../components/Button';

const EMPTY_ARRAY = [];

export default function Recipes({
  role = "guest",
  userProducts = EMPTY_ARRAY,
  cartItems = EMPTY_ARRAY,
  setCartItems = () => {}
}) {
  const [recipes, setRecipes] = useState(DUMMY_RECIPES);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [filteredRecipes, setFilteredRecipes] = useState(DUMMY_RECIPES);
  const [groupedRecipes, setGroupedRecipes] = useState({ canMakeNow: [], missing1to2: [], missingMore: [] });
  const [favoritesLoaded, setFavoritesLoaded] = useState(false);
 
  const FAVORITES_STORAGE_KEY = 'favoriteRecipeIds';
 
  const sortFavoritesFirst = (list) => {
    return [...list].sort((a, b) => (b.isFavorite === true) - (a.isFavorite === true));
  };

  // Ucitaj omiljene iz lokalne memorije
  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (!stored) {
      setFavoritesLoaded(true);
      return;
    }

    let favoriteIds = [];
    try {
      favoriteIds = JSON.parse(stored) || [];
    } catch (e) {
      favoriteIds = [];
    }

    setRecipes((prev) =>
      prev.map((recipe) => ({
        ...recipe,
        isFavorite: favoriteIds.includes(recipe.id)
      }))
    );
    setFavoritesLoaded(true);
  }, []);

  // Sacuvaj omiljene u lokalnu memoriju 
  useEffect(() => {
    if (!favoritesLoaded) return;
    const favoriteIds = recipes.filter((r) => r.isFavorite).map((r) => r.id);
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoriteIds));
  }, [recipes, favoritesLoaded]);

  // useEffect za filtriranje i pretragu recepata
  useEffect(() => {
    let filtered = recipes;

    if (searchTerm) {
      filtered = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    const sortedFiltered = sortFavoritesFirst(filtered);

    setFilteredRecipes(sortedFiltered);
    setGroupedRecipes(groupRecipesByMissing(sortedFiltered, userProducts));
  }, [searchTerm, recipes, userProducts]);

  // Pretraga handler
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Dugme omiljeni
  const handleToggleFavorite = (id) => {
    if (role !== 'user') {
      alert('Only registered users can add favorites!');
      return;
    }
    const updatedRecipes = recipes.map((recipe) =>
      recipe.id === id ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe
    );
    setRecipes(updatedRecipes);
  };

 // Provera da li je sastojak vec u korpi
  const isIngredientInCart = (ingredientName) => {
    return cartItems.some(
      item => item.ingredientType && item.ingredientType.toLowerCase() === ingredientName.toLowerCase()
    );
  };

  // Dodavanje proizvoda u korpu
  const handleAddProductToCart = (product) => {
    if (role !== 'user') {
      alert('Samo registrovani korisnici mogu dodavati proizvode u korpu!');
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

    alert(`${product.name} dodato u korpu!`);
    setSelectedIngredient(null);
  };

  // Prikaz recepta
  const RecipeCard = ({ recipe }) => {
    const missingCount = countMissingIngredients(recipe, userProducts);

    return (
      <div className="recipe-card">

        {/* <div className="recipe-image">{recipe.image}</div> */}

        <div className="recipe-image">
        <img
              src={recipe.image}
              alt={recipe.name}
              className="recipe-img"
         />
        </div>

        <div className="recipe-info">
          <h3>{recipe.name}</h3>
          <p className="recipe-description">{recipe.description}</p>
          <div className="recipe-meta">
            <span className="recipe-difficulty">
              Težina: <strong>{recipe.difficulty}</strong>
            </span>
            <span className="recipe-time">
              Vreme: <strong>{recipe.prepTime}</strong>
            </span>
            <span className={`missing-badge ${missingCount === 0 ? 'can-make' : missingCount <= 2 ? 'partial' : 'missing'}`}>
              {missingCount === 0 ? '✓ Mogu da napravim' : `${missingCount} nedostaje`}
            </span>
          </div>
          <Button
            label="Detalji"
            onClick={() => setSelectedRecipe(recipe)}
            variant="primary"
            className="view-details-btn"
          />
          {role === 'user' && (
            <Button
              label={recipe.isFavorite ? '❤️ Ukloni iz Omiljenih' : '🤍 Dodaj u Omiljene'}
              onClick={() => handleToggleFavorite(recipe.id)}
              variant={recipe.isFavorite ? 'danger' : 'secondary'}
              className="favorite-btn"
            />
          )}
        </div>
      </div>
    );
  };

  // Prikaz sekcije recepata
  const RecipeSection = ({ title, recipes, icon }) => {
    if (recipes.length === 0) return null;

    return (
      <div className="recipe-section">
        <h3>{icon} {title} ({recipes.length})</h3>
        <div className="recipes-grid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    );
  };

  /*if (role === 'admin') {
    return (
      <div className="recipes-page">
        <div className="recipes-header">
          <h2>Our Recipes</h2>
          <p>Admini pristupaju receptima kroz Admin panel</p>
        </div>
      </div>
    );
  }*/

  // Prikaz filtriranog prikaza za goste (svi recepti) i korisnike (sortirano po sastojcima)
  const showSortedView = role === 'user';

  return (
    <div className="recipes-page">
      <div className="recipes-header">
        <h2>Naši recepti</h2>
        <p>{showSortedView ? 'Sortirano po vašim proizvodima' : 'Pogledajte naše recepte'}</p>
      </div>

      {/* Pretraga */}
      <div className="recipes-search">
        <Input
          label="Pretraži recepte"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Unesite naziv recepta..."
          name="search"
        />
        <p className="search-results">
          Pronađeno {filteredRecipes.length} recept{filteredRecipes.length !== 1 ? 'a' : ''}
        </p>
      </div>

      <div className="recipes-container">
        {showSortedView ? (
          <>
            {/* Recepti po nedostajućim sastojcima - samo za registrovane korisnike */}
            <RecipeSection
              title="Mogu da Napravim"
              recipes={groupedRecipes.canMakeNow}
              icon="✓"
            />
            <RecipeSection
              title="Nedostaje 1–2 Sastojka"
              recipes={groupedRecipes.missing1to2}
              icon="◐"
            />
            <RecipeSection
              title="Nedostaje Više od 2 Sastojka"
              recipes={groupedRecipes.missingMore}
              icon="◯"
            />
          </>
        ) : (
          <>
            {/* Za goste prikaz svih recepata */}
            <div className="recipe-section">
              <h3>Svi recepti ({filteredRecipes.length})</h3>
              <div className="recipes-grid">
                {filteredRecipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            </div>
          </>
        )}

        {filteredRecipes.length === 0 && (
          <div className="no-recipes">
            <p>Nema pronađenih recepata za pretragu "{searchTerm}"</p>
            <Button
              label="Očisti pretragu"
              onClick={() => setSearchTerm('')}
              variant="secondary"
            />
          </div>
        )}

        {/* Detalji recepta Modal */}
        {selectedRecipe && !selectedIngredient && (
          <div className="recipe-details-modal">
            <div className="modal-content">
              <button
                className="close-modal"
                onClick={() => setSelectedRecipe(null)}
              >
                ✕
              </button>
              <div className="modal-image">
                <img
                  src={selectedRecipe.image}
                  alt={selectedRecipe.name}
                  className="recipe-img"
                />
              </div>
              <h2>{selectedRecipe.name}</h2>
              <p className="modal-description">{selectedRecipe.description}</p>

              <div className="modal-details">
                <div className="detail-item">
                  <strong>Težina:</strong> {selectedRecipe.difficulty}
                </div>
                <div className="detail-item">
                  <strong>Vreme:</strong> {selectedRecipe.prepTime}
                </div>
                <div className="detail-item">
                  <strong>Ukupno Sastojaka:</strong> {selectedRecipe.ingredients.length}
                </div>
              </div>

              {/* Svi sastojci */}
              <div className="modal-ingredients">
                <h4>Sastojci:</h4>
                <ul>
                  {selectedRecipe.ingredients.map((ingredient, idx) => {
                    const hasProduct = userProducts.some(
                      product => product.ingredientType.toLowerCase() === ingredient.name.toLowerCase()
                    );
                    return (
                      <li key={idx} className={hasProduct ? 'have-ingredient' : 'missing-ingredient'}>
                        <span className={hasProduct ? '✓' : '✗'}></span>
                        {ingredient.name} - {ingredient.quantity}{ingredient.unit}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Nedostajući sastojci */}
              {(() => {
                const missing = findMissingIngredients(selectedRecipe, userProducts);
                const missingNotInCart = missing.filter(ing => !isIngredientInCart(ing.name));
                const missingInCart = missing.filter(ing => isIngredientInCart(ing.name));
                
                return missing.length > 0 && role === 'user' ? (
                  <div className="missing-summary">
                    <h4>Nedostajući Sastojci:</h4>
                    <ul>
                      {missingNotInCart.map((ingredient, idx) => (
                        <li key={idx}>
                          {ingredient.name} - {ingredient.quantity}{ingredient.unit}
                          {role === 'user' && (
                            <Button
                              label="Odaberi proizvod"
                              onClick={() => setSelectedIngredient(ingredient)}
                              variant="secondary"
                              className="select-product-btn"
                            />
                          )}
                        </li>
                      ))}
                      {missingInCart.length > 0 && (
                        <>
                          <li style={{ marginTop: '10px', fontStyle: 'italic', opacity: 0.6 }}>
                            <strong>Već u korpi:</strong>
                          </li>
                          {missingInCart.map((ingredient, idx) => (
                            <li key={`in-cart-${idx}`} style={{ opacity: 0.6 }}>
                              <span style={{ color: 'green' }}>✓</span> {ingredient.name} - {ingredient.quantity}{ingredient.unit}
                            </li>
                          ))}
                        </>
                      )}
                    </ul>
                  </div>
                ) : missing.length === 0 && role === 'user' ? (
                  <div className="can-make-msg">
                    <p>✓ Imate sve sastojke za ovaj recept!</p>
                  </div>
                ) : null;
              })()}

              <div className="modal-actions">
                <Button
                  label="Zatvori"
                  onClick={() => setSelectedRecipe(null)}
                  variant="secondary"
                />
              </div>
            </div>
          </div>
        )}

        {/* Izbor proizvoda modal */}
        {selectedIngredient && (
          <div className="recipe-details-modal">
            <div className="modal-content">
              <button
                className="close-modal"
                onClick={() => setSelectedIngredient(null)}
              >
                ✕
              </button>
              <h2>Izaberite proizvod za: {selectedIngredient.name}</h2>
              
              <div className="products-grid">
                {getProductsForIngredient(selectedIngredient.name).map((product) => (
                  <div key={product.id} className="product-card">
                    <div className="product-image">{product.image}</div>
                    <div className="product-info">
                      <h4>{product.name}</h4>
                      <p><strong>{product.packageAmount}</strong></p>
                      <p className="product-price">{product.price.toFixed(2)} RSD</p>
                      <Button
                        label="Dodaj u Korpu"
                        onClick={() => {
                          handleAddProductToCart(product);
                        }}
                        variant="primary"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="modal-back-button">
                <Button
                  label="Nazad"
                  onClick={() => setSelectedIngredient(null)}
                  variant="secondary"
                  style={{ width: '100%' }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
