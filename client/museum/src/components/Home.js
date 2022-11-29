import React from "react";
import TopMuseums from "./TopMuseums";

export default function Home() {
  return (
    <>
      <div className="homePanel">
        <p className="home-p">Welcome to -name- Museum</p>
        <p className="home-p">Top</p>
      </div>
      <TopMuseums />
    </>
  );
}
