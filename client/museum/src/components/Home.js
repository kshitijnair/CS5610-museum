import React from "react";
import TopMuseums from "./TopMuseums";

export default function Home() {
  return (
    <>
      <div className="homePanel">
        <h2 className="home-h2">Welcome to our Museum Selection</h2>
        <h3 className="home-h3">Popular</h3>
      </div>
      <TopMuseums />
    </>
  );
}
