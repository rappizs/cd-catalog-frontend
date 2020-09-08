import React, { Component } from 'react'

export class Select extends Component {

    render() {
        const { name, options,
            attribute, label, onChange } = this.props;

        return (
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <select name={name} id={name} className="form-control" onChange={(e) => onChange(name, e.target.value)}>
                    <option>Choose...</option>
                    {options.map((option, index) => (
                        <option key={index}>{option[attribute]}</option>
                    ))}
                </select>
            </div>
        )
    }
}

export default Select
