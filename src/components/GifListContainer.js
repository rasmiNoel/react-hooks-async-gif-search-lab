import React, { useState, useEffect } from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

function GifListContainer() {
    const [gifs, setGifs] = useState([])

    useEffect(() => {
        fetchGifs('dolphin')
    }, [])

    const fetchGifs = async (query) => {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        const json = await response.json()
        setGifs(json.data.slice(0, 3))
    }

    const handleSearchSubmit = (query) => {
        fetchGifs(query)
    }

    return (
        <div>
            <GifSearch onSubmit={handleSearchSubmit} />
            <GifList gifs={gifs} />
        </div>
    )
}

export default GifListContainer