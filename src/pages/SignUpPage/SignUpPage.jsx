import "./SignUpPage.scss";

import { Link } from "react-router-dom";
import GoogleButton from "../../components/GoogleButton/GoogleButton";
import { useState } from "react";

export default function SignUpPage() {
  const [formError, setFormError] = useState(false);

  const handleformSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <main className="signup-page">
      <form className="signup-page__form" onSubmit={handleformSubmit}>
        <h1 className="signup-page__form-title">Create Account</h1>
        {formError && (
          <p className="signup-page__form-description signup-page__form-description--red">
            Please Enter a Valid Email and Password And Try Again
          </p>
        )}
        <input
          placeholder="Username"
          className="signup-page__form-input"
          type="email"
          autoComplete="username"
        />
        <input
          placeholder="Email"
          className="signup-page__form-input"
          type="email"
          autoComplete="email"
        />
        <input
          placeholder="Password"
          className="signup-page__form-input"
          type="password"
          autoComplete="new-password"
        />

        <div className="signup-page__form-checkbox">
          <input
            type="checkbox"
            id="privacy&terms"
            name="privacy&terms"
            value="privacy&terms"
          />
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
              Privacy Policy{" "}
            </Link>
            .
          </label>
        </div>
        <button className="signup-page__form-button" type="submit">
          Sign Up
        </button>
        <GoogleButton />
        <Link className="signup-page__link" to="/login">
          Already have an account?
          <span className="signup-page__link--yellow"> Log In</span>
        </Link>
      </form>
    </main>
  );
}
