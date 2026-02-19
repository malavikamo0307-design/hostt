import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("Home");

  const menuItems = ["Home", "All Doctors", "About", "Contact"];

  return (
    <nav className="navbar">
      <div className="logo">Hospital</div>

      <div className="menu">
        {menuItems.map((item) => (
          <a
            key={item}
            href="#"
            className={active === item ? "active" : ""}
            onClick={() => setActive(item)}
          >
            {item}
          </a>
        ))}
      </div>

      <button className="btn">Create Account</button>
    </nav>
  );
}

export default Navbar;
