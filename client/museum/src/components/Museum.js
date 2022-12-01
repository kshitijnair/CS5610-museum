import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Museum = () => {
    const [isLoading, setLoading] = useState(true);
    const [museum, setMuseum] = useState({});
    const [number, setNumber] = useState(1);
    const [date, setDate] = useState("");
    const [ticketPrice, setPrice] = useState(0);
    const [isBought, setBought] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    console.log("id in params", id);

    useEffect(() => {
        async function getMuseum() {
            const museumData = await fetchMuseum(id);
            console.log('--------------------------------')

            console.log(museumData);
            setMuseum(museumData);
            setLoading(false);
            setPrice(museumData.ticketPrice)
        }

        getMuseum();
    }, [])

    async function fetchMuseum(id) {
        const response = await fetch(
            `http://localhost:8080/museum/${id}`
        )
        const museumData = await response.json();
        return museumData;
    }

    function buyTicket(id, number, ticketPrice) {
        navigate(`/user/ticket?id=${id}&name=${museum.name}&number=${number}&price=${ticketPrice}&date=${date}&time=4PM&`)
    }

    const museumRender = (
        <div>
            <div className='museumCard'>
                <img src="" alt="" />
                <h2>{museum.name}</h2>
                <p>{museum.location}</p>
                <p>{museum.description}</p>
            </div>
            <div className='bookingCard'>
                <p>Buy Tickets:</p>
                <p>Price: ${ticketPrice * number}</p>
                <input type="number" name="number" id="number" value={number} 
                    onChange={(e) => setNumber(e.target.value)}/>
                <input type="date" name="date" id="date" 
                    onChange={(e) => setDate(e.target.value)}/>
                <button onClick={() => buyTicket(id, number, ticketPrice)}>Purchase</button>
            </div>
        </div>
    )

    return (
        <>{ isLoading ? <h1>Loading...</h1> : museumRender }</>
    )
}

export default Museum