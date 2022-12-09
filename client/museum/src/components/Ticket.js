import React, { useState } from "react";

const Ticket = ({ ticketsUpdated, setTicketsUpdated, tickets }) => {
  const [date, setDate] = useState("");
  console.log(tickets);
  tickets.map((ticket) => {
    console.log(ticket);
  });

  const deleteBooking = async (id) => {
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
            </div>
            <button onClick={() => deleteBooking(ticket.id)}>
              Delete Booking
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
