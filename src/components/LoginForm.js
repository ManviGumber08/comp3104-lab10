import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/authSlice";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import jwtUtils from "../jwt/jwtUtils";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Call useNavigate directly
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (username && password) {
      // Simulate JWT Login
      const token = jwtUtils.generateToken(username);
      console.log("JWT Token generated:", token);
      dispatch(loginSuccess());
      navigate("/dashboard"); // Use navigate here directly
    } else {
      alert("Please enter valid credentials");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginForm;
