import React from "react";
import Header from "./Header";
import Button from "./Button";
import List from "./List";
import { useState, useEffect } from "react";

const MuseumComponent = () => {
  const [museumList, setList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [searchTerm] = useState(["name"]);

  useEffect(() => {
    async function getMuseums() {
      console.log("museum component hook")
      const museums = await fetchMuseums();
      setList(museums);
      setLoading(false);
    }
    getMuseums();
  }, [])

  async function fetchMuseums() {
    console.log("fetching museums...");
    const response = await fetch(
      "https://museum-server-ae4u.onrender.com/home/museums"
    );
    const museumList = await response.json();
    return museumList;
  }

  function search(items) {
    return items.filter((item) => {
      return searchTerm.some((foundItem) => {
        console.log("found is:", item[foundItem])
        return (
          item[foundItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        )
      })
    })
  }

  

  const renderMuseum = (
    <div>
      <div>
      <input
          type="text"
          placeholder="search..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
      />
      </div>
    {/* <List list={museumList} /> */}
    {/* gotta add component for museum list results */}
      {search(museumList).map((val, key) => {
        return (
            <div className="box" key={key}>
                <p>{val.name}</p>
                <p>==={val.location}</p>
            </div>
        );
      })}
  </div>
  )

  return (<>{ isLoading ? <h1>Loading....</h1> : renderMuseum }</>)
};

export default MuseumComponent;
