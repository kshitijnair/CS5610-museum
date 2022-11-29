import React from "react";
import Header from "./Header";
import Button from "./Button";
import List from "./List";
import { useState } from "react";

const MuseumComponent = () => {
  const [museumList, setList] = useState([]);

  async function getMuseums() {
    console.log("getting museums");
    const response = await fetch(
      "https://museum-server-ae4u.onrender.com/home/museums"
    );
    const museumList = await response.json();
    console.log(museumList);
    setList(museumList);
  }

  return (
    <div>
      <Header title="Museums" />
      <Button text="Get All Museums" onClick={getMuseums} />
      <List list={museumList} />
    </div>
  );
};

export default MuseumComponent;
