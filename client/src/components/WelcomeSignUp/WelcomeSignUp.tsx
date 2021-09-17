import React from 'react'
import InputWithLabel from '../UI/InputWithLabel/InputWithLabel'
import ActionButton from '../UI/ActionButton/ActionButton'
import './WelcomeSignUp.css'

const WelcomeSignUp: React.FC = () => {
    const [nickname, setNickname] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    return (
        <div className="WelcomeSignUp">
            <InputWithLabel
                label="Nickname"
                value={nickname}
                setValue={setNickname}
            />
            <InputWithLabel label="Email" value={email} setValue={setEmail} />
            <InputWithLabel
                label="Password"
                value={password}
                setValue={setPassword}
                type="password"
            />
            <ActionButton text="Sign Up" />
        </div>
    )
}

export default WelcomeSignUp
