import React from "react";

function MyButton({ language }) {
  const buttonClasses = {
    HTML: "btn-danger",
    CSS: "btn-primary",
    JavaScript: "btn-warning",
    "Node.js": "btn-success",
    Express: "btn-dark",
    ReactJS: "btn-info",
  };

  return (
    <li>
      <button className={`btn ${buttonClasses[language.title]}`}>
        {language.title}
      </button>
    </li>
  );
}

export default MyButton;
