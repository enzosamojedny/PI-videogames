import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { getVideogameName } from '../../redux/actions.js'
function SearchBar() {
    const { name } = useParams()
    const dispatch = useDispatch()
    const { videogameName } = useSelector((state) => state)

    const handleClick = () => {
        dispatch(getVideogameName(name))
    }
    return (
        <div className='navbar-wrapper'>
            <input type="text" className='navbar-searchbar' placeholder='Search..' />
            <button className='navbar-searchbar-btn' onClick={handleClick}>Busca</button>
        </div>
    )
}

export default SearchBar