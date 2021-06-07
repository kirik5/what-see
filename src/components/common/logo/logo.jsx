import React from "react"
import {Link} from "react-router-dom";
import {resetCountOfFilmsInLikePage, resetCountOfFilmsInPage} from "../../../reducers/films-slice";
import {useDispatch} from "react-redux";
import {resetCountOfFavoriteFilmsInPage} from "../../../reducers/myfilmlist-slice";

const Logo = ({classAlign = null}) => {
    const dispatch = useDispatch()
    const resetCountOfFilmsInPageHandler = () => {
        dispatch(resetCountOfFilmsInPage())
        dispatch(resetCountOfFilmsInLikePage())
        dispatch(resetCountOfFavoriteFilmsInPage())
    }

    const classes = ['logo__link']
    classAlign && classes.push(classAlign)

    return (
        <div className="logo">
            <Link to="/" className={classes.join(' ')} onClick={resetCountOfFilmsInPageHandler}>
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
            </Link>
        </div>
    )
}

export default Logo