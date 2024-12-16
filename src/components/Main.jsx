import React, { useState } from "react";
import ButtonsList from "./ButtonsList";
import Card from "./Card";

function Main() {
  const [selectedLanguage, setSelectedLanguage] = useState(false);

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="container">
      <div>
        <ButtonsList onLanguageClick={handleLanguageClick} />
      </div>
      <div>
        <Card language={selectedLanguage} />
      </div>
    </div>
  );
}

export default Main;
