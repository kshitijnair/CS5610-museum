import logo from "./logo.svg";
import "./App.css";
import { getUser, removeUser, updateUser, getMuseums } from "./methods";

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import UserComponent from "./components/UserComponent";
import MuseumComponent from "./components/MuseumComponent";
import Details from "./components/Details";
import Search from "./components/Search";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  console.log(window.location);

  return (
    <>
      <Navigation name="Navneet"></Navigation>
      <div className="container">
        <h1>Museum </h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/search" element={<Search />} />
        </Routes>

        <Header title="Users" />
        <UserComponent />
        <MuseumComponent />
      </div>
    </>
  );
}

export default App;

/**
 * users - current user, update(form), delete
 * museums - view all
 */
