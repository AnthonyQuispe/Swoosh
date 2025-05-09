import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignUpPage/SignUpPage";
import ForgotPage from "./pages/ForgotPage/ForgotPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import "./styles/_global.scss";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgot" element={<ForgotPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}
