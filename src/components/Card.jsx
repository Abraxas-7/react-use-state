import React from "react";

function Card({ language }) {
  if (!language) {
    return (
      <div className="card p-3 m-5">
        <h3>Nessun linguaggio selezionato</h3>
      </div>
    );
  }
  return (
    <div className="card p-3 m-5">
      <h3>{language.title}</h3>
      <p>{language.description}</p>
    </div>
  );
}

export default Card;
