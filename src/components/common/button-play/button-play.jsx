import React from "react"
import {useHistory} from "react-router-dom"

const ButtonPlay = ({filmId}) => {
    let history = useHistory()

    const clickPlayHandler = () => {
        history.push(`/play?filmId=${filmId}`)
    }

    return (
        <button className="btn btn--play movie-card__button" type="button" onClick={clickPlayHandler}>
            <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
        </button>
    )
}

export default ButtonPlay