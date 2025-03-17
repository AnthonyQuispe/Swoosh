import "./LandingPage.scss";
import SwooshLogo from "../../assets/logos/SwooshLogo.svg";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const isUserLogin = useSelector((state) => state.auth.isUserLogin);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(isUserLogin ? "/dashboard" : "/login");
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
