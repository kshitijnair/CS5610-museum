import React from 'react'

const Ticket = ({ tickets }) => {
    console.log(tickets)
    tickets.map(ticket => {
        console.log(ticket)
    })

  return (<ul>
    {
        tickets.map((ticket) => 
            (
            <li key = {ticket.bookingID}><div>
                <div>
                    <p>Ticket</p>
                </div>
                <div className='ticketSummary'>
                    <img className='ticketImage' src="" alt="" />
                    <p>Booking Number #{ticket.bookingID}</p>
                    <div>
                        <p>{ticket.museumName}</p>
                        <p>{ticket.amount}</p>
                        <p>{ticket.date}</p>
                        <p>{ticket.time}</p>
                    </div>
                    <p>${ticket.price}</p>
                </div>
            </div></li>
            )
        )
    }
  </ul>)
}

export default Ticket