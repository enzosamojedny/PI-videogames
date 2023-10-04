import React from 'react'
import { filter } from '../../redux/actions'
import { useDispatch } from 'react-redux'

function Filter() {
    const dispatch = useDispatch()
    function handleChange() {
        dispatch(filter(event.target.value))
    }
    return (
        <div>
            <select>
                <option value="Action" id="" name="" onChange={handleChange}>Action</option>
                <option value="RPG" id="" name="" onChange={handleChange}>RPG</option>
                <option value="Puzzle" id="" name="" onChange={handleChange}>Puzzle</option>
                <option value="Indie" id="" name="" onChange={handleChange}>Indie</option>
                <option value="Sports" id="" name="" onChange={handleChange}>Sports</option>
                <option value="Adventure" id="" name="" onChange={handleChange}>Adventure</option>
                <option value="Shooter" id="" name="" onChange={handleChange}>Shooter</option>
                <option value="Massively Multiplayer" id="" name="" onChange={handleChange}>Massively Multiplayer</option>
                <option value="Platformer" id="" name="" onChange={handleChange}>Platformer</option>
                <option value="Arcade" id="" name="" onChange={handleChange}>Arcade</option>
                <option value="Educational" id="" name="" onChange={handleChange}>Educational</option>
                <option value="Board Games" id="" name="" onChange={handleChange}>Board Games</option>
                <option value="Fighting" id="" name="" onChange={handleChange}>Fighting</option>
                <option value="Card" id="" name="" onChange={handleChange}>Card</option>
                <option value="Strategy" id="" name="" onChange={handleChange}>Strategy</option>
                <option value="Casual" id="" name="" onChange={handleChange}>Casual</option>
                <option value="Simulation" id="" name="" onChange={handleChange}>Simulation</option>
                <option value="Racing" id="" name="" onChange={handleChange}>Racing</option>
                <option value="Family" id="" name="" onChange={handleChange}>Family</option>
            </select>
        </div>
    )
}

export default Filter