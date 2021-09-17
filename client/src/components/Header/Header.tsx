import React from 'react'
import './Header.css'

const Header: React.FC = () => {
    return (
        <header className="Header">
            <img className="Header__logo" src="./logo.svg" alt="" />
            <div className="Header__titleGroup">
                <div className="Header__title">K-Dreamer</div>
                <div className="Header__slogan">
                    Make your Korean Dream come true!
                </div>
            </div>
        </header>
    )
}

export default Header
