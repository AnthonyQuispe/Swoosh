import "./ForgotPage.scss";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "../../firebase/FirebaseForget";
import { useState } from "react";

export default function ForgotPage() {
  const [formError, setFormError] = useState(false);
  const [email, setEmail] = useState("");

  const handleformSubmit = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(email, setEmail)
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <main className="forgot-page">
      <form className="forgot-page__form" onSubmit={handleformSubmit}>
        <h1 className="forgot-page__form-title">
          Oops you Forgot Your Password
        </h1>
        <p className="forgot-page__form-description">
          Lets get that fixed for you !
        </p>
        {formError && (
          <p className="forgot-page__form-description forgot-page__form-description--red">
            Please Enter a Valid Email and Password And Try Again
          </p>
        )}
        <p className="forgot-page__form-description">
          Enter the email you used to create your account
        </p>
        <input
          placeholder="Email"
          className="forgot-page__form-input"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="forgot-page__form-button" type="submit">
          Send
        </button>
        <Link className="forgot-page__link" to="/login">
          Go Back
        </Link>
      </form>
    </main>
  );
}
