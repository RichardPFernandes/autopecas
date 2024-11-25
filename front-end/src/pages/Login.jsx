import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  
     const togglePasswordVisibility = () => {
       setShowPassword(!showPassword);
     };
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Bem-vindo!</h1>
        <form className="login-form">
          <input
            type="email"
            placeholder="Digite seu email"
            className="login-input"
          />
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha"
              className="login-input password-input"
            />
            <span
              className="password-toggle"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </span>
          </div>
          <button className="login-button">Entrar</button>
        </form>
        <div className="login-footer">
          <p>Não tem uma conta?</p>
          <a href="/signup" className="register-link">
            Cadastre-se
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
