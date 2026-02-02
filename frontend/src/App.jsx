import { useState } from "react";
import Home from "./pages/Home";
import "./styles/main.css";

export default function App() {
  const [role, setRole] = useState("guest");
  return <Home role={role} onRoleChange={setRole} />;
}
