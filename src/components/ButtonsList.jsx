import React from "react";
import MyButton from "./MyButton";
import languages from "../assets/languages";

function ButtonsList() {
  return (
    <ul className="list-unstyled d-flex flex-row gap-3 m-5">
      {languages.map((language) => (
        <MyButton key={language.id} language={language} />
      ))}
    </ul>
  );
}

export default ButtonsList;
