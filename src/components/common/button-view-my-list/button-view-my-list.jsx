import React from "react";
import {useHistory} from "react-router-dom";


const ButtonViewMyList = () => {
    const history = useHistory()

    const viewMyListHandler = () => {
        history.push('/mylist')
    }

    return (
        <button className="btn movie-card__button" type="button" onClick={viewMyListHandler}>
            <span>View my list</span>
        </button>
    )
}


export default ButtonViewMyList