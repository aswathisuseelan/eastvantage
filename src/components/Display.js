import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Display = () => {
    const [refreshData, setRefreshData] = useState(false)
    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(false)
    const getData = async () => {
        setLoading(true)
        const response = await axios.get('https://randomuser.me/api')
        setLoading(false)
        const { title, first, last } = response.data.results[0].name;
        setName(`${title} ${first} ${last}`)
        setImage(response.data.results[0].picture.large)
    }
    useEffect(() => {
        getData()
    }, [refreshData])

    if (loading) {
        return <h1>Loading...</h1>
    }
    return (
        <div className='container'>
            <div className='card'>
                <div className='card-body mx-auto'>
                    <h2 className='card-text'>{name}</h2>
                    <img className="card-img-top" src={image} alt={name} style={{ width: '150px', height: '150px', display: 'block' }} />
                    <button onClick={() => setRefreshData(!refreshData)} className='btn btn-success my-2'>Get a random user</button>

                </div>
            </div>
        </div>
    )
}

export default Display