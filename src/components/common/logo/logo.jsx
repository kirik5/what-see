import React from "react"
import {Link} from "react-router-dom";

const Logo = ({classAlign = null}) => {
    const classes = ['logo__link']
    classAlign && classes.push(classAlign)

    return (
        <div className="logo">
            <Link to="/" className={classes.join(' ')}>
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
            </Link>
        </div>
    )
}

export default Logo