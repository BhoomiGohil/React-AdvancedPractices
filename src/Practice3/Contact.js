import React from "react";

export default function Contact(props) {
  return (
    <div className="contact-card">
      <img src={`Images/${props.image}`} />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src="Icons/phone-icon.png" />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src="Icons/mail-icon.png" />
        <p>{props.email}</p>
      </div>
    </div>
  );
}
