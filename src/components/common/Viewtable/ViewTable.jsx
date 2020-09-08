import React, { Component } from 'react'
import ViewTableHead from './ViewTableHead'
import ViewTableBody from './ViewTableBody'

export class ViewTable extends Component {
    render() {
        const { theads, rows, attributes,
            deleteRow, save } = this.props;
        return (
            <table className="table table-hover">
                <ViewTableHead theads={theads} />
                <ViewTableBody rows={rows} attributes={attributes}
                    deleteRow={deleteRow} save={save} />
            </table>
        )
    }
}

export default ViewTable
