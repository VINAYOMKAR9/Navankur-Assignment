import React, { useState, useEffect, createContext, useContext, useNavigate } from "react";


const Login = () => {
    const [email, setEmail] = useState("eve.holt@reqres.in");
    const [password, setPassword] = useState("cityslicka");
    const { login } = useAuth();
    const navigate = useNavigate();
  
    const handleLogin = async () => {
      await login(email, password);
      navigate("/");
    };


  
    return (
      <div>
        <h2>Login</h2>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  };
  
  export default Login