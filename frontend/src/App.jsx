import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Products from "./pages/Products";
import "./styles/main.css";
import { useAuth } from "./context/AuthContext";
 
export default function App() {
  const { user } = useAuth();
  const role = user?.role ?? "guest";
 
  return (
<>
<Navbar role={role} userName={user?.name || user?.username || ""} />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/recipes" element={<Recipes role={role} />} />
<Route path="/products" element={<Products role={role} />} />
<Route path="*" element={<Home />} />
</Routes>
</>
  );
}