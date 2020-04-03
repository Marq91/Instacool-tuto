import * as React from 'react'
import { WrappedFieldProps } from 'redux-form'

const style = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRaduis: '4px',
    marginBottom: '10px',
    padding: '10px 15px',
    width: 'calc(100% - 30px)',
}

const spanStyle = {
    color: '#777',
    fontSize: '10px',
    fontWeight: 900,
    textTransform: 'uppercase',
} as React.CSSProperties

interface IInputProps {
    placeholder?: string
    label: string
}

const Input: React.StatelessComponent<WrappedFieldProps & IInputProps> = props => {
    const { label } = props
        // {...this.props} significa q extraeremos todas las propiedades que vienen de props desde el padre. es un destructuring pero de todo
        return (
            <div>
                <span style={spanStyle}>{label}</span>
                <input {...props} {...props.input} style={style} />
            </div>
        )
}

export default Input