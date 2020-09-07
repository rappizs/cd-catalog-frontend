import React, { Component } from 'react'

export class Input extends Component {
    render() {
        const { className, name, label, readOnly, value, onChange, type } = this.props;
        return (
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <input
                    className={className !== undefined ? "form-control " + className : "form-control"}
                    name={name}
                    type={type || "text"}
                    value={value || ""}
                    title={value}
                    readOnly={readOnly}
                    onChange={(e) => onChange(name, e.target.value)}
                />
            </div>
        )
    }
}

export default Input
