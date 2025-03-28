import "./Leaderboard.scss";

export default function Leaderboard() {
  return (
    <div className="leaderboard">
      <div className="leaderboard__podium">
        <div className="leaderboard__podium--first">
          <p className="leaderboard__podium-rank">1</p>
          <div className="leaderboard__podium-img-wrapper">
            <img className="leaderboard__podium-img" />
          </div>
        </div>
        <div className="leaderboard__podium--second">
          <p className="leaderboard__podium-rank">2</p>
          <div className="leaderboard__podium-img-wrapper">
            <img className="leaderboard__podium-img" />
          </div>
        </div>
        <div className="leaderboard__podium--third">
          <p className="leaderboard__podium-rank">3</p>
          <div className="leaderboard__podium-img-wrapper">
            <img className="leaderboard__podium-img" />
          </div>
        </div>
      </div>
      <div className="leaderboard__entries">
        {/* leaderboard rows of users */}
        <div className="leaderboard__entry">
          <p className="leaderboard__entry-rank">1</p>
          <div className="leaderboard__entry-img-wrapper">
            <img className="leaderboard__entry-img" />
          </div>
          <p className="leaderboard__entry-name">name</p>
          <p className="leaderboard__entry-points">points</p>
        </div>
      </div>
    </div>
  );
}
