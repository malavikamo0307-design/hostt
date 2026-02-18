import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Account Created Successfully!");
    navigate("/login");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Create Hospital Account</h2>

      <form onSubmit={handleSubmit}>
        <input placeholder="Full Name" onChange={(e) => setName(e.target.value)} /><br /><br />
        <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} /><br /><br />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br /><br />
        <button>Create Account</button>
      </form>
    </div>
  );
}

export default CreateAccount;