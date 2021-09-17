import React from 'react'
import { setConstantValue } from 'typescript'
import './InputWithLabel.css'

interface InputWithLabelProps {
    label: string
    value: string
    setValue(value: string): void
    type?: string
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({
    label,
    value,
    setValue,
    type = 'text',
}) => {
    return (
        <div className="InputWithLabel">
            <label className="InputWithLabel__label">{label}</label>
            <input
                className="InputWithLabel__input"
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    )
}

export default InputWithLabel
