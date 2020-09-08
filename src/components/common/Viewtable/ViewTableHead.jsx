import React, { Component } from 'react'

export class ViewTableHead extends Component {
    render() {
        const { theads, attributes, orderBy } = this.props;
        return (
            <thead>
                <tr>
                    {theads.map((h, index) => (
                        <th key={index} style={{ cursor: "pointer" }}
                            onClick={() => orderBy(attributes[index])}>{h}</th>
                    )
                    )}
                    <th></th>
                    <th></th>
                </tr>
            </thead>
        )
    }
}

export default ViewTableHead
