

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav style={{ padding: "15px", borderBottom: "1px solid #564d4d" }}>
      <Link to="/" style={{ marginRight: "15px" }}>
        Home
      </Link>

      <Link to="/doctors" style={{ marginRight: "15px" }}>
        All Doctors
      </Link>

      <Link to="/about" style={{ marginRight: "15px" }}>
        About
      </Link>

      <Link to="/contact">
        Contact
      </Link>
    </nav>
  );
}
