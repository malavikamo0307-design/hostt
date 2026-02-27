// import { useState } from "react";

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const savedUser = localStorage.getItem("username");
//     const savedPass = localStorage.getItem("password");

//     setTimeout(() => {
//       setLoading(false);
//       if (username === savedUser && password === savedPass) {
//         navigate("/dashboard");
//       } else {
//         alert("Invalid Login. Please check your credentials.");
//       }
//     }, 800);
//   };

//   return (
//     <div style={styles.container}>
//       <div className="glass-card" style={styles.card}>
//         <div style={styles.header}>
//           <h2 style={styles.title}>Provider Login</h2>
//           <p style={styles.subtitle}>Access your hospital dashboard</p>
//         </div>

//         <form onSubmit={handleLogin} style={styles.form}>
//           <div style={styles.inputGroup}>
//             <label style={styles.label}>Username</label>
//             <input
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               style={styles.input}
//             />
//           </div>

//           <div style={styles.inputGroup}>
//             <label style={styles.label}>Password</label>
//             <input
//               type="password"
//               placeholder="••••••••"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               style={styles.input}
//             />
//           </div>

//           <button
//             type="submit"
//             style={{
//               ...styles.button,
//               backgroundColor: loading ? "#a5b4fc" : "#5b6cff",
//               cursor: loading ? "not-allowed" : "pointer"
//             }}
//             disabled={loading}
//           >
//             {loading ? "Authenticating..." : "Login"}
//           </button>
//         </form>

//         <p style={styles.footer}>
//           New to HospitalPlus? <span style={styles.link} onClick={() => navigate("/create-account")}>Create account</span>
//         </p>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     minHeight: "80vh",
//     padding: "20px",
//   },
//   card: {
//     width: "100%",
//     maxWidth: "400px",
//     padding: "40px",
//     textAlign: "center",
//   },
//   header: {
//     marginBottom: "30px",
//   },
//   title: {
//     fontSize: "1.8rem",
//     color: "#1e293b",
//     marginBottom: "8px",
//   },
//   subtitle: {
//     color: "#64748b",
//     fontSize: "0.95rem",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "20px",
//     textAlign: "left",
//   },
//   inputGroup: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "8px",
//   },
//   label: {
//     fontSize: "0.85rem",
//     fontWeight: "600",
//     color: "#475569",
//     marginLeft: "4px",
//   },
//   button: {
//     color: "#fff",
//     padding: "14px",
//     fontSize: "1rem",
//     fontWeight: "600",
//     marginTop: "10px",
//     boxShadow: "0 4px 15px rgba(91, 108, 255, 0.2)",
//   },
//   footer: {
//     marginTop: "25px",
//     fontSize: "0.9rem",
//     color: "#64748b",
//   },
//   link: {
//     color: "#5b6cff",
//     fontWeight: "600",
//     cursor: "pointer",
//     marginLeft: "5px",
//   },
// };

// export default Login;
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const savedUser = localStorage.getItem("username");
//     const savedPass = localStorage.getItem("password");

//     setTimeout(() => {
//       setLoading(false);
//       if (username === savedUser && password === savedPass) {
//         navigate("/dashboard");
//       } else {
//         alert("Invalid Login. Please check your credentials.");
//       }
//     }, 800);
//   };

//   return (
//     <div style={styles.container}>
//       <div className="glass-card" style={styles.card}>
//         <div style={styles.header}>
//           <h2 style={styles.title}>Provider Login</h2>
//           <p style={styles.subtitle}>Access your hospital dashboard</p>
//         </div>

//         <form onSubmit={handleLogin} style={styles.form}>
//           <div style={styles.inputGroup}>
//             <label style={styles.label}>Username</label>
//             <input
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               style={styles.input}
//             />
//           </div>

//           <div style={styles.inputGroup}>
//             <label style={styles.label}>Password</label>
//             <input
//               type="password"
//               placeholder="••••••••"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               style={styles.input}
//             />
//           </div>

//           <button
//             type="submit"
//             style={{
//               ...styles.button,
//               backgroundColor: loading ? "#a5b4fc" : "#5b6cff",
//               cursor: loading ? "not-allowed" : "pointer"
//             }}
//             disabled={loading}
//           >
//             {loading ? "Authenticating..." : "Login"}
//           </button>
//         </form>

//         <p style={styles.footer}>
//           New to HospitalPlus? <span style={styles.link} onClick={() => navigate("/create-account")}>Create account</span>
//         </p>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     minHeight: "80vh",
//     padding: "20px",
//   },
//   card: {
//     width: "100%",
//     maxWidth: "400px",
//     padding: "40px",
//     textAlign: "center",
//   },
//   header: {
//     marginBottom: "30px",
//   },
//   title: {
//     fontSize: "1.8rem",
//     color: "#1e293b",
//     marginBottom: "8px",
//   },
//   subtitle: {
//     color: "#64748b",
//     fontSize: "0.95rem",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "20px",
//     textAlign: "left",
//   },
//   inputGroup: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "8px",
//   },
//   label: {
//     fontSize: "0.85rem",
//     fontWeight: "600",
//     color: "#475569",
//     marginLeft: "4px",
//   },
//   button: {
//     color: "#fff",
//     padding: "14px",
//     fontSize: "1rem",
//     fontWeight: "600",
//     marginTop: "10px",
//     boxShadow: "0 4px 15px rgba(91, 108, 255, 0.2)",
//   },
//   footer: {
//     marginTop: "25px",
//     fontSize: "0.9rem",
//     color: "#64748b",
//   },
//   link: {
//     color: "#5b6cff",
//     fontWeight: "600",
//     cursor: "pointer",
//     marginLeft: "5px",
//   },
// };

// export default Login;