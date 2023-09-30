import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllVideogames } from '../../redux/actions.js'
import CardListContainer from '../cards/CardListContainer.jsx'

function Home() {
    const dispatch = useDispatch()
    const videogames = useSelector((state) => state.videogames)
    useEffect(() => {
        dispatch(getAllVideogames())
        //eslint-disable-next-line
    }, [])

    return (
        <>
            <button style={{ backgroundColor: 'white', padding: '300' }}></button>

            <div>
                {
                    videogames?.map(({ id, name, background_image, genres, released, rating }) => {
                        return (
                            <div style={{ display: 'inline-flex', marginLeft: '75px', marginTop: '50px' }}>
                                <CardListContainer
                                    key={id}
                                    id={id}
                                    name={name}
                                    background_image={background_image}
                                    genres={genres}
                                    released={released}
                                    rating={rating}
                                />
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Home
