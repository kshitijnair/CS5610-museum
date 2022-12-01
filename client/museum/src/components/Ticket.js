import React from 'react'

const Ticket = ({ tickets }) => {
    console.log(tickets)
    tickets.map(ticket => {
        console.log(ticket)
    })

    const deleteBooking = async (id) => {
        console.log("ID IS: ---------", id)
        const options = {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id : id}),
        };
        const response = await fetch('https://museum-server-ae4u.onrender.com/tickets/delete', options);
        this.forceUpdate()
    }

    const ticketRender = (
        <ul>{
            tickets.map((ticket) => (
                <li key = {ticket.bookingID}><div>
                    <div>
                        <p>Ticket</p>
                    </div>
                    <div className='ticketSummary'>
                        <img className='ticketImage' src="" alt="" />
                        <p>Booking Number #{ticket.id.toString().toUpperCase()}</p>
                        <div>
                            <p>{ticket.name}</p>
                            <p>People attendig : {ticket.number}</p>
                            <p>Date: {ticket.date}</p>
                            <p>Time: {ticket.time}</p>
                        </div>
                        <p>Total: ${ticket.price * ticket.number}</p>
                    </div>
                    <button onClick={() => deleteBooking(ticket.id)}>Delete Booking</button>
                </div></li>
                )
            )}
        </ul>)
  return (
    <>
        {tickets.length < 1 ? <><h3>No Tickets to show</h3></>: <>{ticketRender}</>}
    </>
  )
}

export default Ticket