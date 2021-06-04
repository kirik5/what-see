import {useSelector} from "react-redux";
import {isAuthorized} from "../reducers/autorization-slice";
import {Redirect} from "react-router-dom";

const withRedirectToLogin = (Component) => {
    const ComponentWithRedirectToPath = (props) => {
        const isUserAuthorized = useSelector(isAuthorized)

        if (!isUserAuthorized) {
            return (
                <Redirect to={'/login'}/>
            )
        }

        return (
            <Component {...props}/>
        )
    }

    return ComponentWithRedirectToPath
}

export default withRedirectToLogin