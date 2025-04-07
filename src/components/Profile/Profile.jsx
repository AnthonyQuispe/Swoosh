import "./Profile.scss";
import ProfileImage from "../../assets/icons/ProfileImage.svg";
import { useSelector, useDispatch } from "react-redux";
import { setProfileData } from "../../features/profile/profileSlice";
import { useEffect } from "react";

export default function Profile() {
  const userProfile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setProfileData({
        username: "coolkid",
        name: "Cory Thompson",
        avatar: "url",
        city: "Miami",
        bio: "Hard work...",
        rank: 1,
        stats: {
          followers: 10000,
          following: 100,
          matches: 112,
        },
      })
    );
  }, [dispatch]);

  return (
    <div className="profile">
      <p className="profile__username">@{userProfile.username}</p>
      <div className="profile__avatar">
        <img src={ProfileImage} />
      </div>
      <div className="profile__container">
        <div className="profile__rank">
          <p className="profile__rank-title">Rank</p>
          <div className="profile__rank-number-container">
            <p className="profile__rank-number">{userProfile.rank}</p>
          </div>
          <p className="profile__rank-sport">Basketball</p>
        </div>
        <div className="profile__name-container">
          <p className="profile__name">{userProfile.name}</p>
        </div>
      </div>
      <div className="profile__info">
        <p className="profile__city">{userProfile.city}</p>
        <div className="profile__bio-container">
          <p className="profile__bio">
            "Hard work beats talent when talent doesn't work hard." - Tim Notke
          </p>
        </div>
        <div className="profile__stats">
          <div className="profile__stat">
            <p className="profile__stat-number">
              {userProfile.stats.followers}
            </p>
            <p className="profile__stat-title">followers</p>
          </div>

          <div className="profile__stat">
            <p className="profile__stat-number">
              {userProfile.stats.following}
            </p>
            <p className="profile__stat-title">following</p>
          </div>
          <div className="profile__stat">
            <p className="profile__stat-number">{userProfile.stats.matches}</p>
            <p className="profile__stat-title">Matches</p>
          </div>
        </div>
      </div>
    </div>
  );
}
