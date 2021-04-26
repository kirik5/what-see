import React from "react"
import {useDispatch} from "react-redux";
import {addCountOfFilmsInPage} from "../../../reducers/films-slice";

const ShowMore = () => {
    const dispatch = useDispatch()

    const moreFilmsHandler = () => {
        dispatch(addCountOfFilmsInPage())
    }

    return (
        <div className="catalog__more">
            <button className="catalog__button" type="button" onClick={moreFilmsHandler}>Show more</button>
        </div>
    )
}

export default ShowMore