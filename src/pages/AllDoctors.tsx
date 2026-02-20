import { useState } from "react";
import type { CSSProperties } from "react";

type Doctor = {
  id: number;
  name: string;
  time: string;
  days: string;
  department: string;
};

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Krishnakumar",
    time: "9:00 AM - 1:00 PM",
    days: "Monday, Wednesday, Friday",
    department: "Cardiology",
  },
  {
    id: 2,
    name: "Dr. Meera",
    time: "2:00 PM - 6:00 PM",
    days: "Tuesday, Thursday",
    department: "Neurology",
  },
  {
    id: 3,
    name: "Dr. Rahul",
    time: "10:00 AM - 4:00 PM",
    days: "Monday - Saturday",
    department: "Cardiology",
  },
  {
    id: 4,
    name: "Dr. Abhijith",
    time: "10:00 AM - 4:00 PM",
    days: "Monday - Saturday",
    department: "Neurology",
  },
  {
    id: 5,
    name: "Dr. Preeti",
    time: "10:00 AM - 1:00 PM",
    days: "Monday - Saturday",
    department: "Cardiology",
  },
];

function AllDoctors() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const filteredDoctors =
    selectedDepartment === "All"
      ? doctors
      : doctors.filter((d) => d.department === selectedDepartment);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Doctors</h2>

        {/* Buttons */}
        <div style={styles.buttonGroup}>
          {["All", "Cardiology", "Neurology"].map((dept) => (
            <button
              key={dept}
              style={
                selectedDepartment === dept
                  ? styles.activeBtn
                  : styles.btn
              }
              onClick={() => setSelectedDepartment(dept)}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Table */}
        <table style={styles.table}>
          <thead>
            <tr style={styles.headerRow}>
              <th style={styles.th}>Doctor Name</th>
              <th style={styles.th}>Time</th>
              <th style={styles.th}>Days</th>
            </tr>
          </thead>
          <tbody>
            {filteredDoctors.map((doc, i) => (
              <tr
                key={doc.id}
                style={i % 2 ? styles.altRow : {}}
                onClick={() => setSelectedDoctor(doc)}
              >
                <td style={styles.td}>{doc.name}</td>
                <td style={styles.td}>{doc.time}</td>
                <td style={styles.td}>{doc.days}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup */}
      {selectedDoctor && (
        <div
          style={styles.overlay}
          onClick={() => setSelectedDoctor(null)}
        >
          <div
            style={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{selectedDoctor.name}</h3>
            <p><b>Department:</b> {selectedDoctor.department}</p>
            <p><b>Time:</b> {selectedDoctor.time}</p>
            <p><b>Days:</b> {selectedDoctor.days}</p>

            <button
              style={styles.closeBtn}
              onClick={() => setSelectedDoctor(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  container: {
    padding: "40px",
    display: "flex",
    justifyContent: "center",
  },
  card: {
    width: "900px",
    padding: "30px",
    background: "#fff",
    borderRadius: "12px",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  btn: {
    padding: "8px 16px",
    cursor: "pointer",
  },
  activeBtn: {
    padding: "8px 16px",
    background: "#4f46e5",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  headerRow: {
    background: "#eef2ff",
  },
  th: {
    padding: "12px",
    textAlign: "left",
  },
  td: {
    padding: "12px",
    cursor: "pointer",
  },
  altRow: {
    background: "#f8fafc",
  },
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    background: "#fff",
    padding: "25px",
    borderRadius: "10px",
    width: "300px",
    textAlign: "center",
  },
  closeBtn: {
    marginTop: "15px",
    padding: "8px 16px",
  },
};

export default AllDoctors;