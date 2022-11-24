import React from "react";
import Header from "./Header";
import Button from "./Button";
import List from "./List";
import { getMuseums } from "../methods";
import { useState } from "react";

const MuseumComponent = () => {
  const [museumList, setList] = useState([
    // {
    //   id: 1,
    //   name: 'MET'
    // },
    // {
    //   id: 2,
    //   name: "Unit London"
    // },
    // {
    //   id: 3,
    //   name: 'Vancouver Art Gallery'
    // }
  ]);

  async function getMuseums() {
    // setList(museumList);
    let museumList = {};
    const response = await fetch(
      "https://museum-server-ae4u.onrender.com/home/museums"
    );
    const data = await response.json();
    console.log(data);
    setList(data);
    console.log("getting museums");
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
