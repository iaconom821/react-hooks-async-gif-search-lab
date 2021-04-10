import React, { useState, useEffect } from "react"

import GifList from "./GifList"
import GifSearch from "./GifSearch"


function GifListContainer() {
    const [gifs, setGifs] = useState([])
    const [search, setSearch] = useState("dolphins")

    // useEffect(()=>{
    //     fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=UKX6LBZkef8GhMBpsmVZyML0DtZ8XEPi&rating=g`)
    //     .then(res => res.json())
    //     .then( jsonData => setGifs(jsonData))
    // }, [])

    function handleSearch(query) {
        console.log(query)
        setSearch(query)
    }
    useEffect(()=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=UKX6LBZkef8GhMBpsmVZyML0DtZ8XEPi&rating=g`)
        .then(res => res.json())
        .then( jsonData => setGifs(jsonData))
    }, [search])


    return (
        <div>
            <GifSearch onSearch={ handleSearch }/>
            <GifList displayGifs={gifs}/>
        </div> 
    )
}

export default GifListContainer 
