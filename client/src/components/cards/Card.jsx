import { NavLink } from 'react-router-dom'
import './card.css'

function Card({ games }) {
    return (
        <>
            <NavLink to={`/detail/${games.id}`}>
                <button>
                    <div className="card-container">
                        <h1 className="card-h1">{games.name}</h1>
                        <img src={games.background_image} className='card-image' alt={games.name}></img>
                        {games.genres.map((genre, index) => <p style={{ color: 'white', border: '1px solid white', display: 'flex', flexDirection: 'row' }} key={index}>{genre}</p>)}
                    </div>
                </button>
            </NavLink>

        </>
    )
}

export default Card;
