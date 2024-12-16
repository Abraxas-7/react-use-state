import React from "react";

function MyButton({ language, onClick }) {
  const buttonClasses = {
    HTML: "btn-danger",
    CSS: "btn-primary",
    JavaScript: "btn-warning text-white",
    "Node.js": "btn-success",
    Express: "btn-dark",
    ReactJS: "btn-info text-white",
  };

  return (
    <button
      className={`btn ${buttonClasses[language.title]}`}
      onClick={() => onClick(language)}
    >
      {language.title}
    </button>
  );
}

export default MyButton;
