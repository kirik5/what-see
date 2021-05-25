import React from "react"

const ButtonMyList = () => {
    return (
        <button className="btn btn--list movie-card__button" type="button">
            <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
            </svg>
            <span>My list</span>
        </button>
    )
}

export default ButtonMyList