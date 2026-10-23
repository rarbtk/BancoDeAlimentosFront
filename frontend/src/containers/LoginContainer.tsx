import { useState } from "react";
import LoginComponent from "../components/LoginComponent";

function LoginContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);

    // Más adelante:
    // loginService(email, password)
  };

  return (
    <LoginComponent
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      handleLogin={handleLogin}
    />
  );
}

export default LoginContainer;