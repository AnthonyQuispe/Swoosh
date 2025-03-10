import "./SignUpPage.scss";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "../../components/GoogleButton/GoogleButton";
import { useState } from "react";
import { FirebaseSignup } from "../../firebase/FirebaseSignup";

export default function SignUpPage() {
  const [formError, setFormError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await FirebaseSignup(username, email, password, navigate);
    } catch (error) {
      setFormError(true);
    }
  };

  return (
    <main className="signup-page">
      <form className="signup-page__form" onSubmit={handleFormSubmit}>
        <h1 className="signup-page__form-title">Create Account</h1>
        {formError && (
          <p className="signup-page__form-description signup-page__form-description--red">
            Please Enter a Valid Email and Password And Try Again
          </p>
        )}
        <input
          placeholder="Username"
          className="signup-page__form-input"
          type="text" // Changed from "email" to "text"
          autoComplete="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Email"
          className="signup-page__form-input"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          className="signup-page__form-input"
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="signup-page__form-checkbox">
          <input type="checkbox" id="privacy&terms" name="privacy&terms" />
          <label
            htmlFor="privacy&terms"
            className="signup-page__form-checkbox-label"
          >
            I've read and agree with the{" "}
            <Link className="signup-page__form-checkbox-link">
              Terms and Conditions
            </Link>{" "}
            and the{" "}
            <Link className="signup-page__form-checkbox-link">
              Privacy Policy
            </Link>
            .
          </label>
        </div>
        <button className="signup-page__form-button" type="submit">
          Sign Up
        </button>
        <GoogleButton />
        <Link className="signup-page__link" to="/login">
          Already have an account?{" "}
          <span className="signup-page__link--yellow">Log In</span>
        </Link>
      </form>
    </main>
  );
}
