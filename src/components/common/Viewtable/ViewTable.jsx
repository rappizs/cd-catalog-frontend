import React, { Component } from 'react'
import ViewTableHead from './ViewTableHead'
import ViewTableBody from './ViewTableBody'

export class ViewTable extends Component {
    render() {
        const { theads, rows, attributes,
            deleteRow, save, artists, styles, orderBy } = this.props;
        return (
            <table className="table table-hover">
                <ViewTableHead theads={theads} attributes={attributes} orderBy={orderBy} />
                <ViewTableBody rows={rows} attributes={attributes}
                    artists={artists} styles={styles}
                    deleteRow={deleteRow} save={save} />
            </table>
        )
    }
}

export default ViewTable
