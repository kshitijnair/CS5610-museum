import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TopMuseums = () => {
  const [isLoading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function getTopMuseums() {
      const data = await fetchTopMuseums();
      // const topMuseums = data.json();\
      console.log("data----", data);
      const top = Object.entries(data)
        .slice(0, 3)
        .map((item) => item[1]);
      setList(top);
      setLoading(false);
    }
    getTopMuseums();
  }, []);

  async function fetchTopMuseums() {
    const response = await fetch(
      "https://museum-server-ae4u.onrender.com/home/museums"
    );
    const museumList = await response.json();
    return museumList;
  }

  function selectMuseum(key) {
    console.log("key is:", key);
    navigate(`/museums/${key}`);
  }

  const lists = (
    <div>
      {list.map((val, key) => {
        const id = val._id;
        return (
          <div
            className="museumCard"
            key={id}
            onClick={() => {
              selectMuseum(id);
            }}
          >
            <img className="museumImg" src="" alt="" />
            <p className="museumName">{val.name}</p>
            <p className="museumLocation">Located in: {val.location}</p>
          </div>
        );
      })}
    </div>
  );

  return <>{isLoading ? <h1>Loading...</h1> : lists}</>;
};

export default TopMuseums;
