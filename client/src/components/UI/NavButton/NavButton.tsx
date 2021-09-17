import React from 'react'
import './NavButton.css'

interface NavButtonProps {
    mode: number
    currentMode: number
    setMode(): void
}

const NavButton: React.FC<NavButtonProps> = ({ children, ...props }) => {
    const buttonClassName =
        props.mode === props.currentMode
            ? 'NavButton NavButton-active'
            : 'NavButton'

    return (
        <div className={buttonClassName} onClick={() => props.setMode()}>
            {children}
        </div>
    )
}

export default NavButton
