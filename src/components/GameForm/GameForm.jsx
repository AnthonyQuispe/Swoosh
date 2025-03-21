import React, { useState } from "react";
import "./GameForm.scss";
import CloseButton from "../../assets/icons/CloseIcon.svg";

export default function GameForm({ onAddGame, onClose }) {
  const [formData, setFormData] = useState({
    sport: "",
    startDate: "",
    startTime: "",
    gameName: "",
    players: "",
  });

  const gameModes = {
    Basketball: ["1v1", "3v3", "5v5 (Full Game)", "First to 21", "HORSE"],
    Football: [
      "Flag Football",
      "2v2",
      "4v4",
      "Touch Football",
      "11v11 (Full Game)",
    ],
    Soccer: ["3v3", "5v5", "7v7", "First to 3 Goals", "11v11 (Full Game)"],
    Pickleball: ["Singles", "Doubles", "First to 11"],
    Tennis: ["Singles", "Doubles", "First to 6 Games"],
  };

  const getMaxPlayers = (sport, gameMode) => {
    const gamePlayerLimits = {
      Basketball: { "1v1": 2, "3v3": 6, "5v5 (Full Game)": 10 },
      Football: { "2v2": 4, "4v4": 8, "11v11 (Full Game)": 22 },
      Soccer: { "3v3": 6, "5v5": 10, "7v7": 14, "11v11 (Full Game)": 22 },
      Pickleball: { Singles: 2, Doubles: 4 },
      Tennis: { Singles: 2, Doubles: 4 },
    };
    return gamePlayerLimits[sport]?.[gameMode] || null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "sport" ? { gameName: "", players: "" } : {}),
      ...(name === "gameName"
        ? {
            players: getMaxPlayers(formData.sport, value)
              ? getMaxPlayers(formData.sport, value) - 1
              : "",
          }
        : {}),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddGame(formData);
    onClose();
  };

  return (
    <div className="game-form">
      <div className="game-form__container">
        <h2 className="game-form__title">Add Pickup Game</h2>
        <form onSubmit={handleSubmit} className="game-form__container">
          <div className="game-form__containers">
            <label className="game-form__label">Sport :</label>
            <select
              name="sport"
              value={formData.sport}
              onChange={handleChange}
              required
              className="game-form__select"
            >
              <option value="">Select</option>
              <option value="Basketball">Basketball</option>
              <option value="Football">Football</option>
              <option value="Soccer">Soccer</option>
              <option value="Pickleball">Pickleball</option>
              <option value="Tennis">Tennis</option>
            </select>
          </div>{" "}
          <div className="game-form__containers">
            <label className="game-form__label">Game Mode</label>
            <select
              name="gameName"
              value={formData.gameName}
              onChange={handleChange}
              required
              className="game-form__select"
              disabled={!formData.sport}
            >
              <option value="">Select a game mode</option>
              {gameModes[formData.sport]?.map((mode) => (
                <option key={mode} value={mode}>
                  {mode}
                </option>
              ))}
            </select>
          </div>
          <div className="game-form__containers">
            <label className="game-form__label">Players Needed</label>
            <select
              name="players"
              value={formData.players}
              onChange={handleChange}
              required
              className="game-form__select"
              disabled={!formData.gameName}
            >
              <option value="">Select players</option>
              {(() => {
                const maxPlayers = getMaxPlayers(
                  formData.sport,
                  formData.gameName
                );
                if (!maxPlayers || maxPlayers <= 1) return null; // Prevents invalid array length

                return [...Array(maxPlayers - 1)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ));
              })()}
            </select>
          </div>
          <div className="game-form__containers">
            <label className="game-form__label">Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
              className="game-form__input"
              pattern="\d{4}-\d{2}-\d{2}"
              placeholder="YYYY-MM-DD"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
            />
          </div>
          <div className="game-form__containers">
            <label className="game-form__label">Time</label>
            <input
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              required
              className="game-form__input"
              pattern="[0-9]{2}:[0-9]{2}"
              placeholder="HH:MM"
              onFocus={(e) => (e.target.type = "time")}
              onBlur={(e) => (e.target.type = "text")}
            />
          </div>
          <button className="game-form__button" type="submit">
            Add Game
          </button>
          <button
            className="game-form__button-cancel"
            type="button"
            onClick={onClose}
          >
            <img src={CloseButton} />
          </button>
        </form>
      </div>
    </div>
  );
}
