import React from "react";
import {useHistory} from "react-router-dom";


const ExitButton = () => {
    const history = useHistory()

    const goBackHandler = () => {
        history.goBack()
    }

    return (
        <button
            type="button"
            className="player__exit"
            onClick={goBackHandler}
        >
            Exit
        </button>
    )
}

export default ExitButton