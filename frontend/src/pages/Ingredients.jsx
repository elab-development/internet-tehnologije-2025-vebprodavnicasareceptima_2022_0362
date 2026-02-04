import { useEffect, useMemo, useState } from "react";
import Button from "../components/Button";
import { getProducts } from "../api/products";
import { getMyProducts, addMyProduct, deleteMyProduct } from "../api/myProducts";
import { useAuth } from "../context/AuthContext";

export default function Ingredients({ userProducts = [], setUserProducts = () => {} }) {
  const { user, loading } = useAuth();

  const role = user?.role ?? "guest";
  const isUser = role === "user"; // u backendu je role: guest|user|admin

  const [allProducts, setAllProducts] = useState([]);
  const [myProducts, setMyProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedIngredientFilter, setSelectedIngredientFilter] = useState("");

  // učitaj podatke tek kad znaš da je user učitan
  useEffect(() => {
    if (loading) return;
    if (!isUser) return;

    const mapMyProductsToUserProducts = (items) =>
      items
        .map((item) => item.product)
        .filter(Boolean)
        .map((product) => ({
          ...product,
          ingredientType: product.IngredientType?.name || product.ingredientType || "",
        }));

    async function loadData() {
      try {
        const products = await getProducts();
        const mine = await getMyProducts();
        setAllProducts(products);
        setMyProducts(mine);
        setUserProducts(mapMyProductsToUserProducts(mine));
      } catch (err) {
        console.error(err);
        alert(err?.message || "Greška pri učitavanju podataka iz baze.");
      }
    }

    loadData();
  }, [loading, isUser]);

  const handleAddProduct = async () => {
    if (!selectedProduct) {
      alert("Molimo vas da izaberete proizvod!");
      return;
    }

    try {
      await addMyProduct(Number(selectedProduct), 1);
      const mine = await getMyProducts();
      setMyProducts(mine);
      setUserProducts(
        mine
          .map((item) => item.product)
          .filter(Boolean)
          .map((product) => ({
            ...product,
            ingredientType: product.IngredientType?.name || product.ingredientType || "",
          }))
      );
      setSelectedProduct("");
    } catch (err) {
      console.error(err);
      alert(err?.message || "Greška pri dodavanju proizvoda.");
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await deleteMyProduct(productId);
      const mine = await getMyProducts();
      setMyProducts(mine);
      setUserProducts(
        mine
          .map((item) => item.product)
          .filter(Boolean)
          .map((product) => ({
            ...product,
            ingredientType: product.IngredientType?.name || product.ingredientType || "",
          }))
      );
    } catch (err) {
      console.error(err);
      alert(err?.message || "Greška pri brisanju proizvoda.");
    }
  };

  const ingredientTypes = useMemo(
    () => [...new Set(allProducts.map((p) => p.IngredientType?.name).filter(Boolean))],
    [allProducts]
  );

  const filteredProducts = useMemo(() => {
    if (!selectedIngredientFilter) return allProducts;
    return allProducts.filter((p) => p.IngredientType?.name === selectedIngredientFilter);
  }, [allProducts, selectedIngredientFilter]);

  if (loading) {
    return (
      <div className="ingredients-page">
        <div className="access-denied">
          <h2>Učitavanje...</h2>
        </div>
      </div>
    );
  }

  if (!isUser) {
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
            <label>Filtriraj po tipu sastojka:</label>
            <select
              value={selectedIngredientFilter}
              onChange={(e) => setSelectedIngredientFilter(e.target.value)}
              className="input-field"
            >
              <option value="">-- Svi proizvodi --</option>
              {ingredientTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="ingredient-selector">
            <label>Izaberite proizvod:</label>
            <select
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
              className="input-field"
            >
              <option value="">-- Izaberite proizvod --</option>
              {filteredProducts.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name} - {product.packageAmount} ({Number(product.price).toFixed(2)} RSD)
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
        <h3>Moji Proizvodi ({myProducts.length})</h3>

        {myProducts.length > 0 ? (
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
              {myProducts.map((item) => (
                <tr key={item.productId} className="ingredient-row">
                  <td>{item.product?.name}</td>
                  <td>{item.product?.IngredientType?.name}</td>
                  <td>{item.product?.packageAmount}</td>
                  <td>{Number(item.product?.price || 0).toFixed(2)} RSD</td>
                  <td>
                    <Button
                      label="Obriši"
                      onClick={() => handleDeleteProduct(item.productId)}
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
