import React from "react";
import TopMuseums from "./TopMuseums";

export default function Home() {
  return (
    <>
      <div className="homePanel">
        <p className="home-p">Welcome to our Museum Selection</p>
        <p className="home-p">Popular Museums</p>
      </div>
      <TopMuseums />
    </>
  );
}
