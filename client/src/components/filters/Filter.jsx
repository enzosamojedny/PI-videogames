import React, { useEffect, useState } from 'react'
import { filter, reset, videogameRating, videogameSort } from '../../redux/actions'
import { useDispatch } from 'react-redux'

function Filter() {
    const dispatch = useDispatch()

    function handleSort(event) {
        const selectedSort = event.target.value;
        if (selectedSort !== 'default') {
            dispatch(videogameSort(selectedSort))
        }
    }
    function handleGenre() {
        const selectedGenre = event.target.value;
        dispatch(filter(selectedGenre));

    }

    function handleReset() {
        dispatch(reset(event.target.value))
    }
    function handleRating(event) {
        dispatch(videogameRating(event.target.value))
    }
    return (
        <div>
            <select onChange={handleGenre} defaultValue="default">
                <option value="default">Filter by genre</option>
                <option value="Action" id="" name="" >Action</option>
                <option value="RPG" id="" name="" >RPG</option>
                <option value="Puzzle" id="" name="" >Puzzle</option>
                <option value="Indie" id="" name="" >Indie</option>
                <option value="Sports" id="" name="" >Sports</option>
                <option value="Adventure" id="" name="" >Adventure</option>
                <option value="Shooter" id="" name="" >Shooter</option>
                <option value="Massively Multiplayer" id="" name="" >Massively Multiplayer</option>
                <option value="Platformer" id="" name="" >Platformer</option>
                <option value="Arcade" id="" name="" >Arcade</option>
                <option value="Educational" id="" name="" >Educational</option>
                <option value="Board Games" id="" name="" >Board Games</option>
                <option value="Fighting" id="" name="" >Fighting</option>
                <option value="Card" id="" name="" >Card</option>
                <option value="Strategy" id="" name="" >Strategy</option>
                <option value="Casual" id="" name="" >Casual</option>
                <option value="Simulation" id="" name="" >Simulation</option>
                <option value="Racing" id="" name="" >Racing</option>
                <option value="Family" id="" name="" >Family</option>
            </select>

            <select onChange={handleSort} >
                {/* defaultValue="default" */}
                <option disabled>Sort by name</option>
                {/* value="default" */}
                <option value="A">Ascending</option>
                <option value="D">Descending</option>
            </select>
            <select onChange={handleRating}>
                {/* defaultValue="default" */}
                {/* value="default" */}
                <option disabled>Sort by Rating</option>
                <option value="A">Ascending</option>
                <option value="D">Descending</option>
            </select>
            <button onClick={handleReset} style={{ border: '1px solid white', color: 'white', padding: '5px', fontSize: '1.5rem' }}>Reset</button>
        </div>
    )
}

export default Filter