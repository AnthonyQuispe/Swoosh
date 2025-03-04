import "./LandingPage.scss";
import SwooshLogo from "../../assets/logos/SwooshLogo.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isUserLogin) {
        navigate("/home");
      } else {
        navigate("/login");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isUserLogin, navigate]);

  return (
    <main className="landing-page">
      <div className="landing-page__img-container ">
        <img
          className="landing-page__img "
          src={SwooshLogo}
          alt="Swoosh Logo"
        />
      </div>
    </main>
  );
}
