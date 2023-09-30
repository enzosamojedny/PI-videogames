import { NavLink, useParams } from 'react-router-dom'
import './card.css'

function Card({ games }) {

    return (
        <>
            <NavLink to={`/detail/${games.id}`}>
                <button>
                    <div className="card-container" >
                        <h1 className="card-h1">{games.name}</h1>
                        <img src={games.background_image} className='card-image' alt={games.name}></img>
                        <p style={{ color: 'white' }}>{games.rating}</p>
                    </div>
                </button>
            </NavLink>
        </>
    )
}

export default Card
