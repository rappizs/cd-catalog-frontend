import React, { Component } from 'react'
import ViewTableRow from './ViewTableRow';

export class ViewTableBody extends Component {
    render() {
        const { rows } = this.props;
        return (
            <tbody>
                {rows.map((row, index) => (
                    <ViewTableRow {...this.props} row={row}
                        key={index} />
                ))}
            </tbody>
        )
    }
}

export default ViewTableBody
