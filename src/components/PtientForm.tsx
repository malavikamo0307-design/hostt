import { useState } from "react";

type Props = {
  onRegister: (name: string) => void;
};

export default function PatientForm({ onRegister }: Props) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!name.trim()) {
      setError("Patient name is required");
      return;
    }
    setError("");
    onRegister(name);
    setName("");
  };

  return (
    <div>
      <input
        placeholder="Patient Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}
