import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const MuseumComponent = () => {
  const [museumList, setList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [searchTerm] = useState(["name"]);

  useEffect(() => {
    async function getMuseums() {
      console.log("museum component hook");
      const museums = await fetchMuseums();
      setList(museums);
      setLoading(false);
    }
    getMuseums();
  }, []);

  async function fetchMuseums() {
    console.log("fetching museums...");
    const response = await fetch(
      "https://museum-server-ae4u.onrender.com/home/museums"
    );
    const museumList = await response.json();
    return museumList;
  }

  function search(items) {
    console.log(items);
    return items.filter((item) => {
      return searchTerm.some((foundItem) => {
        return (
          item[foundItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }
  const navigate = useNavigate();

  function selectMuseum(key) {
    console.log("key is:", key);
    navigate(`/museums/${key}`);
  }

  const renderMuseum = (
    <div>
      <div>
        <input
          className="searchBar"
          type="text"
          placeholder="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>
      {search(museumList).map((val, key) => {
        const id = val._id;
        return (
          <div
            className="museumItem"
            key={id}
            onClick={() => {
              selectMuseum(id);
            }}>
                <img className="museumItemImage" src={val.image} alt="" />

              <div className="museumItemInfo">
                <p className="museumItemName">{val.name}</p>
                <p className="museumItemLocation">{val.location}</p>
              </div>

            </div>
          </div>
        );
      })}
      <Outlet />
    </div>
  );

  return <>{isLoading ? <h1>Loading....</h1> : renderMuseum}</>;
};

export default MuseumComponent;
