import logo from "./logo.svg";
import "./App.css";
import { getUser, removeUser, updateUser, getMuseums } from "./methods";

// import Navigation from "./components/Navigation";
import Header from "./components/Header";
import UserComponent from "./components/UserComponent";
import MuseumComponent from "./components/MuseumComponent";
import Details from "./components/Details";
import Search from "./components/Search";
import Home from "./components/Home";
import { Route, Routes, Link } from "react-router-dom";

function App() {

  return (
    <>
      {/* <Navigation ></Navigation> */}
      <div className="container">
        <h1 className="title">Museum </h1>
        <nav className="nav">
          <ul>
            <li>
              <Link to = "/">Home</Link>
            </li>
            <li>
              <Link to = '/museums'>Museums</Link>
            </li>
            <li>
              <Link to = '/user'>Profile</Link>
            </li>
          </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/museums" element={<MuseumComponent />} />
            <Route path="/search" element={<Search />} />
            <Route path="/user" element={<UserComponent />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

/**
 * users - current user, update(form), delete
 * museums - view all
 */
