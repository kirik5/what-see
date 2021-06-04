import React from "react"
import styles from "../loading/loading.module.css";

const ErrorLoading = () => {
    return (
        <div className={styles.loaderBackground}>
            <div className={styles.errorMessage}>Error loading :(</div>
        </div>
    )
}

export default ErrorLoading