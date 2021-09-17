import React from 'react'
import './ActionButton.css'

interface ActionButtonProps {
    text: string
}

const ActionButton: React.FC<ActionButtonProps> = (props) => {
    return <div className="ActionButton">{props.text}</div>
}

export default ActionButton
