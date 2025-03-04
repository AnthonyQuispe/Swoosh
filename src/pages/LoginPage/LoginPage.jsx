import "./LoginPage.scss";
import { Link } from "react-router-dom";
import GoogleButton from "../../components/GoogleButton/GoogleButton";
import { useState } from "react";

export default function LoginPage() {
  const [formError, setFormError] = useState(false);

  const handleformSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <main className="login-page">
      <form className="login-page__form" onSubmit={handleformSubmit}>
        <h1 className="login-page__form-title">Welcome</h1>
        <p className="login-page__form-description">
          Enter your credentials to continue
        </p>
        {formError && (
          <p className="login-page__form-description login-page__form-description--red">
            Please Enter a Valid Email and Password And Try Again
          </p>
        )}
        <input
          placeholder="Email"
          className="login-page__form-input"
          type="email"
          autoComplete="email"
        />
        <input
          placeholder="Password"
          className="login-page__form-input"
          type="password"
          autoComplete="current-password"
        />
        <Link className="login-page__link login-page__link--green" to="/forgot">
          Forgot password?
        </Link>
        <button className="login-page__form-button" type="submit">
          Log In
        </button>
        <GoogleButton />
        <Link className="login-page__link" to="/signup">
          Don't have an account?
          <span className="login-page__link--yellow"> Sign Up</span>
        </Link>
      </form>
    </main>
  );
}
