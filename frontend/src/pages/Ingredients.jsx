import { useState } from "react";
import { DUMMY_PRODUCTS, DUMMY_INGREDIENTS } from "../data";
import Button from "../components/Button";

export default function Ingredients({ role, userProducts, setUserProducts }) {
  const [newProduct, setNewProduct] = useState({ selectedProduct: "" });
  const [selectedIngredientFilter, setSelectedIngredientFilter] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    if (!newProduct.selectedProduct) {
      alert("Molimo vas da izaberete proizvod!");
      return;
    }

    const productData = DUMMY_PRODUCTS.find(
      (p) => p.id.toString() === newProduct.selectedProduct
    );

    if (!productData) {
      alert("Proizvod nije pronađen!");
      return;
    }

    const alreadyExists = userProducts.find((p) => p.id === productData.id);
    if (alreadyExists) {
      alert("Već imate ovaj proizvod!");
      return;
    }

    setUserProducts([...userProducts, productData]);
    setNewProduct({ selectedProduct: "" });
  };

  const handleDeleteProduct = (id) => {
    setUserProducts(userProducts.filter((p) => p.id !== id));
  };

  const getProductsForFilter = () => {
    if (!selectedIngredientFilter) return DUMMY_PRODUCTS;
    return DUMMY_PRODUCTS.filter(
      (p) => p.ingredientType === selectedIngredientFilter
    );
  };

  if (role !== "user") {
    return (
      <div className="ingredients-page">
        <div className="access-denied">
          <h2>Pristup odbijen!</h2>
          <p>Samo registrovani korisnici mogu da upravljaju svojim proizvodima.</p>
          <p>Molimo vas da se prijavite da biste nastavili.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="ingredients-page">
      <div className="ingredients-header">
        <h2>Moji Proizvodi</h2>
        <p>Upravljajte vašom kolekcijom proizvoda</p>
      </div>

      <div className="add-ingredient-form">
        <h3>Dodaj proizvod koji imate</h3>

        <div className="form-group">
          <div className="ingredient-selector">
            <label htmlFor="ingredient-filter">Filtriraj po tipu sastojka:</label>
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

          <div className="ingredient-selector">
            <label htmlFor="product-select">Izaberite proizvod:</label>
            <select
              id="product-select"
              name="selectedProduct"
              value={newProduct.selectedProduct}
              onChange={handleInputChange}
              className="input-field"
            >
              <option value="">-- Izaberite proizvod --</option>
              {getProductsForFilter().map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name} - {product.packageAmount} ({product.price.toFixed(2)} RSD)
                </option>
              ))}
            </select>
          </div>

          <Button
            label="Dodaj u Moje Proizvode"
            onClick={handleAddProduct}
            variant="primary"
          />
        </div>
      </div>

      <div className="ingredients-list">
        <h3>Moji Proizvodi ({userProducts.length})</h3>

        {userProducts.length > 0 ? (
          <table className="ingredients-table">
            <thead>
              <tr>
                <th>Naziv</th>
                <th>Tip Sastojka</th>
                <th>Paket</th>
                <th>Cena</th>
                <th>Akcija</th>
              </tr>
            </thead>
            <tbody>
              {userProducts.map((product) => (
                <tr key={product.id} className="ingredient-row">
                  <td>{product.name}</td>
                  <td>{product.ingredientType}</td>
                  <td>{product.packageAmount}</td>
                  <td>{product.price.toFixed(2)} RSD</td>
                  <td>
                    <Button
                      label="Obriši"
                      onClick={() => handleDeleteProduct(product.id)}
                      variant="danger"
                      className="delete-btn"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-ingredients">
            Nemate proizvoda. Dodajte neke da vidite koje recepte možete proveriti!
          </p>
        )}
      </div>
    </div>
  );
}