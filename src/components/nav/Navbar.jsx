import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light border mb-2">
                <ul className="navbar-nav mr-auto align-middle">
                    <li className="nav-item">
                        <a href="/disks" className="nav-link">
                           My Disks
                        </a> 
                    </li>
                    <li className="nav-item">
                        <a href="/artitst" className="nav-link">
                            Artists
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/styles" className="nav-link">
                            Styles
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar
