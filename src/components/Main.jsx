import React from "react";

import ButtonsList from "./ButtonsList";
import Card from "./Card";
function Main() {
  return (
    <>
      <div className="container">
        <div>
          <ButtonsList />
        </div>

        <div>
          <Card />
        </div>
      </div>
    </>
  );
}

export default Main;
