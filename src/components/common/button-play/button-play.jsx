import React from "react"
import {useHistory} from "react-router-dom"

const ButtonPlay = ({filmId}) => {
    let history = useHistory()

    const clickPlayHandler = () => {
        history.push(`/play?filmId=${filmId}`)
    }

    return (
        <button className="btn btn--play movie-card__button" type="button" onClick={clickPlayHandler} style={{justifyContent: 'center'}}>
            <span>Play</span>
        </button>
    )
}

export default ButtonPlay