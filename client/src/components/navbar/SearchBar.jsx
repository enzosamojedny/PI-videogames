import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { useState } from 'react'
import { getVideogameName } from '../../redux/actions.js'
import './searchbar.css'

function SearchBar() {
    const { name } = useParams()
    const dispatch = useDispatch()
    const { videogameName } = useSelector((state) => state)
    const [searchInput, setSearchInput] = useState(name || '');
    const [inputFocused, setInputFocused] = useState(false);

    const handleClick = (event) => {
        event.preventDefault()
        dispatch(getVideogameName(searchInput))
    }
    const handleSearchFocus = () => {
        setInputFocused(true);
    };

    const handleSearchBlur = () => {
        enableBodyScroll();
        setInputFocused(false);
    };


    const disableBodyScroll = () => {
        document.body.style.overflow = 'hidden';
    };

    const enableBodyScroll = () => {
        document.body.style.overflow = 'auto';
    };
    function shouldHideSearchBar() {
        if (!videogameName) {
            return searchContent.length === 0;
        }
        return false;
    }
    return (
        <div>
            <form className='searchbar-container'>
                <input type="search" className='navbar-searchbar' placeholder='Browse...' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} onFocus={handleSearchFocus} onBlur={handleSearchBlur} />
                <button className='bn3' onClick={handleClick} type='submit'>Search</button>
            </form>
            <div className='navbar-wrapper'>
                {videogameName && (
                    <div className='navbar-item-container'>
                        {videogameName.map((game) => (
                            <div key={game.id} className={inputFocused ? 'searchbar-wrapper parent-container' : 'searchbar-wrapper hidden parent-container'}>
                                <NavLink to={`/detail/${game.id}`}>
                                    <div className={shouldHideSearchBar() ? 'searchbar-wrapper hidden' : 'searchbar-wrapper'}>
                                        <div className='game-wrapper'>
                                            <img src={game.background_image} style={{ width: '80px' }} alt='Game' />
                                            <h5 className='game-titles'>{game.name}</h5>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        ))}

                    </div>
                )}
            </div>

        </div>
    )
}

export default SearchBar;
