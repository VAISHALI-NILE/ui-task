import React from "react";
import "./Card.css";

function Card({ name, role, email, profile }) {
  return (
    <div className="card">
      <img className="prof-img" src={profile} alt="User Profile" />
      <div className="card-info">
        <h3>
          {name} <br />
          <span style={{ color: "gray", fontSize: "15px" }}>{role}</span>
        </h3>

        <p>
          <span style={{ color: "gray" }}>Email </span>&nbsp; {email}
        </p>
        <br />
        <div className="button-group">
          <button className="block btn">Block</button>
          <button className="details btn">Details</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
