import React from "react"
import {addRemoveFilmInList, isFilmInFavoriteList} from "../../../reducers/myfilmlist-slice";
import {useDispatch, useSelector} from "react-redux";

const ButtonAddToMyList = ({id}) => {
    const dispatch = useDispatch()
    const isInFavoriteFilms = useSelector(isFilmInFavoriteList(id))
    const xlink = isInFavoriteFilms ? "in-list" : "add"

    const addRemoveFromFavoriteListHandler = () => {
        dispatch(addRemoveFilmInList(id))
    }

    return (
        <button className="btn btn--list movie-card__button" type="button" onClick={addRemoveFromFavoriteListHandler}>
            <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref={`#${xlink}`}></use>
            </svg>
            <span>My list</span>
        </button>
    )
}

export default ButtonAddToMyList