import React from "react"
import {useDispatch} from "react-redux";
import {addCountOfFilmsInLikePage, addCountOfFilmsInPage} from "../../../reducers/films-slice";
import {addCountOfFavoriteFilmsInPage} from "../../../reducers/myfilmlist-slice";

const ShowMore = ({from}) => {
    const dispatch = useDispatch()

    const moreFilmsHandler = () => {
        if (from === 'main') {
            dispatch(addCountOfFilmsInPage())
        } else if (from === 'my-list') {
            dispatch(addCountOfFavoriteFilmsInPage())
        } else if (from === 'like') {
            dispatch(addCountOfFilmsInLikePage())
        }
    }

    return (
        <div className="catalog__more">
            <button className="catalog__button" type="button" onClick={moreFilmsHandler}>Show more</button>
        </div>
    )
}

export default ShowMore