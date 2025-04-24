import react from "react";
import "./Setting.scss";

export default function Setting() {
  return (
    <div className="setting-container">
      <figure>
        <img alt="profile image" />
        <button className="upload-btn">Upload Image</button>
      </figure>
      <form className="profile-form">
        <div className="form-group">
          <label className="form-label">Name</label>
          <input className="form-input" type="text" />
        </div>
        <div className="form-group">
          <label className="form-label">Username</label>
          <input className="form-input" type="text" />
        </div>
        <div className="form-group">
          <label className="form-label">Bio</label>
          <input className="form-input" type="text" />
        </div>
      </form>
    </div>
  );
}
