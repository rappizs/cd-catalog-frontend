import React, { Component } from 'react'
import PaginationButton from './PaginationButton';

export class Pagination extends Component {
    render() {
        let pageIds = [];
        const { pageCount, currentPage, clickHandler } = this.props;

        if (pageCount < 8) {
            for (let i = 0; i < pageCount; i++) {
                pageIds[i] = i + 1;

            }
        }
        else {
            if (currentPage <= 3) {
                for (let i = 1; i <= currentPage + 3; i++) {
                    pageIds[i] = i;
                }
            }
            else if (currentPage > 3 && currentPage < pageCount - 3) {
                for (let i = currentPage - 3; i <= currentPage + 3; i++) {
                    pageIds[i] = i;
                }
            }
            else if (currentPage >= pageCount - 3) {
                for (let i = currentPage - 3; i <= pageCount; i++) {
                    pageIds[i] = i;
                }
            }
        }

        return (
            <>
                <ul className="pagination mb-5">
                    <li className="page-item">
                        <button className="page-link"
                            onClick={() => clickHandler(1)}>
                            first
                    </button>
                    </li>
                    {pageIds.map((pageId, index) => (
                        <PaginationButton key={index} pageId={pageId}
                            currentPage={currentPage} clickHandler={clickHandler} />
                    ))}
                    <li className="page-item">
                        <button className="page-link"
                            onClick={() => clickHandler(pageCount)}>
                            last
                    </button>
                    </li>
                </ul>
            </>
        )
    }
}

export default Pagination
