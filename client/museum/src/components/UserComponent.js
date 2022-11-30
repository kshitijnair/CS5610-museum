import React from "react";
import Button from "./Button";
import UserUpdateForm from "./UserUpdateForm";
import { useState } from "react";
import Ticket from "./Ticket";

const UserComponent = () => {
  const [user, setUser] = useState({});
  const tickets = [
    {
      bookingID: '842IUJ3',
      museumName: "Blitz London",
      amount: 4,
      date: '14 July, 2023',
      time: '4:30 PM',
      price: 142.45
    },
    {
      bookingID: '842IUJ33',
      museumName: "Blitz London",
      amount: 4,
      date: '14 July, 2023',
      time: '4:30 PM',
      price: 142.45
    }
  ]

  async function getUser() {
    const response = await fetch(
      "https://museum-server-ae4u.onrender.com/profile/getFirstUser"
    );
    const data = await response.json();
    console.log(data);
    setUser(data);
    console.log("getting user");
  }

  async function removeUser(id) {
    // const updatedUser = {
    // id: 2,
    // name: 'Nair',
    // email: 'kshitijnair@gmail.com',
    // phone: 6047284750
    // }
    // setUser(updatedUser)
    const url = `https://museum-server-ae4u.onrender.com/profile/deleteUser/?id=${id}`;
    let res = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    if (res.status === 200) {
      console.log("Successfully Deleted data...", id);
    } else {
      return `HTTP error: ${res.status}`;
    }
    const data = await res.json();
    console.log(data);
    setUser({});
  }

  const userRender = (
    <>
      <div className="userCard">
        <div>
          <img className="userImage" src="" alt="" />
          <p className="userName">Name</p>
        </div>
        <div className="userContact">
          <p className="userEmail">email@domain.com</p>
          <p className="userPhone">604-728-4750</p>
        </div>
      </div>
      <div>
        <p>Tickets:</p>
        <Ticket tickets={tickets}/>
      </div>
    </>
  )

  return (
    <div>
      <h4>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p id="id" style={{ display: "none" }}>
          {user._id}
        </p>
      </h4>
      <Button text="See First User" onClick={getUser} />
      <Button text="Delete Current User" onClick={() => removeUser(user._id)} />
      {/* // add form to add user */}
      <h5>---------update this user here---------</h5>
      <UserUpdateForm id={user} />
      <>{userRender}</>
    </div>
  );
};

export default UserComponent;
