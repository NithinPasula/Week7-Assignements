import React from "react";
import "./App.css";
import userPhoto from "./assets/user-photo.jpg";

function App() {
  return (
    <>
      <CardComponent />
    </>
  );
}

function CardComponent() {
  return (
    <div className="outer-card">
      <div className="background-img"></div>
      <div className="round-photo">
        <img src={userPhoto} alt="User" />
      </div>
      <div className="background-content">
        <div>Nithin Pasula 21</div>
        <div>India</div>
      </div>
      <div className="social_media_content">
        <div>
          <strong>80K</strong>
          <span>Followers</span>
        </div>
        <div>
          <strong>803K</strong>
          <span>Likes</span>
        </div>
        <div>
          <strong>1.4K</strong>
          <span>Photos</span>
        </div>
      </div>
    </div>
  );
}

export default App;
