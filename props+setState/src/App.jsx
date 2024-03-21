import React, { useState } from "react";
import starFilled from "./assets/star-filled.png"
import starEmpty from "./assets/star-empty.png"
import user from "./assets/user.png"

export default function App() {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
  });

  function toggleFavorite() {
    setContact(prevContact => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite
    }));
  }

  return (
    <main>
      <article className="card">
        <img src={user} alt="User" className="card--image" />
        <div className="card--info">
          <FavoriteStar isFilled={contact.isFavorite} onClick={toggleFavorite} />
          <h2 className="card--name">{contact.firstName} {contact.lastName}</h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}

export function FavoriteStar({ isFilled, onClick }) {
  const imageSrc = isFilled ? starFilled : starEmpty;
  return (
    <img src={imageSrc} alt="Favorite" className="card--favorite" onClick={onClick} />
  );
}
