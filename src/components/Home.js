import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  const name = "Liz"; // Replace with your name
  const city = "New York"; // Replace with your city

  const headerStyle = {
    color: "firebrick"
  };

  return (
    <div id="home">
      <h1 style={headerStyle}>{`${name} is a Web Developer from ${city}`}</h1>
    </div>
  );
}

export default Home;
