import React from 'react'
import { useState, useEffect } from 'react';

const TopMuseums = () => {
    const [isLoading, setLoading] = useState(true);
    const [list, setList] = useState([
        {
            name:'Museum 1',
            description: 'museum 1 lorem epsum'
        },
        {
            name:'Museum 2',
            description: 'museum 2 lorem epsum'
        },
        {
            name:'Museum 3',
            description: 'museum 3 lorem epsum'
        }
    ])

    useEffect(() => {
        async function getTopMuseums() {
            const data = fetchTopMuseums();
            // const topMuseums = data.json();
            setList(data);
            setLoading(false);
        }
        // get list of all museums and use setList to set the view of top museums
        getTopMuseums();
    }, [])

    async function fetchTopMuseums() {
        return list;
    }

    const lists = (
    <div>
        {/* <List list = {list}/> */}
        oops
    </div>
    )

    return (<>{ isLoading ? <h1>Loading...</h1> : lists }</>)
}

export default TopMuseums