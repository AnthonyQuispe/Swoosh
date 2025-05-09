import "./TopNav.scss";
import React, { useState } from "react";
import FilterIcon from "../../assets/icons/FilterIcon.svg";
import RefreshIcon from "../../assets/icons/RefreshIcon.svg";
import Filter from "../Filter/Filter";

export default function TopNav() {
  const [showFilter, setShowFilter] = useState(false);

  const navItems = [
    {
      id: "filter",
      icon: FilterIcon,
      class: "top-nav__buttons--left",
      action: () => setShowFilter(!showFilter),
    },
    { id: "refresh", icon: RefreshIcon, class: "top-nav__buttons--right" },
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
