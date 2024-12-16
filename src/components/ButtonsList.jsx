import React from "react";
import MyButton from "./MyButton";
import languages from "../assets/languages";

function ButtonsList({ onLanguageClick }) {
  return (
    <ul className="list-unstyled d-flex flex-row">
      {languages.map((language) => (
        <li key={language.id} className="mx-2">
          <MyButton language={language} onClick={onLanguageClick} />
        </li>
      ))}
    </ul>
  );
}

export default ButtonsList;
