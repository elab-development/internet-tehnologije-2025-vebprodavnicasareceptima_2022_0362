import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useAuth } from "../context/AuthContext";
 
export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
 
  // uloga: guest | user | admin
  const role = user?.role ?? "guest";
  const userName = user?.username ?? user?.email ?? "";
 
  const handleLogout = () => {
    logout();
    navigate("/");
  };
 
  const handleNavigation = (path) => {
    navigate(path);
  };
 
  return (
<nav className="navbar">
<div className={`navbar-container ${role === "guest" ? "navbar-guest" : ""}`}>
<div className="navbar-brand">
<h1 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            🍳 RecipeStore
</h1>
</div>
 
        <div className="navbar-menu">
<Button
            label="Početna"
            onClick={() => handleNavigation("/")}
            variant="secondary"
            className="nav-link"
          />
 
          {/* Recepti/Proizvodi: gost + korisnik */}
          {role !== "admin" && (
<Button
              label="Recepti"
              onClick={() => handleNavigation("/recipes")}
              variant="secondary"
              className="nav-link"
            />
          )}
 
          {role !== "admin" && (
<Button
              label="Proizvodi"
              onClick={() => handleNavigation("/products")}
              variant="secondary"
              className="nav-link"
            />
          )}
 
          {/* Korisnik-only */}
          {role === "user" && (
<>
<Button
                label="Sastojci"
                onClick={() => handleNavigation("/ingredients")}
                variant="secondary"
                className="nav-link"
              />
<Button
                label="Korpa"
                onClick={() => handleNavigation("/cart")}
                variant="secondary"
                className="nav-link"
              />
</>
          )}
 
          {/* Admin-only */}
          {role === "admin" && (
<Button
              label="Admin panel"
              onClick={() => handleNavigation("/admin")}
              variant="secondary"
              className="nav-link"
            />
          )}
</div>
 
        <div className="navbar-user">
<span className="user-role">
            Uloga:{" "}
<strong>
              {role === "guest" ? "Gost" : role === "user" ? "Korisnik" : "Admin"}
</strong>
</span>
 
          {role !== "guest" && <span className="user-name">{userName}</span>}
 
          {role !== "guest" && (
<Button
              label="Odjava"
              onClick={handleLogout}
              variant="danger"
              className="nav-logout"
            />
          )}
</div>
</div>
</nav>
  );
}