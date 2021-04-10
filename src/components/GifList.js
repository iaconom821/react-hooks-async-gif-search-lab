import React from "react"

function GifList({ displayGifs }){
    if(!displayGifs.data){
        return <h1>Invalid Search Term</h1>
    }

    console.log(displayGifs)
    //return null
    const displayArray = [displayGifs.data[0], displayGifs.data[1], displayGifs.data[2]].map((gif, index)=>
    {
        if(!gif){
            return <h1 key={ index }>Invalid Search Term</h1>
        }
        return (
            <li key={gif.id}>
                <img src={gif.images.original.url} alt={gif.title}/>
            </li>
        )
    })

    return (
        <ul>
            { displayArray }
        </ul>
    )

}

export default GifList