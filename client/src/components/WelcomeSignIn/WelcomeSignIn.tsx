import React from 'react'
import ActionButton from '../UI/ActionButton/ActionButton'
import InputWithLabel from '../UI/InputWithLabel/InputWithLabel'
import './WelcomeSignIn.css'

const WelcomeSignIn: React.FC = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    return (
        <div className="WelcomeSignIn">
            <InputWithLabel label="Email" value={email} setValue={setEmail} />
            <InputWithLabel
                label="Password"
                value={password}
                setValue={setPassword}
                type="password"
            />
            <ActionButton text="Sign In" />
        </div>
    )
}

export default WelcomeSignIn
