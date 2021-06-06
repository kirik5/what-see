import React from "react"
import avatar from "../../../images/avatar.jpg";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {isAuthorized, logout} from "../../../reducers/authorization-slice";

const Avatar = () => {
    const isUserAuthorized = useSelector(isAuthorized)
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <div className="user-block">
            {isUserAuthorized ? (
                <div className="user-block__avatar" style={{cursor: 'pointer'}}>
                    <img src={avatar} alt="User avatar" width="63" height="63" onClick={logoutHandler}/>
                </div>
            ) : (
                <NavLink to={'/login'} style={{color: '#EEE5B5'}}>Login</NavLink>
            )}


        </div>
    )
}

export default Avatar