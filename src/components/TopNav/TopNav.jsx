import "./TopNav.scss";
import React from "react";
import FilterIcon from "../../assets/icons/FilterIcon.png";
import SettingIcon from "../../assets/icons/SettingsIcon.png";

export default function TopNav() {
  const navItems = [
    { id: "filter", icon: FilterIcon },
    { id: "setting", icon: SettingIcon },
  ];

  return (
    <nav className="top-nav">
      {navItems.map((item) => (
        <button key={item.id} className="top-nav__buttons">
          <img alt={item.id} src={item.icon} className="top-nav__buttons-img" />
        </button>
      ))}
    </nav>
  );
}
