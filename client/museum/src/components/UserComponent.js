import React from 'react'
import Button from './Button'
import UserUpdateForm from './UserUpdateForm'
import { getUser, removeUser } from '../methods'
import { useState } from 'react'

const UserComponent = () => {

  return (
    <div>
        <Button text = "See First User" onClick={getUser} />
        <Button text = "Delete Current User" onClick={removeUser} />
        {/* // add form to add user */}
        <h5>---------update this user here---------</h5>
        <UserUpdateForm />
    </div>

  )
}

export default UserComponent