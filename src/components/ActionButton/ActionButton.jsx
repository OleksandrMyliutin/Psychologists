import React from 'react'
import s from './ActionButton.module.css'
const ActionButton = ({isButton = true, children}) => {
    return (
        <>
            if({isButton}){
                <button className={s.btnStandardStyle}>{children}</button>
            }
        </>
    )
}

export default ActionButton
