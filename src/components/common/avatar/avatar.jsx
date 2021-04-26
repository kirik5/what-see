import React from "react"
import avatar from "../../../images/avatar.jpg";

const Avatar = () => {
    return (
        <div className="user-block">
            <div className="user-block__avatar">
                <img src={avatar} alt="User avatar" width="63" height="63"/>
            </div>
        </div>
    )
}

export default Avatar