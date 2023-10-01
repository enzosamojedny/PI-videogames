import Navbar from '../navbar/Navbar'
import RatingStars from '../ratingStars/RatingStars'
import './cardDetail.css'

function CardDetail({ props }) {
    //eslint-disable-next-line
    const { name, genres, background_image, description, platforms, released, rating, ratings_count } = props
    return (
        <>
            <Navbar />
            <div className='detail-whole-container'>
                <div className='detail-container'>
                    <h1 className='detail-title'>{name}</h1>
                    <img src={background_image} alt={name} className='detail-image' />
                    <div className='description-container'>
                        <p className='detail-description'>{description}</p>
                    </div>
                    {genres?.map((genre, index) => <p style={{ color: 'white', border: '1px solid white', display: 'flex', flexDirection: 'row' }} key={index}>{genre}</p>)}
                    <p className='released'>Release date: {released}</p>
                    <p className='rating'>{rating}</p>
                    <p className='ratings-count'>{ratings_count}</p>
                    <RatingStars games={props} />
                </div>
            </div>
        </>
    )
}

export default CardDetail
