import "./TopNav.scss";
import React, { useState } from "react";
import FilterIcon from "../../assets/icons/FilterIcon.svg";
import SettingIcon from "../../assets/icons/SettingsIcon.svg";
import Filter from "../Filter/Filter";

export default function TopNav() {
  const [showFilter, setShowFilter] = useState(false);

  const navItems = [
    { id: "setting", icon: SettingIcon, class: "top-nav__buttons--right" },
  ];

  return (
    <>
      <nav className="top-nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={` top-nav__buttons ${item.class}`}
            onClick={item.action}
          >
            <img
              alt={item.id}
              src={item.icon}
              className="top-nav__buttons-img"
            />
          </button>
        ))}
      </nav>
      {showFilter && <Filter setShowFilter={setShowFilter} />}
    </>
  );
}
