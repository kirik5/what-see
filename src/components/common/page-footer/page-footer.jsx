import React from "react"
import Logo from "../logo/logo";

const PageFooter = () => {
    return (
        <footer className="page-footer">

            <Logo
                classAlign='logo__link--light'
            />

            <div className="copyright">
                <p>© 2021 What to watch Ltd.</p>
            </div>
        </footer>
    )
}

export default PageFooter