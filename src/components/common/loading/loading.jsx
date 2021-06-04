import React from 'react'
import styles from './loading.module.css'

const Loading = () => {
    return (
        <div className={styles.loaderBackground}>
            <div className={styles.loader} >
                <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>

    )
}

export default Loading