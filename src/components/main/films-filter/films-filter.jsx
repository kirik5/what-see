import React from "react"
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {getAllGenres, resetCountOfFilmsInPage} from "../../../reducers/films-slice"


const FilmsFilter = ({genreType}) => {
    const allGenres = useSelector(getAllGenres)
    const dispatch = useDispatch()
    const clickLinkHandler = () => {
        dispatch(resetCountOfFilmsInPage())
    }

    return (
        <ul className="catalog__genres-list">
            {allGenres.map((genre, index) => {

                let classNameActive
                if (!genreType && genre === 'All genres') {
                    classNameActive = 'catalog__genres-item--active'
                } else {
                    classNameActive = (genreType?.toLowerCase() === genre.toLowerCase() && 'catalog__genres-item--active')
                }

                let to = genre.toLowerCase() === `all genres` ? `/` : `/genre/${genre.toLowerCase()}`

                return (
                    <li key={index}
                        className={`catalog__genres-item ${classNameActive}`}>
                        <Link
                            to={to}
                            className="catalog__genres-link"
                            onClick={clickLinkHandler}
                        >
                            {genre}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default FilmsFilter