import React, { useState } from "react";
import "./DashboardPage.scss";
import Logo from "../../assets/logos/SwooshWords.svg";
import BottomNav from "../../components/BottomNav/BottomNav";
import PickupGameMap from "../../components/PickupGameMap/PickupGameMap";

export default function DashboardPage() {
  const [activeComponent, setActiveComponent] = useState(<PickupGameMap />);
  return (
    <main className="dashboard-page">
      <img src={Logo} alt="Swoosh Logo" className="dashboard-page__logo" />
      <div className="dashboard-page__container">
        {activeComponent}
        <BottomNav setActiveComponent={setActiveComponent} />
      </div>
    </main>
  );
}
