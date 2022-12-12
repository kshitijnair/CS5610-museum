import React, { useState } from "react";

const Ticket = ({ ticketsUpdated, setTicketsUpdated, tickets }) => {
  const [date, setDate] = useState("");
  console.log(tickets);
  tickets.map((ticket) => {
    console.log(ticket);
  });

  const deleteBooking = async (id) => {
    setTicketsUpdated(!ticketsUpdated)
    console.log("ID IS: ---------", id);
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    };
    const response = await fetch(
      "http://localhost:8080/tickets/delete",
      options
    );
  };

  const updateTicket = async (ticket) => {
    setTicketsUpdated(!ticketsUpdated)
    ticket.date = date;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticket),
    };
    const response = await fetch(
      "http://localhost:8080/tickets/update",
      options
    );
  };

  function ParseDMS(coordinates) {
    console.log(typeof coordinates)
    const split = coordinates.split('°');
    console.log(split[1][1])
    if(split[1][1] === `S` || split[1][1] === `W`)
      return '-' + split[0];
    return split[0];
  }

  const ticketRender = (
    <ul className="ticketList">
      {tickets.map((ticket) => (
        <li key={ticket._id}>
          <div className="ticketCard">
            <div className="ticketSummary">
              <img className="ticketImage" src="" alt="" />
              <p className="bookingID">Booking Number #{ticket.id.toString().toUpperCase().slice(0, 5)}</p>
              <div>
                <p className="ticketMuseumName">{ticket.name}</p>
                <p>People attending : {ticket.number}</p>
                <p>Date: {ticket.date}</p>
                <p>Time: {ticket.time}</p>
              </div>
              <p>Total: ${ticket.price * ticket.number}</p>
              {/* <p>{ParseDMS(ticket.latitude)}</p>
              <p>{ParseDMS(ticket.longitude)}</p> */}
            </div>
            <button className="directionBtn" onClick={() => { window.open(`https://www.google.com/maps/search/?api=1&query=${ParseDMS(ticket.latitude)}%2C${ParseDMS(ticket.longitude)}`)}}>Get Directions</button>
            {/* <a target="_blank" rel="noreferrer noopener" href={}>Get Directions</a><br /> */}

            <div className="updateElement">
              <p className="updateText">Update Booking</p>
              <div className="dateElement">
                <label htmlFor="date">New Date: </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  onChange={(e) => setDate(e.target.value)}
                />
                <button onClick={() => updateTicket(ticket, date)}>
                  Confirm
                </button>
              </div>
              <button className="deleteBtn" onClick={() => deleteBooking(ticket.id)}>
              Cancel Booking
            </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
  return (
    <>
      {tickets.length < 1 ? (
        <>
          <h3>No Tickets to show</h3>
        </>
      ) : (
        <>{ticketRender}</>
      )}
    </>
  );
};

export default Ticket;
