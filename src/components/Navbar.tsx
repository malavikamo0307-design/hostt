import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav style={styles.navbar}>
            <div style={styles.logo}>
                <span style={styles.logoIcon}></span> HospitalPlus
            </div>
            <div style={styles.menu}>
                <Link to="/" style={{ ...styles.link, ...(isActive("/") ? styles.activeLink : {}) }}>Home</Link>
                <Link to="/doctors" style={{ ...styles.link, ...(isActive("/doctors") ? styles.activeLink : {}) }}>All Doctors</Link>
                <Link to="/about" style={{ ...styles.link, ...(isActive("/about") ? styles.activeLink : {}) }}>About</Link>
                <Link to="/contact" style={{ ...styles.link, ...(isActive("/contact") ? styles.activeLink : {}) }}>Contact</Link>
            </div>
            <div style={styles.actions}>
                <Link to="/login" style={styles.loginBtn}>Login</Link>
                <Link to="/create-account" style={styles.createBtn}>Create Account</Link>
            </div>
        </nav>
    );
}

const styles = {
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(10px)",
        position: "fixed" as const,   // ✅ Fix 1
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
    },
    logo: {
        fontSize: "1.5rem",
        fontHeight: "700",
        color: "#5b6cff",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontWeight: "bold",
    },
    logoIcon: {                        // ✅ Fix 2 - added missing logoIcon
        fontSize: "24px",
        marginRight: "4px",
    },
    menu: {
        display: "flex",
        gap: "30px",
    },
    link: {
        fontSize: "0.95rem",
        fontWeight: "500",
        color: "#64748b",
        transition: "color 0.3s ease",
    },
    activeLink: {
        color: "#5b6cff",
    },
    actions: {
        display: "flex",
        gap: "15px",
        alignItems: "center",
    },
    loginBtn: {
        fontSize: "0.95rem",
        fontWeight: "600",
        color: "#1e293b",
    },
    createBtn: {
        background: "#5b6cff",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "25px",
        fontSize: "0.9rem",
        fontWeight: "600",
        boxShadow: "0 4px 15px rgba(91, 108, 255, 0.3)",
        transition: "transform 0.3s ease, background 0.3s ease",
    },
    table: {
        borderCollapse: "collapse" as const,  // ✅ Fix 3
    },
    th: {
        backgroundColor: "#4CAF50",
        color: "white",
    },
    td: {
        padding: "8px",
        textAlign: "left" as const,           // ✅ Fix 3
    },
};

export default Navbar;