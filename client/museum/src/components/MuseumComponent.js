import React from 'react'
import Header from './Header'
import Button from './Button'
import List from './List'
import { getMuseums } from '../methods'
import { useState } from 'react'

const MuseumComponent = () => {
  const [museumList, setList] = useState([
    {
      id: 1,
      name: 'MET'
    },
    {
      id: 2,
      name: "Unit London"
    },
    {
      id: 3,
      name: 'Vancouver Art Gallery'
    }
  ])

  return (
    <div>
        <Header title = "Museums"/>
        <Button text = "Get All Museums" onClick={getMuseums} />
        <List list = {museumList}/>
    </div>
  )
}

export default MuseumComponent