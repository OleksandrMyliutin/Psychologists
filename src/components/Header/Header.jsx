import React from 'react'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'
import Container from '../Container/Container'
import AuthActions from '../AuthActions/AuthActions'
import s from './Header.module.css'

const Header = () => {
    return (
        <div>
            <Container>
                <div className={s.flexContainer}>
                    <Logo/>
                    <Nav/>
                    < AuthActions/>
                </div>
            </Container>
        </div>
    )
}

export default Header
