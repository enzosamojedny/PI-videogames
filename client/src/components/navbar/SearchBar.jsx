import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { getVideogameName } from '../../redux/actions.js'

function SearchBar() {
    // const { name } = useParams() // Not used 
    const dispatch = useDispatch()
    const { videogameName } = useSelector((state) => state)
    const [searchInput, setSearchInput] = useState(''); // Here's where the search input state is housed

    const handleClick = () => {
        dispatch(getVideogameName(searchInput)) // Dispatches the current searchInput value
    }

    const handleInputChange = (e) => {
        setSearchInput(e.target.value); // Updates searchInput value everytime input changes
    }

    return (
        <div className='navbar-wrapper'>
            <input type="text" className='navbar-searchbar' placeholder='Search...' onChange={handleInputChange} />
            <button className='navbar-searchbar-btn' onClick={handleClick}>Search</button>
        </div>
    )
}

export default SearchBar;
