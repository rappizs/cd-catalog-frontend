import React, { Component } from 'react'

export class PaginationButton extends Component {

    getStyle() {
        const { currentPage, pageId } = this.props;

        if (currentPage === pageId)
            return "page-item active";
        else
            return "page-item";
    }

    render() {
        const { pageId, clickHandler } = this.props;
        return (
            <li className={this.getStyle()}>
                <button className="page-link"
                    onClick={() => clickHandler(pageId)}>
                    {pageId}
                </button>
            </li>
        )
    }
}

export default PaginationButton
