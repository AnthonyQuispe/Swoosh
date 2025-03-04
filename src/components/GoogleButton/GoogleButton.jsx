import "./GoogleButton.scss";
import GoogleIcon from "../../assets/icons/GoogleIcon.png";

export default function GoogleButton() {
  return (
    <button className="google-button">
      <img alt="google Icon" src={GoogleIcon} className="google__img" />
      <p className="google__description">Sign in with Google</p>
    </button>
  );
}
