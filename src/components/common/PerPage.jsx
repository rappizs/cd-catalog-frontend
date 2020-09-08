import React, { Component } from 'react'

export class PerPage extends Component {
    render() {
        const { onChange } = this.props;

        return (
            <>
                <label htmlFor="perpage">Per page</label>
                <select name="perpage" id="perpage"
                    className="form-control" onChange={e => onChange(e.target.value)}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </>
        )
    }
}

export default PerPage
