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

  // const { name, picture, email } = user;
  const [loadingUser, setUserLoading] = useState(true);
  const [loadingTickets, setLoadingTickets] = useState(true);
  const [tickets, setTickets] = useState([]);
  const [ticketsUpdated, setTicketsUpdated] = useState(false);
  const [ticketCount, setTicketCount] = useState(0);
  // const [clicked, setClicked] = useState(false);
  const [newEmail, setNewEmail] = useState(userDeets.email);

  let ticket = {};
  // let mongoUserID = '';
  // const iconPaths = {
  //   edit: "../assets/edit.png",
  //   check: "../assets/check.png"
  // }

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
        console.log("ticket counter is: ", ticketCount)
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
    const response = await fetch(`http://localhost:8080/tickets/tickets/${userID}`);
    const tickets = await response.json();
    return tickets;
  }

  async function fetchUser() {
    const response = await fetch("http://localhost:8080/profile/getFirstUser");
    const user = await response.json();
    return user;
  }

  // const getImageName = () => clicked ? 'check' : 'edit'

  async function editButtonClicked(newEmail) {
    // setClicked(!clicked);
    // console.log(newEmail);
    // if (clicked) {
    //   const editForm = document.body.querySelector('.editForm');
    //   editForm.classList.toggle('.hidden');
    //   document.body.querySelector('.editButton').setAttribute('src', '../assets/check.png')
    // } else {
    //   // update user email
    // }
    console.log(userDeets)
    let newUser = userDeets;
    newUser.email = newEmail;
    newUser._id = userID;
    
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    };
    await fetch("http://localhost:8080/profile/update", options);
  }

  const userRender = (
    <>
    <div className="userComponent">
      <div className="userCard">
        <div>
          <img className="userImage" src={userDeets.picture} alt="" />
          <p className="userName">{userDeets.nickname.toUpperCase()}</p>
        </div>
        <div className="userContact">
          <p className="userEmail">{userDeets.email}</p>
          <input type="email" name="email"  
            placeholder="Enter new email here"
            onChange={ (e) => setNewEmail(e.target.value) } />
          {/* <img className="editButton" src={require('../assets/edit.png')} alt="" 
            onClick={(e) => editButtonClicked(e.target.value)} /> */}
          <button onClick={() => editButtonClicked(newEmail)}>Submit</button>
        </div>
      </div>
      <div>
        <br />
        <h2>Tickets:</h2>
        <Ticket ticketsUpdated={ticketsUpdated} setTicketsUpdated={setTicketsUpdated} tickets={tickets} />
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
