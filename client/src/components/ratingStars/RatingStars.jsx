import React from 'react';
import './ratingStars.css'; // Import the CSS file

function RatingStars({ games }) {
    const { rating, ratings_count } = games;

    const labels = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
    };

    const stars = [];
    for (let i = 0; i < 5; i++) {
        const starValue = i - 0.5;
        const filledStar = rating >= starValue;
        stars.push(
            <span key={starValue} className={filledStar ? 'star filled' : 'star empty'}>
                ★
            </span>
        );
    }

    return (
        <div>
            <div className="stars">{stars}</div>
            <div className="rating-label">{labels[rating]}</div>
            <div className="ratings-count">{ratings_count} votes</div>
        </div>
    );
}

export default RatingStars;
