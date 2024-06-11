/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Signup({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);
    const user = {
      email,
      password,
      city,
      name,
      age,
    };

    const response = await fetch(
      "https://party-planner-backend-iw93.onrender.com/api/users/signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    }

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(data));
      setIsLoading(false);
      setUser(data);
    }
    console.log("SENDING THIS FORM: ", user);
  };
  console.log(typeof age);
  return (
    <div className="background_signUp">
      <form className="signup" onSubmit={handleSubmit}>
        <h3 style={{ fontSize: "24px", margin: "15px 0" }}>Sign up</h3>

        <label>name: </label>
        <input onChange={(e) => setName(e.target.value)} value={name} />

        <label>email: </label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label>password: </label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <label>city: </label>
        <input
          type="string"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />

        <label>age: </label>
        <input
          type="number"
          onChange={(e) => setAge(Number(e.target.value))}
          value={age}
        />

        <button>Sign up</button>
        {error && <div className="error">{error}</div>}
      </form>
      {isLoading ? <h2>Loading...</h2> : null}
    </div>
  );
}
