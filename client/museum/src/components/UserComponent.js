import React from "react";
import { useState, useEffect } from "react";
import Ticket from "./Ticket";
import { useLocation } from "react-router-dom";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./loading";

const UserComponent = () => {
  const [user, setUser] = useState(useAuth0());
  const userDeets = useAuth0().user;
  const sub = userDeets.sub
  const userID = sub.slice(6, sub.length);
  console.log('USERID IS: ', userID)
  console.log(userDeets)
  const { name, picture, email } = user;
  const [loadingUser, setUserLoading] = useState(true);
  const [loadingTickets, setLoadingTickets] = useState(true);
  const [tickets, setTickets] = useState([]);
  const [ticketsUpdated, setTicketsUpdated] = useState(false);
  const [ticketCount, setTicketCount] = useState(0);

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

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(userDeets),
      };
      const repsonse = await fetch(
        "http://localhost:8080/profile/addUser",
        options
      );

      if (search.length > 0 && ticketCount < 1) {
        addNewticket(ticket)
        setTicketCount(ticketCount + 1);
      };
    }
    getUser();

    // adding new tickets
    async function addNewticket(ticket) {
      setTicketsUpdated(!ticketsUpdated);
      ticket.user = userID;
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
      const tickets = await fetchTickets(userID);
      console.log("tickets: ", tickets);
      setTickets(tickets);
      setLoadingTickets(false);
    }
    getTickets();
  }, [ticketsUpdated]);

  async function fetchTickets(userID) {
    console.log("FETCHING TICKETS FOR USER: ", userID)
    const params = {
      userID: userID
    }
    const response = await fetch(`http://localhost:8080/tickets/tickets/${userID}`);
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
    <div className="userComponent">
      <div className="userCard">
        {/* <h3>User Details:</h3> */}
        <div>
          <img className="userImage" src={userDeets.picture} alt="" />
          <p className="userName">{userDeets.nickname}</p>
        </div>
        <div className="userContact">
          <p className="userEmail">{userDeets.email}</p>
          <p className="userPhone">{userDeets.email}</p>
        </div>
      </div>
      <div>
        <br />
        <h2>Tickets:</h2>
        <Ticket tickets={tickets} />
      </div>
      </div>
    </>
  );

  return (
    <>{loadingTickets ? <h1>Loading data...</h1> : userRender}</>
  );
};

export default withAuthenticationRequired(UserComponent, {
  onRedirecting: () => <Loading />,
});
