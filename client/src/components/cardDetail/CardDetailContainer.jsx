import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { getVideogameDetail } from '../../redux/actions.js'
import CardDetail from './CardDetail.jsx'

function CardDetailContainer() {
    const { detailId } = useParams()
    const dispatch = useDispatch()
    const { videogameDetail } = useSelector((state) => state)
    useEffect(() => {
        dispatch(getVideogameDetail(detailId))
    }, [])
    return (
        <div>
            <CardDetail props={videogameDetail} />
        </div>
    )
}

export default CardDetailContainer