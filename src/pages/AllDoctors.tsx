import { useState } from "react";

type Disease = "Cardiology" | "Neurology";

export default function AllDoctors() {
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
    <div style={{ padding: "30px" }}>
      <h2>Doctors by Disease</h2>

      {/* Disease Buttons */}
      <div style={{ marginBottom: "20px" }}>
        {Object.keys(doctorsByDisease).map((disease) => (
          <button
            key={disease}
            onClick={() => setSelectedDisease(disease as Disease)}
            style={{
              marginRight: "10px",
              padding: "8px 15px",
              cursor: "pointer",
            }}
          >
            {disease}
          </button>
        ))}
      </div>

      {/* Doctors List */}
      {selectedDisease && (
        <div>
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
