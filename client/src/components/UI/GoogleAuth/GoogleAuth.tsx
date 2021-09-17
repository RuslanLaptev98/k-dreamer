import React from 'react'
import './GoogleAuth.css'

interface GoogleAuthProps {
    signUp: boolean
}

const GoogleAuth: React.FC<GoogleAuthProps> = (props) => {
    return (
        <div className="GoogleAuth">
            <div className="GoogleAuth__text">
                Sign {props.signUp ? 'Up' : 'In'} Via Google
            </div>
            <img
                src="./icons/google.svg"
                alt="Google Icon"
                className="GoogleAuth__icon"
            />
        </div>
    )
}

export default GoogleAuth
