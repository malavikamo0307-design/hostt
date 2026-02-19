// function Home() {
//   return (
//     <div>
//       <h1>Hospital Token System</h1>
//       <Link to="/token">
//         <button>Generate Token</button>
//       </Link>
//     </div>
//   );
// }

// export default Home;


// import { Link } from "react-router-dom";

// <Link to="/token">
//   <button>Generate Token</button>
// </Link>
// import { useEffect, useState } from "react";
// import Header from "../components/Header";
// import PatientForm from "../components/DoctorCard";
// import QueueList from "../components/QueueList";

// type Patient = {
//   token: number;
//   name: string;
// };

// export default function Home() {
//   const [queue, setQueue] = useState<Patient[]>([]);
//   const [token, setToken] = useState(1);

//   const registerPatient = (name: string) => {
//     setQueue([...queue, { token, name }]);
//     setToken(token + 1);
//   };

//   const nextPatient = () => {
//     setQueue(queue.slice(1));
//   };

//   // Save to localStorage
//   useEffect(() => {
//     localStorage.setItem("queue", JSON.stringify(queue));
//   }, [queue]);

//   // Load from localStorage
//   useEffect(() => {
//     const saved = localStorage.getItem("queue");
//     if (saved) setQueue(JSON.parse(saved));
//   }, []);

//   return (
//     <div>
//       <Header />

//       <PatientForm onRegister={registerPatient} />

//       <button onClick={nextPatient}>Next Patient</button>

//       <QueueList queue={queue} />
//     </div>
//   );
// }



import { useState } from "react";

type Disease = "Cardiology" | "Neurology";

export default function Home() {
  const doctorsByDisease: Record<Disease, { id: number; name: string }[]> = {
    Cardiology: [
      { id: 1, name: "Dr. Arun" },
      { id: 2, name: "Dr. Meera" },
    ],
    Neurology: [
      { id: 3, name: "Dr. Raj" },
      { id: 4, name: "Dr. Anjali" },
    ],
  };

  const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Select Disease</h2>

      <button onClick={() => setSelectedDisease("Cardiology")}>
        Cardiology
      </button>

      <button
        onClick={() => setSelectedDisease("Neurology")}
        style={{ marginLeft: "10px" }}
      >
        Neurology
      </button>

      {selectedDisease && (
        <div style={{ marginTop: "20px" }}>
          <h3>{selectedDisease} Doctors</h3>
          <ul>
            {doctorsByDisease[selectedDisease].map((doc) => (
              <li key={doc.id}>{doc.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
