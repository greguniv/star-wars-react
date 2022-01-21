import React, { useState, useEffect } from 'react';
import axios from 'axios'

const SwApi = () => {

    const [ships, setShips] = useState([])

    const fetchShips = async () => {

        try {
            const res = await
                axios.get('https://swapi.dev/api/starships/')

            setShips(res.data.results)
            // console.log(ships)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchShips()
    }, [])


    return (
        <div className='main-container'>
            {
                ships.map((ship) => {
                    return (
                        <div className="card bg-dark text-white">
                            <div className="title-card" key={ship?.name}>
                                <h5 className="card-title">{ship.name}</h5>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default SwApi;