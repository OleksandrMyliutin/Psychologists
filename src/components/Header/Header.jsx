import React from 'react'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'
import Container from '../Container/Container'
import AuthActions from '../AuthActions/AuthActions'

const Header = () => {
    return (
        <div>
            <Container>
                <Logo/>
                <Nav/>
                < AuthActions/>
            </Container>
        </div>
    )
}

export default Header
