import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { clearDetail, getVideogameDetail } from '../../redux/actions.js'
import CardDetail from './CardDetail.jsx'
import Loader from '../loader/Loader.jsx'

function CardDetailContainer() {
    const { detailId } = useParams()
    const dispatch = useDispatch()
    const { videogameDetail } = useSelector((state) => state)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let timeoutId;
        dispatch(getVideogameDetail(detailId))
            .then(() => {
                timeoutId = setTimeout(() => setLoading(false), 1000);
            })
            .catch(() => {
                timeoutId = setTimeout(() => setLoading(false), 1000);
            });
    }, [])
    useEffect(() => {
        dispatch(clearDetail())

    }, [])
    return (
        <div>
            <CardDetail props={videogameDetail} loading={loading} />
        </div>
    )
}

export default CardDetailContainer