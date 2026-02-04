import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Products from "./pages/Products";
import Ingredients from "./pages/Ingredients";
import "./styles/main.css";
import { useAuth } from "./context/AuthContext";

export default function App() {
  const { user } = useAuth();
  const role = user?.role ?? "guest";

  // Moji proizvodi - Ingredients
  const [userProducts, setUserProducts] = useState([]);

  return (
    <>
      <Navbar role={role} userName={user?.name || user?.username || ""} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes role={role} />} />
        <Route path="/products" element={<Products role={role} />} />

        <Route
          path="/ingredients"
          element={
            <Ingredients
              role={role}
              userProducts={userProducts}
              setUserProducts={setUserProducts}
            />
          }
        />

        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
