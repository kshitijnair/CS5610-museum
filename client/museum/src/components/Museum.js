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
        navigate(`/user/ticket?id=${id}&name=${museum.name}&number=${number}&price=${ticketPrice}&date=${date}&time=4PM&latitude=${museum.latitude}&longitude=${museum.longitude}`)
    }

    function ParseDMS(input) {
        var parts = input.split(/[^\d\w\.]+/);    
        var lat = ConvertDMSToDD(parts[0], parts[2], parts[3], parts[4]);
        var lng = ConvertDMSToDD(parts[5], parts[7], parts[8], parts[9]);
        console.log("Coordinated in DDM are: ", lat + ',' + lng);
        return {
            Latitude : lat,
            Longitude: lng,
            Position : lat + ',' + lng
        }
    }
    
    function ConvertDMSToDD(degrees, minutes, seconds, direction) {   
        var dd = Number(degrees) + Number(minutes)/60 + Number(seconds)/(60*60);
        if (direction == "S" || direction == "W") {
            dd = dd * -1;
        }
        return dd;
    }

    const museumRender = (
        <div className='museumContainer'>
            <div className='museumCard'>
                <div>
                    <img className='museumImage' src={museum.image} alt="" />   
                </div>
                <h2>{museum.name}</h2>
                <p>{museum.location}</p>
                <p>{museum.description}</p>
            </div>
            <div className='bookingCard'>
                <p>Buy Tickets:</p>
                <label htmlFor="number">No. of Tickets</label>
                <input className='number' type="number" name="number" id="number" value={number} 
                    onChange={(e) => setNumber(e.target.value)}/>
                    <br />
                <label htmlFor="date">Date of Visit</label>
                <input className='date' type="date" name="date" id="date" 
                    onChange={(e) => setDate(e.target.value)}/>
                <br /><br />
                <p>Price:</p>
                <p className='ticketPrice'>${ticketPrice * number}</p>
                <br />
                <button onClick={() => buyTicket(id, number, ticketPrice)}>Purchase</button>
                <p>{museum.latitude}</p>
                <p>{museum.longitude}</p>
            </div>
        {/* <GoogleMapsComponent coordinates={[{latitude: museum.latitude}, {longitude:museum.longitude}]} /> */}
        {/* <a href=
            {`https://www.google.com/maps/search/?api=1&query=${ParseDMS(museum.latitude)}%2C${ParseDMS(museum.longitude)}`}></a> */}
        </div>
    )

    return (
        <>{ isLoading ? <h1>Loading...</h1> : museumRender }</>
    )
}

export default Museum