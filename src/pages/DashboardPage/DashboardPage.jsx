import React from "react";
import "./DashboardPage.scss";
import Logo from "../../assets/logos/SwooshWords.svg";
import BottomNav from "../../components/BottomNav/BottomNav";
import TopNav from "../../components/TopNav/TopNav";
import PickupGameMap from "../../components/PickupGameMap/PickupGameMap";

export default function DashboardPage() {
  return (
    <main className="dashboard-page">
      <img src={Logo} alt="Swoosh Logo" className="dashboard-page__logo" />
      <div className="dashboard-page__container">
        <TopNav />
        <PickupGameMap />
        <BottomNav />
      </div>
    </main>
  );
}
