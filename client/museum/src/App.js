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
import { Route, Routes, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./components/profile";
import Loading from "./components/loading";

function App() {
  console.log(window.location);

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navigation name="Navneet"></Navigation>
      <div className="container">
        <h1>Museum </h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        <Header title="Users" />
        <UserComponent />
        <MuseumComponent />
      </div>
      {/* <div className="container flex-grow-1">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/external-api" component={ExternalApi} />
        </Switch>
      </div> */}
    </>
  );
}

export default App;

/**
 * users - current user, update(form), delete
 * museums - view all
 */
