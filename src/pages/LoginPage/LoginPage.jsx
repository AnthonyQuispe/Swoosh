import "./LoginPage.scss";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "../../components/GoogleButton/GoogleButton";
import { FirebaseLogin } from "../../firebase/FirebaseLogin";
import { useState } from "react";

export default function LoginPage() {
  const [formError, setFormError] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await FirebaseLogin(email, password, navigate);
    } catch (error) {
      console.error(error);
      setFormError(true);
    }
  };
  return (
    <main className="login-page">
      <form className="login-page__form" onSubmit={handleFormSubmit}>
        <div className="login-page__form-container">
          <h1 className="login-page__form-title">Welcome</h1>
          <p className="login-page__form-description">
            Enter your credentials to continue
          </p>
        </div>
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          className="login-page__form-input"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
