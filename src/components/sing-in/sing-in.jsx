import React from "react"
import VisuallyHidden from "../common/visually-hidden/visually-hidden"
import PageFooter from "../common/page-footer/page-footer"
import Logo from "../common/logo/logo";
import SingInForm from "./sing-in-form/sing-in-form";
import {useDispatch} from "react-redux";
import {login} from "../../reducers/autorization-slice";
import withRedirectToRoot from "../../hoc/redirect-to-root";


const SingIn = () => {
    const dispatch = useDispatch()

    const submitHandler = (value) => {
        dispatch(login({
            user: value['user-email'],
            password: value['user-password'],
        }))
    }


    return (
        <>
            <VisuallyHidden/>

            <div className="user-page">
                <header className="page-header user-page__head">

                    <Logo/>

                    <h1 className="page-title user-page__title">Sign in</h1>
                </header>

                <div className="sign-in user-page__content">

                    <SingInForm
                        onSubmit={submitHandler}
                    />

                </div>

                <PageFooter/>

            </div>
        </>
    )
}


export default withRedirectToRoot(SingIn)