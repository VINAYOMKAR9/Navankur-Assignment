import { createContext,useContext,useState } from "react";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const login = async (email, password) => {
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      setToken(data.token);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider
export {useAuth}