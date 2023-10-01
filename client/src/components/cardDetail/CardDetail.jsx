import React from 'react'
import RatingStars from '../ratingStars/RatingStars'
function CardDetail({ props }) {
    const { name, genres, background_image, description, platforms, released, rating, ratings_count } = props
    return (
        <div>
            <h1>{name}</h1>
            <img src={background_image} alt={name} />
            <p>{description}</p>
            <h6>{genres}</h6>
            <p>{released}</p>
            <p>{rating}</p>
            <p>{ratings_count}</p>
            <RatingStars games={props} />
        </div>
    )
}

export default CardDetail
