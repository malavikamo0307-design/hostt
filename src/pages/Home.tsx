


// import { useState } from "react";

// type Disease = "Cardiology" | "Neurology";

// export default function Home() {
//   const doctorsByDisease: Record<Disease, { id: number; name: string }[]> = {
//     Cardiology: [
//       { id: 1, name: "Dr. Arun" },
//       { id: 2, name: "Dr. Meera" },
//     ],
//     Neurology: [
//       { id: 3, name: "Dr. Raj" },
//       { id: 4, name: "Dr. Anjali" },
//     ],
//   };

//   const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Select Disease</h2>

//       <button onClick={() => setSelectedDisease("Cardiology")}>
//         Cardiology
//       </button>

//       <button
//         onClick={() => setSelectedDisease("Neurology")}
//         style={{ marginLeft: "10px" }}
//       >
//         Neurology
//       </button>

//       {selectedDisease && (
//         <div style={{ marginTop: "20px" }}>
//           <h3>{selectedDisease} Doctors</h3>
//           <ul>
//             {doctorsByDisease[selectedDisease].map((doc) => (
//               <li key={doc.id}>{doc.name}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }


// const Home = () => {
//   return <h1 style={{ color: "green" }}>HOME PAGE WORKING</h1>;
// };

// export default Home;
import React from "react";

const Home: React.FC = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* ===== HEADER ===== */}
      <header style={styles.header}>
        <h2>City Care Hospital</h2>
        <nav>
          <a href="#" style={styles.link}>Home</a>
          <a href="#" style={styles.link}>Doctors</a>
          <a href="#" style={styles.link}>Services</a>
          <a href="#" style={styles.link}>Contact</a>
        </nav>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section style={styles.hero}>
        <h1>Welcome to City Care Hospital</h1>
        <p>Compassion, Care & Advanced Medical Services</p>
        <button style={styles.button}>Book Appointment</button>
      </section>

      {/* ===== SERVICES ===== */}
      <section style={styles.services}>
        <h2>Our Medical Services</h2>

        <div style={styles.serviceContainer}>
          <div style={styles.serviceBox}>
            <h3>Qualified Doctors</h3>
            <p>Experienced specialists available for all departments.</p>
          </div>

          <div style={styles.serviceBox}>
            <h3>24/7 Emergency</h3>
            <p>Emergency services available day and night.</p>
          </div>

          <div style={styles.serviceBox}>
            <h3>Modern Equipment</h3>
            <p>Advanced medical technology for accurate treatment.</p>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={styles.footer}>
        <p>© 2026 City Care Hospital | All Rights Reserved</p>
      </footer>

    </div>
  );
};

export default Home;

/* ===== STYLES ===== */
const styles: { [key: string]: React.CSSProperties } = {
  header: {
    backgroundColor: "#00695c",
    color: "white",
    padding: "20px",
    textAlign: "center"
  },
  link: {
    color: "white",
    margin: "0 15px",
    textDecoration: "none",
    fontWeight: "bold"
  },
  hero: {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  button: {
    marginTop: "20px",
    padding: "12px 25px",
    backgroundColor: "#e53935",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px"
  },
  services: {
    padding: "40px",
    backgroundColor: "white",
    textAlign: "center"
  },
  serviceContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap"
  },
  serviceBox: {
    width: "250px",
    padding: "20px",
    backgroundColor: "#e0f2f1",
    borderRadius: "8px"
  },
  footer: {
    backgroundColor: "#00695c",
    color: "white",
    textAlign: "center",
    padding: "15px",
    marginTop: "20px"
  }
};