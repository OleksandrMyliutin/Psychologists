import React from 'react'
import ActionButton from "../ActionButton/ActionButton"
import s from './AuthActions.module.css'
const AuthActions = () => {
    return (
        <div className={s.flexContainer}>
            <ActionButton color = "white">Log In</ActionButton>
            <ActionButton size="lg">Registration</ActionButton>
        </div>
    )
}

export default AuthActions
