import React, { useState, useEffect } from 'react';
import axios from 'axios'

const SwApi = () => {

    const [ships, setShips] = useState([])

    const fetchShips = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.get('https://swapi.dev/api/starships/')

            setShips(res.data.results)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchShips()
    }, [])


    return (
        <div>
            <div className="card bg-dark text-white">
                {ships.map((item) => {
                    return (
                        <SwApi item={ships} />
                    )
                })
            }
                <img src="..." className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text">Last updated 3 mins ago</p>
                </div>
            </div>

            {
                <p>{console.log(ships)}</p>
            }
        </div>
    );
}

export default SwApi;
