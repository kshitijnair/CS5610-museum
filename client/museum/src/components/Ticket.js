import React, { useState } from "react";

const Ticket = ({ ticketsUpdated, setTicketsUpdated, tickets }) => {
  const [date, setDate] = useState("");
  console.log(tickets);
  tickets.map((ticket) => {
    console.log(ticket);
  });

  const deleteBooking = async (id) => {
    setTicketsUpdated(!ticketsUpdated);
    console.log("ID IS: ---------", id);
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    };
    const response = await fetch(
      "https://museum-server-ae4u.onrender.com/tickets/delete",
      options
    );
  };

  const updateTicket = async (ticket) => {
    setTicketsUpdated(!ticketsUpdated);
    ticket.date = date;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticket),
    };
    const response = await fetch(
      "https://museum-server-ae4u.onrender.com/tickets/update",
      options
    );
  };

  function ParseDMS(coordinates) {
    console.log(typeof coordinates);
    const split = coordinates.split("°");
    console.log(split[1][1]);
    if (split[1][1] === `S` || split[1][1] === `W`) return "-" + split[0];
    return split[0];
  }

  const ticketRender = (
    <ul>
      {tickets.map((ticket) => (
        <li key={ticket._id}>
          <div>
            <div>
              <p>Ticket</p>
            </div>
            <div className="ticketSummary">
              <img className="ticketImage" src="" alt="" />
              <p>Booking Number #{ticket.id.toString().toUpperCase()}</p>
              <div>
                <p>{ticket.name}</p>
                <p>People attendig : {ticket.number}</p>
                <p>Date: {ticket.date}</p>
                <p>Time: {ticket.time}</p>
              </div>
              <p>Total: ${ticket.price * ticket.number}</p>
              {/* <p>{ParseDMS(ticket.latitude)}</p>
              <p>{ParseDMS(ticket.longitude)}</p> */}
            </div>
            <button
              onClick={() => {
                window.open(
                  `https://www.google.com/maps/search/?api=1&query=${ParseDMS(
                    ticket.latitude
                  )}%2C${ParseDMS(ticket.longitude)}`
                );
              }}
            >
              Get Directions
            </button>
            {/* <a target="_blank" rel="noreferrer noopener" href={}>Get Directions</a><br /> */}
            <button onClick={() => deleteBooking(ticket.id)}>
              Cancel Booking
            </button>
            <div>
              <p>Update Booking Here:</p>
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
