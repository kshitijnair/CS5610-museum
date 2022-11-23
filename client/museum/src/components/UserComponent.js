import React from 'react'
import Button from './Button'
import UserUpdateForm from './UserUpdateForm'
import { useState } from 'react'

const UserComponent = () => {

  const [user, setUser] = useState({})

  function getUser() {
    const newUser = {
      id: 1,
      name: 'Kshitij',
      email: 'kshitijnair@gmail.com',
      phone: 6047284750
    }
    setUser(newUser);
    console.log('getting user');
  }
  
  function removeUser(id) {
    const updatedUser = {
      id: 2,
      name: 'Nair',
      email: 'kshitijnair@gmail.com',
      phone: 6047284750
    }
    setUser(updatedUser)
    console.log("deleted id is: ", id);
  }

  return (
    <div>
        <h4>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </h4>
        <Button text = "See First User" onClick={getUser} />
        <Button text = "Delete Current User" onClick={ () => removeUser(user.id)} />
        {/* // add form to add user */}
        <h5>---------update this user here---------</h5>
        <UserUpdateForm />
    </div>

  )
}

export default UserComponent