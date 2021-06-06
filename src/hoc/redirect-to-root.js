import {useSelector} from "react-redux";
import {isAuthorized} from "../reducers/authorization-slice";
import {Redirect} from "react-router-dom";

const withRedirectToRoot = (Component) => {
    const ComponentWithRedirectToPath = (props) => {
        const isUserAuthorized = useSelector(isAuthorized)

        if (isUserAuthorized) {
            return (
                <Redirect to={'/'}/>
            )
        }

        return (
            <Component {...props}/>
        )
    }

    return ComponentWithRedirectToPath
}

export default withRedirectToRoot