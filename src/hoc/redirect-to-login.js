import {useSelector} from "react-redux";
import {isAuthorized} from "../reducers/authorization-slice";
import {Redirect, useHistory} from "react-router-dom";

const withRedirectToLogin = (Component) => {
    const ComponentWithRedirectToPath = (props) => {
        const isUserAuthorized = useSelector(isAuthorized)
        const history = useHistory()

        if (!isUserAuthorized) {
            return (
                <Redirect push to={{
                    pathname: "/login",
                    state: { referrer: history.location.pathname }
                }}  />
            )
        }

        return (
            <Component {...props}/>
        )
    }

    return ComponentWithRedirectToPath
}

export default withRedirectToLogin