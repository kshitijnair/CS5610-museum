import React from 'react'
import Button from './Button'
import UserUpdateForm from './UserUpdateForm'
import { useState } from 'react'

const UserComponent = () => {

  const [user, setUser] = useState({})

  async function getUser() {
    let newUser = {}
    const response = await fetch('http://localhost:3005/profile/getFirstUser') 
    const data = await response.json();
    console.log(data)
    setUser(data);
    console.log('getting user');
  }
  
  async function removeUser(id) {
    // const updatedUser = {
    // id: 2,
    // name: 'Nair',
    // email: 'kshitijnair@gmail.com',
    // phone: 6047284750
    // }
    // setUser(updatedUser)
    const url = `http://localhost:3005/profile/deleteUser/?id=${id}`;
    let res = await fetch(url, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
      }
  });
  if (res.status === 200) {
      console.log('Successfully Deleted data...', id);
  } else {
      return `HTTP error: ${res.status}`;
  }
    const data = await res.json();
    console.log(data);
    setUser({});
  }

  return (
    <div>
        <h4>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p id='id' style={{display: 'none'}}>{user._id}</p>
        </h4>
        <Button text = "See First User" onClick={getUser} />
        <Button text = "Delete Current User" onClick={ () => removeUser(user._id)} />
        {/* // add form to add user */}
        <h5>---------update this user here---------</h5>
        <UserUpdateForm id = {user}/>
    </div>

  )
}

export default UserComponent