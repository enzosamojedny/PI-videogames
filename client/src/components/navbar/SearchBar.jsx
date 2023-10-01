import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { useState } from 'react'
import { getVideogameName } from '../../redux/actions.js'
import './searchbar.css'
import Loader from '../loader/Loader.jsx'
function SearchBar() {
    const { name } = useParams()
    const dispatch = useDispatch()
    const { videogameName } = useSelector((state) => state)
    const [searchInput, setSearchInput] = useState(name || '');
    const [loading, setLoading] = useState(true);

    const handleClick = (event) => {
        event.preventDefault()
        setLoading(true)//FIX LOADER LOGIC
        dispatch(getVideogameName(searchInput))
            .finally(() => setLoading(false));
    }
    const handleSearchFocus = () => {
        disableBodyScroll(); // Disable scroll when focusing on search
    };

    const handleSearchBlur = () => {
        enableBodyScroll(); // Enable scroll when blurring from search
    };

    const disableBodyScroll = () => {
        document.body.classList.add('no-scroll');
    };

    const enableBodyScroll = () => {
        document.body.classList.remove('no-scroll');
    };
    return (
        <div>
            <form>
                <input type="search" className='navbar-searchbar' placeholder='Search...' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} onFocus={handleSearchFocus} onBlur={handleSearchBlur} />
                <button className='navbar-searchbar-btn' onClick={handleClick} type='submit'>Search</button>
            </form>
            {loading ? (<Loader />) : (
                <div className='navbar-wrapper'>
                    {videogameName && (
                        <div className='navbar-item-container'>
                            <ul className='searchbar-ul'>
                                {videogameName.map((game) => (
                                    <div key={game.id} className='parent-container'>
                                        <NavLink to={`/detail/${game.id}`}>
                                            <li className='searchbar-li'>
                                                <hr style={{ marginTop: '10px', marginBottom: '10px' }} />
                                                <div className='game-wrapper'>
                                                    <img src={game.background_image} style={{ width: '80px' }} alt='Game' />
                                                    <h5>{game.name}</h5>
                                                </div>
                                            </li>
                                        </NavLink>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default SearchBar;
