import React from "react";
import "./login-style.css";

export default function Login({
  valueInput,
  handleClickLogin,
  handleChangeInput,
}) {
  return (
    <div className="animate__animated animate__heartBeat">
      <div className="box-login">
        <div className="header">
          <img className="twitter-logo" src="twitter.png" alt="twitter" />
        </div>
        <h1>Inicia sesión en Twitter</h1>
        <div className="social-media-login-box">
          <button className="social-media-button">Google</button>
          <button className="social-media-button">Apple ID</button>
        </div>
        <div className="box-login-divider">
          <div className="line-divider"></div>
          <span className="letter-divider"> O </span>
          <div className="line-divider"></div>
        </div>
        <form className="login-form">
          <input
            onChange={handleChangeInput}
            type="text"
            autoComplete="off"
            className="input-login-form"
            placeholder=" telefono,correo electronico"
            id="myInput"
            value={valueInput}
          />
          <button
            onClick={handleClickLogin}
            className="button-login"
            type="button"
          >
            Siguiente
          </button>
          <button className="button-forgot-pw">
            ¿Olvidaste tu contraseña?
          </button>
        </form>
        <p className="letter">
          ¿No tienes una cuenta?
          <a href="">Registrate</a>
        </p>
      </div>
    </div>
  );
}
