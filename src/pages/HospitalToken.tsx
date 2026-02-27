// import { useState } from "react";
// // import "./HospitalToken.css";

// function HospitalToken() {
//   const [form, setForm] = useState({
//     patientName: "",
//     age: "",
//     phone: "",
//     department: "",
//     doctor: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     alert("Token Generated!");
//     console.log(form);
//   };

//   return (
//     <div className="token-page">
//       <h1>Hospital Token Form</h1>

//       <form onSubmit={handleSubmit} className="token-form">
//         <input
//           type="text"
//           name="patientName"
//           placeholder="Patient Name"
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="number"
//           name="age"
//           placeholder="Age"
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="tel"
//           name="phone"
//           placeholder="Phone Number"
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="text"
//           name="department"
//           placeholder="Department"
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="text"
//           name="doctor"
//           placeholder="Doctor Name"
//           onChange={handleChange}
//           required
//         />

//         <button type="submit">Generate Token</button>
//       </form>
//     </div>
//   );
// }

// export default HospitalToken;


import React, { useState } from "react";

const Token: React.FC = () => {
  const [currentToken, setCurrentToken] = useState<number>(0);
  const [lastToken, setLastToken] = useState<number>(0);

  // Generate New Token
  const generateToken = () => {
    setLastToken((prev) => prev + 1);
  };

  // Call Next Patient
  const callNext = () => {
    if (currentToken < lastToken) {
      setCurrentToken((prev) => prev + 1);
    }
  };

  // Reset System
  const resetTokens = () => {
    setCurrentToken(0);
    setLastToken(0);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      
      {/* ===== HEADER ===== */}
      <header style={styles.header}>
        <h2>City Care Hospital - Token System</h2>
      </header>

      {/* ===== TOKEN DISPLAY ===== */}
      <section style={styles.section}>
        <h1>Current Token</h1>
        <div style={styles.tokenBox}>{currentToken}</div>

        <h3>Last Issued Token: {lastToken}</h3>
      </section>

      {/* ===== BUTTONS ===== */}
      <section style={styles.buttonSection}>
        <button style={styles.generateBtn} onClick={generateToken}>
          Generate Token
        </button>

        <button style={styles.callBtn} onClick={callNext}>
          Call Next
        </button>

        <button style={styles.resetBtn} onClick={resetTokens}>
          Reset
        </button>
      </section>

    </div>
  );
};

export default Token;

/* ===== STYLES ===== */
const styles: { [key: string]: React.CSSProperties } = {
  header: {
    backgroundColor: "#00695c",
    color: "white",
    padding: "20px"
  },
  section: {
    padding: "40px"
  },
  tokenBox: {
    fontSize: "60px",
    fontWeight: "bold",
    color: "#050505",
    margin: "20px 0"
  },
  buttonSection: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap"
  },
  generateBtn: {
    padding: "12px 20px",
    backgroundColor: "#75818c",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },
  callBtn: {
    padding: "12px 20px",
    backgroundColor: "#7a8390",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },
  resetBtn: {
    padding: "12px 20px",
    backgroundColor: "#656e80",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};