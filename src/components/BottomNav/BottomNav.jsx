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
import PickupGameMap from "../../components/PickupGameMap/PickupGameMap";
import Profile from "../../components/Profile/Profile";

export default function BottomNav({ setActiveComponent }) {
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    {
      id: "home",
      icon: HomeIcon,
      activeIcon: HomeIconActive,
      component: <PickupGameMap />,
    },
    {
      id: "profile",
      icon: ProfileIcon,
      activeIcon: ProfileIconActive,
      component: <Profile />,
    },
    {
      id: "leaderboard",
      icon: LeaderboardIcon,
      activeIcon: LeaderboardIconActive,
      component: <h1>Leaderboard</h1>,
    },
    {
      id: "chat",
      icon: ChatIcon,
      activeIcon: ChatIconActive,
      component: <h1>Chat</h1>,
    },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`bottom-nav__buttons ${
            activeTab === item.id ? "bottom-nav__buttons--active" : ""
          }`}
          onClick={() => {
            setActiveTab(item.id);
            setActiveComponent(item.component);
          }}
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
