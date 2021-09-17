import React from 'react'
import './Welcome.css'
import { connect } from 'react-redux'
import { setToSignIn, setToSignUp } from '../../store/index'
import NavButton from '../../components/UI/NavButton/NavButton'
import WelcomeSignIn from '../../components/WelcomeSignIn/WelcomeSignIn'
import WelcomeSignUp from '../../components/WelcomeSignUp/WelcomeSignUp'

interface WelcomeProps {
    mode: number
    setToSignIn(): void
    setToSignUp(): void
}

const Welcome: React.FC<WelcomeProps> = (props) => {
    return (
        <div className="Welcome">
            <div className="Welcome__nav">
                <NavButton
                    setMode={props.setToSignIn}
                    mode={1}
                    currentMode={props.mode}
                >
                    Sign In
                </NavButton>
                <NavButton
                    setMode={props.setToSignUp}
                    mode={0}
                    currentMode={props.mode}
                >
                    Sign Up
                </NavButton>
            </div>
            <div className="Welcome__main">
                {props.mode === 1 ? <WelcomeSignIn /> : <WelcomeSignUp />}
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        mode: state.welcome.mode,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setToSignIn: () => dispatch(setToSignIn()),
        setToSignUp: () => dispatch(setToSignUp()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
