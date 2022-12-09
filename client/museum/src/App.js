import logo from "./logo.svg";
import "./App.css";
import "./Home.css";
import "./Profile.css";
import "./MuseumDetails.css";
import AuthNav from "./components/auth-nav";

// import Navigation from "./components/Navigation";
import UserComponent from "./components/UserComponent";
import MuseumComponent from "./components/MuseumComponent";
import Search from "./components/Search";
import Home from "./components/Home";
import Museum from "./components/Museum";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Navigation ></Navigation> */}
      <div className="container">
        <h1 className="title">MUSEEUM </h1>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/museums">Museums</Link>
            </li>
            <li>
              <Link to="/user">My Profile</Link>
            </li>
          </ul>
          <AuthNav />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/museums" element={<MuseumComponent />} />
          <Route path="/museums/:id" element={<Museum />} />
          <Route path="/search" element={<Search />} />
          <Route path="/user/*" element={<UserComponent />}></Route>
          {/* <Route path="/user/ticket/id/:id/number/:number/price/:price" element={<UserComponent />}></Route> */}
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
