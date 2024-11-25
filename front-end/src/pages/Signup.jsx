import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1 className="signup-title">Crie sua conta</h1>
        <form className="signup-form">
          <input
            type="text"
            placeholder="Digite seu nome"
            className="signup-input"
          />
          <input
            type="email"
            placeholder="Digite seu email"
            className="signup-input"
          />
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha"
              className="signup-input password-input"
            />
            <span
              className="password-toggle"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </span>
          </div>
          <input
            type="password"
            placeholder="Confirme sua senha"
            className="signup-input"
          />
          <button className="signup-button">Cadastrar</button>
        </form>
        <div className="signup-footer">
          <p>Já tem uma conta?</p>
          <a href="/login" className="login-link">
            Entre aqui
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
