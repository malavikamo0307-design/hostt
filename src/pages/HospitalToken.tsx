import { useState } from "react";
// import "./HospitalToken.css";

function HospitalToken() {
  const [form, setForm] = useState({
    patientName: "",
    age: "",
    phone: "",
    department: "",
    doctor: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Token Generated!");
    console.log(form);
  };

  return (
    <div className="token-page">
      <h1>Hospital Token Form</h1>

      <form onSubmit={handleSubmit} className="token-form">
        <input
          type="text"
          name="patientName"
          placeholder="Patient Name"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="doctor"
          placeholder="Doctor Name"
          onChange={handleChange}
          required
        />

        <button type="submit">Generate Token</button>
      </form>
    </div>
  );
}

export default HospitalToken;


