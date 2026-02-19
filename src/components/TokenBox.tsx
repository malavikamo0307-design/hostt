import { useState } from "react";

function TokenBox() {
  const [name, setName] = useState("");
  const [queue, setQueue] = useState([]);

  const addPatient = () => {
    if (!name.trim()) {
      alert("Enter patient name");
      return;
    }
    setQueue([...queue, name]);
    setName("");
  };

  const nextPatient = () => {
    if (queue.length === 0) {
      alert("No patients in queue");
      return;
    }
    alert("Now Consulting: " + queue[0]);
    setQueue(queue.slice(1));
  };

  return (
    <div className="box">
      <h2>Hospital Token System</h2>

      <input
        type="text"
        placeholder="Patient Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addPatient}>Register</button>
      <button onClick={nextPatient}>Next Patient</button>

      <h3>Waiting List:</h3>
      <ul>
        {queue.map((patient, index) => (
          <li key={index}>
            Token {index + 1} - {patient}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TokenBox;
