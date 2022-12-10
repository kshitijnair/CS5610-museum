import React from "react";
import TopMuseums from "./TopMuseums";

export default function Home() {
  return (
    <>
      <div className="homePanel">
        <h2 className="home-p">Welcome to our Museum Selection</h2>
        <h3 className="home-p">Popular Museums</h3>
      </div>
      <TopMuseums />
    </>
  );
}
