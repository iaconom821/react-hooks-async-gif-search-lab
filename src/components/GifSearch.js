import React, { useState } from "react"

function GifSearch({ onSearch }){
    const [searchInput, setSearchInput] = useState("")
    console.log(searchInput)
    function handleChange (evt){
        setSearchInput(evt.target.value)
    }

    function handleSubmit(evt){
        evt.preventDefault()
        console.log(searchInput)
        onSearch(searchInput)
    }

    return (
        <form onSubmit={ handleSubmit }>
            <label htmlFor="searchInput">Enter Search Input:</label>
            <input type="text" value={ searchInput } onChange={ handleChange }/>
            <input type="submit"/>
        </form>

    )
}

export default GifSearch