import React from 'react'

const Ticket = ({ tickets }) => {
    console.log(tickets)
    tickets.map(ticket => {
        console.log(ticket)
    })

    const deleteBooking = async (id) => {
        const options = {
            method: "DELETE",
        }
        const response = await fetch('http://localhost', options);
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
                    <button onClick={() => deleteBooking(ticket.bookingID)}>Delete Booking</button>
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