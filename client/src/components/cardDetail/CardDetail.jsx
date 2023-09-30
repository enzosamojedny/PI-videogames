import React from 'react'

function CardDetail({ props }) {
    const { name, genres, background_image, description, platforms, released } = props
    return (
        <div>
            <h1>{name}</h1>
            <img src={background_image} alt={name} />
            <p>{description}</p>
            <h6>{genres}</h6>
        </div>
    )
}

export default CardDetail
