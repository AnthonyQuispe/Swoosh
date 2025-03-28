import "./Profile.scss";

export default function Profile() {
  return (
    <div className="profile">
      <p className="profile__username">@CoolKid</p>
      <div className="profile__avatar">
        <img />
      </div>
      <div className="profile__container">
        <div className="profile__rank">
          <p className="profile__rank-title">Rank</p>
          <div className="profile__rank-number-container">
            <p className="profile__rank-number">1</p>
          </div>
          <p className="profile__rank-sport">Basketball</p>
        </div>
        <div className="profile__name-container">
          <p className="profile__name">Cory Thompson</p>
        </div>
      </div>
      <div className="profile__info">
        <p className="profile__city">Miami</p>
        <div className="profile__bio-container">
          <p className="profile__bio">
            "Hard work beats talent when talent doesn't work hard." - Tim Notke
          </p>
        </div>
        <div className="profile__stats">
          <div className="profile__stat">
            <p className="profile__stat-number">10,000</p>
            <p className="profile__stat-title">followers</p>
          </div>

          <div className="profile__stat">
            <p className="profile__stat-number">100</p>
            <p className="profile__stat-title">following</p>
          </div>
        </div>
        <div className="profile__stats">
          <div className="profile__stat">
            <p className="profile__stat-number">112</p>
            <p className="profile__stat-title">games played</p>
          </div>
        </div>
      </div>
    </div>
  );
}
