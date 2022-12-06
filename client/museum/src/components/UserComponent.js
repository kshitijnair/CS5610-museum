import React from "react";
import Button from "./Button";
import UserUpdateForm from "./UserUpdateForm";
import { useState, useEffect } from "react";
import Ticket from "./Ticket";
import { useLocation } from "react-router-dom";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./loading";

const UserComponent = () => {
  const [user, setUser] = useState(useAuth0());
  const { name, picture, email } = user;
  const [loadingUser, setUserLoading] = useState(true);
  const [loadingTickets, setLoadingTickets] = useState(true);
  const [tickets, setTickets] = useState([]);
  const [ticketsUpdated, setTicketsUpdated] = useState(false);

  let ticket = {};
  const search = useLocation().search;
  if (search.length > 0) {
    ticket.id = new URLSearchParams(search).get("id");
    ticket.number = new URLSearchParams(search).get("number");
    ticket.price = new URLSearchParams(search).get("price");
    ticket.name = new URLSearchParams(search).get("name");
    ticket.date = new URLSearchParams(search).get("date");
    ticket.time = new URLSearchParams(search).get("time");
    console.log("new ticket: ", ticket);
  }

  // get user and adding new tickets (on redirect from MuseumComponent)
  useEffect(() => {
    async function getUser() {
      const response = await fetchUser();
      console.log("user", response);
      setUser(response);
      setUserLoading(false);
      console.log("ticketticketticket", ticket);
      if (search.length > 0) addNewticket(ticket);
    }
    getUser();

    // adding new tickets
    async function addNewticket(ticket) {
      setTicketsUpdated(!ticketsUpdated);
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(ticket),
      };
      const repsonse = await fetch(
        "http://localhost:8080/tickets/purchase",
        options
      );
    }
  }, []);

  // getting tickets
  useEffect(() => {
    async function getTickets() {
      const tickets = await fetchTickets();
      console.log("tickets: ", tickets);
      setTickets(tickets);
      setLoadingTickets(false);
    }
    getTickets();
  }, [ticketsUpdated]);

  async function fetchTickets() {
    const response = await fetch("http://localhost:8080/tickets/tickets");
    const tickets = await response.json();
    return tickets;
  }

  async function fetchUser() {
    const response = await fetch("http://localhost:8080/profile/getFirstUser");
    const user = await response.json();
    return user;
  }

  const userRender = (
    <>
      <div className="userCard">
        <h3>User Details:</h3>
        <div>
          <img className="userImage" src={picture} alt="" />
          <p className="userName">{name}</p>
        </div>
        <div className="userContact">
          <p className="userEmail">{email}</p>
          <p className="userPhone">{user.phone}</p>
        </div>
      </div>
      <div>
        <br />
        <h2>Tickets:</h2>
        <Ticket tickets={tickets} />
      </div>
    </>
  );

  return (
    <>{loadingTickets ? <h1>Loading data...</h1> : userRender}</>
    // <div>
    //   <h4>
    //     <p>Name: {user.name}</p>
    //     <p>Email: {user.email}</p>
    //     <p>Phone: {user.phone}</p>
    //     <p id="id" style={{ display: "none" }}>
    //       {user._id}
    //     </p>
    //   </h4>
    //   <Button text="See First User" onClick={getUser} />
    //   <Button text="Delete Current User" onClick={() => removeUser(user._id)} />
    //   {/* // add form to add user */}
    //   <h5>---------update this user here---------</h5>
    //   <UserUpdateForm id={user} />
    //   <>{userRender}</>
    // </div>
  );
};

// export default UserComponent;

export default withAuthenticationRequired(UserComponent, {
  onRedirecting: () => <Loading />,
});
