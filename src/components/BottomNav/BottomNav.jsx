import "./BottomNav.scss";
import React, { useState } from "react";
import ChatIcon from "../../assets/icons/ChatIcon.svg";
import ChatIconActive from "../../assets/icons/ChatIconActive.svg";
import HomeIcon from "../../assets/icons/HomeIcon.png";
import HomeIconActive from "../../assets/icons/HomeIconActive.svg";
import LeaderboardIcon from "../../assets/icons/Leaderboard.png";
import LeaderboardIconActive from "../../assets/icons/LeaderboardActive.png";
import ProfileIcon from "../../assets/icons/ProfileIcon.png";
import ProfileIconActive from "../../assets/icons/ProfileIconActive.png";

export default function BottomNav() {
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { id: "home", icon: HomeIcon, activeIcon: HomeIconActive },
    { id: "profile", icon: ProfileIcon, activeIcon: ProfileIconActive },
    {
      id: "leaderboard",
      icon: LeaderboardIcon,
      activeIcon: LeaderboardIconActive,
    },
    { id: "chat", icon: ChatIcon, activeIcon: ChatIconActive },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`bottom-nav__buttons ${
            activeTab === item.id ? "bottom-nav__buttons--active" : ""
          }`}
          onClick={() => setActiveTab(item.id)}
        >
          <img
            src={activeTab === item.id ? item.activeIcon : item.icon}
            className="bottom-nav__buttons-img"
            alt={item.id}
          />
        </button>
      ))}
    </nav>
  );
}
